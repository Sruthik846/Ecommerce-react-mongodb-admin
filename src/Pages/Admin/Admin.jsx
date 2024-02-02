import React from 'react'
import Sidebar from '../../Components/Sidebar';
import { Routes,Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct';
import ListProduct from '../../Components/ListProduct';
import PaidOrders from '../../Components/PaidOrders';

const Admin = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/listproduct' element={<ListProduct/>}></Route>
          <Route path='/orederlists' element={<PaidOrders/>}></Route>
        </Routes>
    </div>
  )
}

export default Admin