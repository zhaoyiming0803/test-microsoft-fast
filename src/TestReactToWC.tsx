import React, { useState, useEffect } from 'react'

import * as ReactDOM from 'react-dom/client'

// @ts-ignore
import reactToWebComponent from 'react-to-webcomponent'

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


function TestReactToWC () {
  const [countInLine1, setCountInLine1] = useState(0)

  let timer: null | NodeJS.Timeout

  useEffect(() => {
    timer = setInterval(() => {
      setCountInLine1(countInLine1 + 1)
    }, 1000)

    return () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      } 
    }
  })

  return <div style={{ width: '100%', color: 'blue', fontWeight: 600 }}>
    <div>-------countInLine1: {countInLine1}----------</div>
    <MyFormComponent></MyFormComponent>
  </div>
}

const TestReactToWCTag = reactToWebComponent(TestReactToWC, React, ReactDOM)

customElements.define('test-react-to-wc-tag', TestReactToWCTag)
