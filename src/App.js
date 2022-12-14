import React, {useEffect} from 'react'

import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {FiSettings} from 'react-icons/fi'

import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import Users from './pages/Users'
import Orders from './pages/Orders'
import Products from './pages/Products'
import BarChart from './pages/charts/BarChart'
import LineChartPage from './pages/charts/LineChartPage'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

import {useStateContext} from './context/ContextProvider'
import Home from './pages/Home'


const App = () => {
  // const activeMenu = true

  const {activeMenu, userData, productData, ordersData} = useStateContext()

  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position='top'>
              <button type='button' style={{background: 'blue', borderRadius: '50%'}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'>
                <FiSettings />
              </button>
            </TooltipComponent> 
          </div>
          {
            activeMenu ? 
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <SideBar />
            </div> :
            <div className='w-0'>
              <SideBar />
            </div> 
          }
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}` }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <NavBar />
            </div>
          

          <div>
            <Routes>
              {/* Dashboard */}
              <Route exact path="/" element={<Home />} />

              {/* Pages */}
              <Route exact path="/users" element={<Users userData={userData} />} />
              <Route exact path="/orders" element={<Orders ordersData={ordersData} />} />
              <Route exact path="/products" element={<Products productData={productData} />} />

              {/* charts */}
              <Route exact path="/linechart" element={<LineChartPage />} />
              <Route exact path="/barchart" element={<BarChart />} />
            </Routes>
          </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App