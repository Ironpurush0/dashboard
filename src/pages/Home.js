import React from 'react'

import {BsCurrencyDollar} from 'react-icons/bs'

import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'

const Home = () => {
  return (
    <div className='mt-12 border'>
        <div className='border w-full h-auto p-8'>
        <div className="grid grid-cols-4 gap-4">
  <div className='bg-purple-500 h-40 col-span-2'>01</div>
  <div className='bg-purple-500 h-40 col-span-2'>02</div>
  <div className='bg-purple-500 h-40 col-span-4'>03</div>
</div>
        </div>
    </div>
  )
}

export default Home