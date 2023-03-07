import React from 'react'
import { createRoot, Root } from 'react-dom/client'

import { Button, Toast } from '@douyinfe/semi-ui'

import '@douyinfe/semi-ui/dist/css/semi.css'

function TestSemiUi () {
  const onClickButton = () => {
    const message = 'On click semi button'
    console.log(message)
    Toast.warning(message)
  }
  return <>
    <Button type="primary" onClick={onClickButton}>Button</Button>
  </>
}

const root: Root = createRoot(document.querySelector('#root') as Element)

root.render(<TestSemiUi></TestSemiUi>)

