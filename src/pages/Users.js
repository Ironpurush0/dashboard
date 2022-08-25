import React, { useEffect } from 'react'

import useData from '../hook/useData'

const Orders = () => {

  const url = 'https://assessment.api.vweb.app/users'

  const {data, loading} = useData(url)
  
  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    <div>Orders</div>
  )
}

export default Orders