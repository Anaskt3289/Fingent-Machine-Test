import React, {useContext} from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import GetQuantity from '../Components/GetQuantity/GetQuantity'

function RemoveProductPage() {
  return (
    <div>
      <HeaderTabs add='' remove='active' list='' />
      <GetQuantity pageType='Remove'/>
    </div> 
  )
}

export default RemoveProductPage
