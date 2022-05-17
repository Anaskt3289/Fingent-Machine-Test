import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import AddProduct from '../AddProduct/AddProduct'
import RemoveProduct from '../RemoveProduct/RemoveProduct'
import './Styles/GetQuantity.css'

function GetQuantity({ pageType }) {

  const [count, setCount] = useState()
  const [countSubmit, setCountSubmit] = useState(false)

  return (
    <div className='AddRemoveProduct'>
      <Form.Label htmlFor="inputPassword5" className='QuantityLabel'>Enter the Items to {pageType}</Form.Label>
      <div className='QuantityOuter'>
        <Form.Control
          type="number"
          aria-describedby="passwordHelpBlock"
          className='QuantityTextbox'
          onChange={(e) => {
            setCount(e.target.value)
            setCountSubmit(false)
          }}
        />
        <Button className='NextBtn' onClick={() => setCountSubmit(true)}>Enter</Button>
      </div>
      {count && countSubmit ? pageType === 'Add' ? <AddProduct count={count} /> : <RemoveProduct count={count}/> : ''}
    </div>
  )
}

export default GetQuantity
