import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element'

import React, { useEffect, useState } from 'react'

import { createRoot, Root } from 'react-dom/client'

// 因 shadow-dom 样式隔离机制，外部样式一律不生效
// import './styles.less'

interface ComponentAProps {
  count: number
}

interface TestFooterProps {
  greeting: string
  onChangeFooterCount: (count: number) => void
}

function ComponentA (props: ComponentAProps) {
  const { count } = props
  return <>ComponentA count from props: {count}</>
}

function TestFooter (props: TestFooterProps) {
  const { greeting, onChangeFooterCount } = props
  const [count, setCount] = useState<number>(0)

  let timer: NodeJS.Timeout
  useEffect(() => {
    timer = setInterval(() => {
      setCount(count + 1)
      onChangeFooterCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return <div>
    <div className="count-in-footer">TestFooter: {count}</div>
    <div>greeting: {greeting}</div>
    <ComponentA count={count}></ComponentA>
  </div>
}

const template = html<Footer>`
  <div class="footer-container" @click=${x => x.handleClick('123')}></div>
`

const styles = css`
  .footer-container {
    color: blue;
  }
  .count-in-footer {
    color: red;
  }
`

interface OnChangeFooterCount {
  (count: number): void
}

@customElement({
  name: 'footer-tag',
  template,
  styles
})
export class Footer extends FASTElement {
  @attr({ mode: 'fromView' }) 
  public greeting: string = 'Hello Footer'
  protected greetingChanged (prev: string, next: string) {
    console.log('prev greeting: ', prev)
    console.log('next greeting: ', next)
    // next === this.greeting
    console.log('this.greeting: ', this.greeting)
    
    this.render()

    if (!this.$fastController.isConnected) {
      return
    }

    // trigger a event

    this.dispatchEvent(new CustomEvent('on-change-footer-greeting', {
      detail: {
        greeting: this.greeting
      }
    }))

    // ...... or ..........

    this.$emit('on-change-footer-greeting', this)
  }

  private root: Root | null = null

  private onChangeFooterCount: OnChangeFooterCount = (count: number) => {}

  constructor () {
    super()

    this.onChangeFooterCount = (count: number) => {
      this.dispatchEvent(new CustomEvent('on-change-footer-count', {
        detail: {
          count
        }
      }))
    }
  }

  handleClick (value: string) {
    console.log('handleClick: ', value)
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    this.root = createRoot(this.shadowRoot?.querySelector('.footer-container') as Element)
    this.render()
    // dispatchEvent after fister render
    console.log('footer-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<TestFooter greeting={this.greeting} onChangeFooterCount={this.onChangeFooterCount}></TestFooter>)
  }
}
