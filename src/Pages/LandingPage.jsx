import React from 'react'
import HeaderTabs from '../Components/HeaderTabs/HeaderTabs'
import GetQuantity from '../Components/GetQuantity/GetQuantity'

function LandingPage() {
  return (
    <div>
      <HeaderTabs add='active' remove='' list='' />
      <GetQuantity pageType='Add' />
    </div>
  )
}

export default LandingPage
