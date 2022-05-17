import React from 'react'
import {Form} from 'react-bootstrap'
import './Styles/GetQuantity.css'

function GetQuantity() {
  return (
    <div className='QuantityOuterBox'>
      <Form.Label htmlFor="inputPassword5" className='QuantityLabel'>Enter the Quantity</Form.Label>
      <Form.Control
        type="number"
        aria-describedby="passwordHelpBlock"
        className='QuantityTextbox'
      />

    </div>
  )
}

export default GetQuantity
