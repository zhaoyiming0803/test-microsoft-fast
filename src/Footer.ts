import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

const template = html<Footer>`
  <div class="header-container">This is Footer</div>
`

const styles = css`
  .header-container {
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
    console.log('footer-tag is now connected to the DOM')
  }
}
