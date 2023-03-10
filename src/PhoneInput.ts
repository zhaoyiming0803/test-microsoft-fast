import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element'

const template = html<PhoneInput>`
  <div class="phone-input-container">
    <input 
      type=${x => x.type}
      value=${x => x.value}
      max=${x => x.max}
      maxlength=${x => x.maxlength}
      min=${x => x.min}
      minlength=${x => x.minlength}
      placeholder=${x => x.placeholder} />
  </div>
`

const styles = css``

@customElement({
  name: 'phone-input-tag',
  template,
  styles
})

export class PhoneInput extends FASTElement {
  @attr type: string = 'text'
  @attr value: string = ''
  @attr placeholder: string = ''
  @attr min: string = ''
  @attr minlength: string = ''
  @attr max: string = ''
  @attr maxlength: string = ''
  @attr readonly: boolean = false
  @attr disabled: boolean = false
  @attr required: boolean = false
  @attr errormsg: string = ''

  constructor () {
    super()
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    console.log('attributeChangedCallback name: ', name)
    console.log('attributeChangedCallback oldValue: ', oldValue)
    console.log('attributeChangedCallback newValue: ', newValue)
    // @ts-ignore
    this[name] = newValue
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    console.log('phone-input-tag is now connected to the DOM: ', this.shadowRoot?.querySelector('input'))
  }
}