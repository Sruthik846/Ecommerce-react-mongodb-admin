import React from 'react'
import navlogo from '../assets/nav-logo.svg';
import navProfile from '../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white shadow-lg'>
        <img src={navlogo} className='px-20 w-[330px] p-4' alt="" />
        <img src={navProfile} className='px-10 w-36 p-4' alt="" />
    </div>
  )
}

export default Navbar