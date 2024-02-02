import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

const itemsPerPage = 5;
const ListProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
  }

  useEffect(() => {
    fetchInfo();
  }, [])




    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const removeProduct = async (id) =>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
          Accept:'Application/json',
          'Content-Type':'Application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
    
  }
  console.log(currentPage);
  return (
    <div className='p-10 w-full'>
        <h1 className='text-2xl font-bold'>All Product list</h1>
        <table className='w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope="col" className="px-6 py-3">Products</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">category</th>
                    <th scope="col" className="px-6 py-3">Old Price</th>
                    <th scope="col" className="px-6 py-3">New price</th>
                    <th scope="col" className="px-6 py-3">Remove</th>
                </tr>
            </thead>
            <tbody>
            {currentItems.map((product,index)=>{
            return <><tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <img src={product.image} className='w-28 h-24 p-2 justify-center items-center px-6 py-4' alt="" />
              <td className='px-6 py-4'>{product.name}</td>
              <td className='px-6 py-4'>{product.category}</td>
              <td className='px-6 py-4'>₹ {product.old_price}</td>
              <td className='px-6 py-4'>₹ {product.new_price}</td>
              <td className='px-6 py-4 text-green-600 font-bold'>
              <IoCloseOutline onClick={()=>{removeProduct(product.id)}}  className='justify-center items-center flex w-16 h-6 text-red-600 cursor-pointer font-bold '/></td>
            </tr>
            <hr />
            </> 
          })}
            </tbody>
        </table>

        <div className='flex justify-end mt-3'>
        {Array.from({ length: Math.ceil(allProducts.length / itemsPerPage) }, (_, index) => (
          <button className={currentPage === index + 1 ? 'bg-orange-600 px-4 border border-gray-200 text-white' : 'px-4 border border-gray-200'} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ListProduct