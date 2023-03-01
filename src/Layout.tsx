import { FASTElement, customElement, attr, html, css } from '@microsoft/fast-element'

const template = html<Layout>`
  <div class="header" id="header">
    <slot name="header"></slot>
  </div>

  <div class="body">
    This is Body
  </div>

  <div class="footer">
    <slot name="footer"></slot>
  </div>
`

const styles = css`
  .body {
    color: black;
    padding: 32px 8px;
    font-size: 42px;
    font-family: cursive;
  }
`

@customElement({
  name: 'layout-tag',
  template,
  styles
})
export class Layout extends FASTElement {
  @attr greeting: string = 'Hello'

  constructor () {
    super()
    console.log('Runs when the element is created or upgraded. FASTElement will attach the shadow DOM at this time.')
  }

  greetingChanged() {
    console.log('greetingChanged: ', this.greeting)

    const bodyEl = this.shadowRoot!.querySelector('.body')
    
    if (bodyEl) {
      bodyEl.innerHTML = this.greeting
    }
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    console.log('layout-tag is now connected to the DOM')
    this.shadowRoot!.querySelector('.body')!.innerHTML = this.greeting
  }
}
