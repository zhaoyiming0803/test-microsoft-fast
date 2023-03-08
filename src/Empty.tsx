import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

import React from 'react'

import { createRoot, Root } from 'react-dom/client'

function EmptyComponent () {
  console.log('Rnder EmptyComponent')
  return <>Empty</>
}

const template = html<Empty>`
  <div class="empty-container"></div>
`

const styles = css``

@customElement({
  name: 'empty-tag',
  template,
  styles,
  shadowOptions: null
})
export class Empty extends FASTElement {
  private root: Root | null = null

  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()

    this.root = createRoot(this.$fastController.element.querySelector('.empty-container') as Element)
    this.render()

    console.log('empty-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<EmptyComponent></EmptyComponent>)
  }
}
