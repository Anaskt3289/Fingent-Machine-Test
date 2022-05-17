import React, { useState, useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { productsContext } from '../../Store/ProductsContext'
import './Styles/RemoveProduct.css'

function RemoveProduct({ count }) {

    let CountArray = []
    for (let i = 1; i <= count; i++) {
        CountArray.push(i)
    }
    const [productDetails, setProductDetails] = useState({})
    const [errMsg, setErrMsg] = useState()
    const { products } = useContext(productsContext)
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setProductDetails({ ...productDetails, [name]: value })
    }

    const removeProducts = () => {
        let errStr = ''
        for (let i = 0; i < count; i++) {
            if (products[productDetails[i + 'code']]) {
                if (parseInt(products[productDetails[i + 'code']].quantity) < parseInt(productDetails[i + 'quantity'])) {
                    products[productDetails[i + 'code']].quantity = 0
                } else {
                    products[productDetails[i + 'code']].quantity = parseInt(products[productDetails[i + 'code']].quantity) - parseInt(productDetails[i + 'quantity'])
                }
            } else {
                errStr += "  " + productDetails[i + 'code']
            }
        }
        if(errMsg){
            setErrMsg(`${errStr} are not valid products`)
        }
    }

    return (
        <div>
            <Row className='addProductLabelOuter'>
                <p className='errMsg'>{errMsg}</p>
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
                <Button className='SaveBtn' onClick={removeProducts}>Remove</Button>
            </div>
        </div>
    )
}

export default RemoveProduct
