import React, { useContext, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { productsContext } from '../../Store/ProductsContext'
import './Styles/AddProduct.css'

function AddProduct({ count }) {
  let CountArray = []
  for (let i = 1; i <= count; i++) {
    CountArray.push(i)
  }

  const [productDetails, setProductDetails] = useState({})
  const { products } = useContext(productsContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductDetails({ ...productDetails, [name]: value })
  }


  const AddProducts = (i) => {
    for (let i = 0; i < count; i++) {
      if (products[productDetails[i + 'code']]) {
        products[productDetails[i + 'code']].quantity = parseInt(products[productDetails[i + 'code']].quantity) + parseInt(productDetails[i + 'quantity'])
      } else {
        products[productDetails[i + 'code']] = { name: productDetails[i + 'name'], quantity: parseInt(productDetails[i + 'quantity']) }
      }
    }
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

      {CountArray.map((i, index) =>
        <Row className='addProductTextOuter'>
          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
              name={`${index}code`}
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
              name={`${index}name`}
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Form.Control
              type="text"
              aria-describedby="passwordHelpBlock"
              className='addProductTextbox'
              name={`${index}quantity`}
              onChange={handleChange}
            />
          </Col>

        </Row>)}

      <div className='SaveBtnOuter'>
        <Button className='SaveBtn' onClick={AddProducts}>Save</Button>
      </div>

    </div>
  )
}

export default AddProduct
