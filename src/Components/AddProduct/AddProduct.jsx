import React, { useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Styles/AddProduct.css'

function AddProduct({ count }) {
  let CountArray = []
  for (let i = 1; i <= count; i++) {
    CountArray.push(i)
  }


  return (
    <div>
      <Row className='addProductLabelOuter'>
        <Col>
          <Form.Label htmlFor="inputPassword5" className='QuantityLabel'>Product Code</Form.Label>
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5" className='QuantityLabel'>Product Name</Form.Label>
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5" className='QuantityLabel'>Quantity</Form.Label>
        </Col>
      </Row>

      {CountArray.map((i) =>
        <Row className='addProductTextOuter'>
          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
            />
          </Col>

          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
            />
          </Col>

          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
            />
          </Col>

        </Row>)}

    </div>
  )
}

export default AddProduct
