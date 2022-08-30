import React, {useState, useEffect} from 'react'

import {GridCompnent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, GridComponent} from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'



const Orders = ({ordersData, userData}) => {

  useEffect(() => {
    console.log(ordersData)
  }, [])

  // let ids = []
  // const {data, loading} = useData('https://assessment.api.vweb.app/orders')

  // console.log(data)

  // // Converting the timestamp in readable format
  // const date = new Date()
  // const newDate = date.toISOString()

  // // Extracting all the product ids
  // const list = data.map(item => item.product_id)
  // ids.push(list)


  // // Sorting the ids to use them in some manner
  // let newIds = list.sort()

  // const elementCnt = {}

  // newIds.forEach(val => elementCnt[val] = (elementCnt[val] || 0) + 1)

  // console.log(list)
  // console.log(newIds)
  // console.log(elementCnt)


  // const columns = [{  
  //   Header: 'Order_Id',  
  //   accessor: 'orderId'  
  //  },{  
  //  Header: 'Product_Id',  
  //  accessor: 'productId'  
  //  },
  //  {  
  //   Header: 'User_Id',  
  //   accessor: 'userId'  
  //   },
  //   {  
  //     Header: 'Quantity',  
  //     accessor: 'quantity'  
  //     },
  //     {  
  //       Header: 'Date',  
  //       accessor: 'date'  
  //       }]  

  // const tableData = [{
  //   id: data.order_id,
  //   prodId: data.product_id,
  //   userId: data.user_id,
  //   quantity: data.quantity,
  //   date: newDate
  // }]

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header />
      {/* <GridComponent>
        <ColumnDirective> 
        {data.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnDirective>
      </GridComponent> */}
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User_Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order_Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Order_Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product_Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                      Quantity
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {/* <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
                        </div> */}
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.user_id}</div>
                          {/* <div className="text-sm text-gray-500">{item.order_id}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.product_id}</div>
                      {/* <div className="text-sm text-gray-500">{item.quantity}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.order_Date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>        
  )
}

export default Orders