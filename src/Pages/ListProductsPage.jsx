import React,{useContext} from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import ListProducts from '../Components/ListProducts/ListProducts'
import {productsContext} from '../Store/ProductsContext'

function ListProductsPage() {
  const {products} = useContext(productsContext)
  console.log(products);
  return (
    <div>
      <HeaderTabs add='' remove='' list='active' />
      <ListProducts/>
    </div>
  )
}

export default ListProductsPage
