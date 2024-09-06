import React from 'react'
import Analytics from './@analytics/page'
import Cart from './@cart/page'

const Dashboard = () => {
  return (
    <div className=' flex items-center justify-evenly'>
      {/* <p>Dashboard tab</p> */}
      <Analytics />
      <Cart />
    </div>
  )
}

export default Dashboard
