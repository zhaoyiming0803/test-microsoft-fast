import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

import React, { useLayoutEffect } from 'react'

import { createRoot, Root } from 'react-dom/client'

function LineComponent () {
  useLayoutEffect(() => {
    console.log('LineComponent useLayoutEffect')
  }, [])
  return <div className="line-container">------------------------<slot></slot>----------------------------</div>
}

const template = html<Line>`
  <div class="line-container"></div>
`

const styles = css`
  .line-container {
    width: 100%;
    color: #f00;
  }
`

@customElement({
  name: 'line-tag',
  template,
  styles
})
export class Line extends FASTElement {
  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    const root: Root = createRoot(this.shadowRoot?.querySelector('.line-container') as Element)
    root.render(<LineComponent></LineComponent>)
    console.log('line-tag is now connected to the DOM')
  }
}
