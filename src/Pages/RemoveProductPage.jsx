import React, {useContext} from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import GetQuantity from '../Components/GetQuantity/GetQuantity'
import {productsContext} from '../Store/ProductsContext'

function RemoveProductPage() {
  const {products} = useContext(productsContext)
    console.log(products);
  return (
    <div>
      <HeaderTabs add='' remove='active' list='' />
      <GetQuantity pageType='Remove'/>
    </div> 
  )
}

export default RemoveProductPage
