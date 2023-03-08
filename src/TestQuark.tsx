import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

import React, { useState } from 'react'

import { createRoot, Root } from 'react-dom/client'

import { Button, Checkbox, CheckboxGroup, Switch, Field, Radio, Search, Textarea, Rate, Stepper, DatetimePicker } from '@quarkd/quark-react'

function TestQuarkComponent () {
  const [groupValue, setGroupValue] = useState<string[]>(["苹果", "橘子"])

  const onChangeCheckbox = (e: any) => {
    console.log('on change checkbox: ', e)
    setGroupValue(() => e.detail.value)
  }

  const onChangeSwitch = (e: any) => {
    console.log('on change switch: ', e)
  }

  return <>
    <Button type="primary" size="small">Button</Button>

    {/* <Switch checked></Switch>
    <Field></Field>
    <Search></Search>
    <Textarea></Textarea>
    <Rate></Rate>
    <Stepper></Stepper>
    <DatetimePicker open={true}></DatetimePicker> */}

    <Radio>Radio</Radio>
    <CheckboxGroup value={groupValue.join()} onChange={onChangeCheckbox}>
      <Checkbox name="apple"></Checkbox>
      <Checkbox name="warning">橘子</Checkbox>
      <Checkbox name="banana">香蕉</Checkbox>
    </CheckboxGroup>
  </>
}

const template = html<TestQuark>`<div class="test-quark-container"></div>`

const styles = css``

@customElement({
  name: 'test-quark-tag',
  template,
  styles
})
export class TestQuark extends FASTElement {
  private root: Root | null = null

  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    this.root = createRoot(this.shadowRoot?.querySelector('.test-quark-container') as Element)
    this.render()
    console.log('test-quark-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<TestQuarkComponent></TestQuarkComponent>)
  }
}
