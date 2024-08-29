import React from 'react'
import {Button} from 'antd'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Rout />
      </BrowserRouter>
    </>
  )
}

export default App