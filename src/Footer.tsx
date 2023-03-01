import React, { useEffect, useState } from 'react'

import { createRoot, Root } from 'react-dom/client'

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
    <div>TestFooter: {count}</div>
    <div>greeting: {greeting}</div>
    <ComponentA count={count}></ComponentA>
  </div>
}

interface OnChangeFooterCount {
  (count: number): void
}


export const FooterTag = customElements.define('footer-tag', class extends HTMLElement {
  private root: Root | null = null

  private greeting: string = ''

  private onChangeFooterCount: OnChangeFooterCount = (count: number) => {}

  constructor () {
    super()

    const dom = document.createElement('div')
    dom.innerHTML = `
      <div class="footer-container"></div>
    `
    this.attachShadow({ mode: 'open' }).appendChild(
      dom.cloneNode(true)
    )

    this.onChangeFooterCount = (count: number) => {
      this.dispatchEvent(new CustomEvent('on-change-footer-count', {
        detail: {
          count
        }
      }))
    }
  }

  greetingChanged (value: string) {
    console.log('this.greeting: ', this.greeting, value)
    this.render()
    this.dispatchEvent(new CustomEvent('on-change-footer-greeting', {
      detail: {
        greeting: this.greeting
      }
    }))
  }

  attributeChangedCallback (name: string, oldValue: string, newValue: string) {
    console.log('name: ', name)
    if (name === 'greeting') {
     this.greetingChanged(newValue)
    }
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    // @ts-ignore
    // super.connectedCallback()
    this.root = createRoot(this.shadowRoot?.querySelector('.footer-container') as Element)
    this.render()
    // dispatchEvent after fister render
    console.log('footer-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<TestFooter greeting={this.greeting} onChangeFooterCount={this.onChangeFooterCount}></TestFooter>)
  }
})

