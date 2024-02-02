import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

const Sidebar = () => {
    const [selectedNav, setSelectedNav] = useState('addproduct');
  return (
    <div className='flex flex-col p-8 bg-white w-[250px] h-screen gap-5'>
        <Link to={'/addproduct'}>
            <div className='flex justify-center items-center bg-gray-100 p-4 gap-4 rounded-sm'>
                <img src={add_product_icon} alt="" />
                <p>Add product</p>
            </div>
        </Link>

        <Link to={'/listproduct'}>
            <div className='flex justify-center items-center bg-gray-100 p-4 gap-4 rounded-sm'>
                <img src={list_product_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>

        <Link to={'/orederlists'}>
            <div className='flex justify-center items-center bg-gray-100 p-4 gap-4 rounded-sm'>
                <img src={list_product_icon} alt="" />
                <p>Paid Order List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar