import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

import React from 'react'

import { createRoot, Root } from 'react-dom/client'

import { Form, Input, Button, Checkbox } from '@arco-design/web-react'

import '@arco-design/web-react/dist/css/arco.css'

function HeaderComponent () {
  return <>
    <Form style={{ width: 600 }} autoComplete='off'>
      <Form.Item label='Username'>
        <Input placeholder='please enter your username...' />
      </Form.Item>
      <Form.Item label='Post'>
        <Input placeholder='please enter your post...' />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5 }}>
        <Checkbox>I have read the manual</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5 }}>
        <Button type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  </>
}

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
  private root: Root | null = null

  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()

    this.root = createRoot(this.shadowRoot?.querySelector('.header-container') as Element)
    this.render()

    console.log('header-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<HeaderComponent></HeaderComponent>)
  }
}
