import React, {useState, useEffect} from 'react'

import {GridCompnent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, GridComponent} from '@syncfusion/ej2-react-grids'
import Header from '../components/Header'



const Orders = ({data}) => {

  useEffect(() => {
    console.log(data)
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
    </div>        
  )
}

export default Orders