import React from 'react'

import {BsPeopleFill} from 'react-icons/bs'


import {LineChart, Line} from 'recharts'


const Home = () => {
  const data = [{name: 'Page A', uv: 200, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2800, amt: 3200}, {name: 'Page C', uv: 400, pv: 3200, amt: 3600}, {name: 'Page C', uv: 600, pv: 3200, amt: 3600}]

  return (
    <div className='mt-12'>
        <div className='w-auto h-auto p-5'>
        <div className="grid grid-cols-2 gap-4">
  <div className='overflow-hidden hover:shadow-md hover:shadow-slate-800 bg-slate-900 opacity-95 rounded-2xl h-auto col-span-1 p-5'>
    <div className='w-80 h-96 flex flex-col justify-between p-5'>
      <h2 className='text-5xl font-semibold  tracking-tight text-neutral-100'>Total Users</h2>
      <span className='flex items-center mt-4'>
        <BsPeopleFill className='w-12 h-12 opacity-60 mr-2 text-neutral-100'/>
        <h2 className='text-5xl font-bold text-neutral-100 tracking-tight'>20</h2>
      </span>
      <span>
      <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
  </LineChart>
      </span>
    </div>
  </div>
  <div className='hover:shadow-md hover:shadow-slate-800 bg-gray-200 opacity-95 rounded-2xl h-auto col-span-1 p-5'>
    <div className='w-full h-96 flex flex-col justify-between p-5 border'>
      <h2 className='text-5xl font-semibold  tracking-tight text-slate-900'>We</h2>
      <span className='flex items-center border w-full'>
        <p className='text-5xl font-semibold text-slate-900 tracking-wide text-ellipsis leading-snug'>peovide the best experience to our <span className='font-bold text-red-800'>customers</span></p>
      </span>
      {/* <span>
      <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
  </LineChart>
      </span> */}
    </div>
  </div>
  <div className='hover:shadow-md rounded-xl hover:shadow-slate-800 bg-gradient-to-r from-slate-100 to-slate-300 p-5 h-auto col-span-2'>
  <div className='w-full h-96 rounded-2xl '>
      02
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Home