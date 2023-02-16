import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element'

import React, { useEffect, useState } from 'react'
import { createRoot, Root } from 'react-dom/client'

function TestFooter () {
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
  return <div>TestFooter: {count}</div>
}

const template = html<Footer>`
  <div class="footer-container"></div>
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
  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    const root: Root = createRoot(this.shadowRoot?.querySelector('.footer-container') as Element)
    root.render(<TestFooter></TestFooter>)
    console.log('footer-tag is now connected to the DOM')
  }
}
