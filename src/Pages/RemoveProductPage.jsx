import React from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import GetQuantity from '../Components/GetQuantity/GetQuantity'

function RemoveProductPage() {
  return (
    <div>
      <HeaderTabs/>
      <GetQuantity pageType='Remove'/>
    </div>
  )
}

export default RemoveProductPage
