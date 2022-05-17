import React from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import ListProducts from '../Components/ListProducts/ListProducts'

function ListProductsPage() {
  return (
    <div>
      <HeaderTabs add='' remove='' list='active' />
      <ListProducts/>
    </div>
  )
}

export default ListProductsPage
