import React, { useEffect } from 'react'

import useData from '../hook/useData'

const Orders = ({data}) => {
  
  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    <div>Orders</div>
  )
}

export default Orders