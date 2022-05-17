import React, { useState, useContext } from 'react'
import { Table } from 'react-bootstrap'
import { productsContext } from '../../Store/ProductsContext'
import './Styles/ListProducts.css'

function ListProducts() {

    const productCodes = []
    const { products } = useContext(productsContext)


    for (let i in products) {
        productCodes.push(i)
    }
    return (
        <div className='AddRemoveProduct'>
            <Table hover className='listProductsTable'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productCodes.map((code, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{code}</td>
                                <td>{products[code].name}</td>
                                <td>{products[code].quantity}</td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default ListProducts
