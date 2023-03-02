import { FASTElement, customElement, html, css } from '@microsoft/fast-element'

import React from 'react'

import { createRoot, Root } from 'react-dom/client'

import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select
} from 'antd'

import type { CheckboxValueType } from 'antd/es/checkbox/Group'

import type { DatePickerProps } from 'antd'

function MyFormComponent () {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onSelectChange = (selected: string) => {
    console.log(`select ${selected}`)
  }

  const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)
  }

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="Who" name="who">
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={onSelectChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true }
          ]}
        />
      </Form.Item>

      <Form.Item label="Date" name="date">
        <DatePicker onChange={onDateChange} />
      </Form.Item>

      <Form.Item label="Fruit" name="fruit">
        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckboxChange}>
          <Row>
            <Col span={8}>
              <Checkbox value="Apple">Apple</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Pear">Pear</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Orange">Orange</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const template = html<MyForm>`<div class="my-form-container"></div>`

const styles = css``

@customElement({
  name: 'my-form-tag',
  template,
  styles,
  shadowOptions: null
})
export class MyForm extends FASTElement {
  private root: Root | null = null

  constructor () {
    super()
  }

  connectedCallback() {
    // Runs when the element is inserted into the DOM. 
    // On first connect, FASTElement hydrates the HTML template, connects template bindings, and adds the styles.
    super.connectedCallback()
    this.root = createRoot(this.$fastController.element.querySelector('.my-form-container') as Element)
    this.render()
    console.log('my-form-tag is now connected to the DOM')
  }

  render () {
    this.root?.render(<MyFormComponent></MyFormComponent>)
  }
}
