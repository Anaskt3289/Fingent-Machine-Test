import React from 'react'
import { Table } from 'react-bootstrap'
import './Styles/ListProducts.css'

function ListProducts() {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}

export default ListProducts
