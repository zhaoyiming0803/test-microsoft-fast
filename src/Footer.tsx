import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element'

import React, { useEffect, useState } from 'react'
import { createRoot, Root } from 'react-dom/client'

interface ComponentAProps {
  count: number
}

interface TestFooterProps {
  greeting: string
}

function ComponentA (props: ComponentAProps) {
  const { count } = props
  return <>ComponentA count from props: {count}</>
}

function TestFooter (props: TestFooterProps) {
  const { greeting } = props
  const [count, setCount] = useState<number>(0)

  let timer: NodeJS.Timeout
  useEffect(() => {
    timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return <div>
    <div>TestFooter: {count}</div>
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
`

@customElement({
  name: 'footer-tag',
  template,
  styles
})
export class Footer extends FASTElement {
  @attr greeting: string = 'Hello Footer'

  private root: Root | null = null

  constructor () {
    super()
  }

  handleClick (value: string) {
    console.log('handleClick: ', value)
  }

  greetingChanged () {
    console.log('this.greeting: ', this.greeting)
    this.render()
    this.dispatchEvent(new CustomEvent('on-change-greeting', {
      detail: {
        greeting: this.greeting
      }
    }))
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    this.root = createRoot(this.shadowRoot?.querySelector('.footer-container') as Element)
    this.render()
    console.log('footer-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<TestFooter greeting={this.greeting}></TestFooter>)
  }
}
