import React, {createContext, useContext, useState, useEffect} from 'react'
import axios from 'axios'

const StateContext = createContext()


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [userData, setUserData] = useState([])
    const [productData, setProductData] = useState([])
    const [ordersData, setOrdersData] = useState([])

    const fetchUserData = async url => {
        try {
            const res = await axios.get(url)
            setUserData(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const fetchProductData = async url => {
        try {
            const res = await axios.get(url)
            setProductData(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const fetchOrderData = async url => {
        try {
            const res = await axios.get(url)
            setOrdersData(res.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchOrderData('https://assessment.api.vweb.app/orders')
    fetchProductData('https://assessment.api.vweb.app/products')
    fetchUserData('https://assessment.api.vweb.app/users')

    }, [])


    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, userData, ordersData, productData}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)