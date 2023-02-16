import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

const template = html<Header>`
  <div class="header-container">This is Header</div>
`

const styles = css`
  .header-container {
    color: red;
  }
`

@customElement({
  name: 'header-tag',
  template,
  styles
})
export class Header extends FASTElement {
  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    console.log('header-tag is now connected to the DOM')
  }
}
