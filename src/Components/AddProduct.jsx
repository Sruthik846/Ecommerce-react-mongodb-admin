import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:'',
        image:"",
        category:'women',
        new_price:'',
        old_price:''
    })
    const imageHandler = (e) =>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }


    const Add_Product = async () =>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);


        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept : 'application/json'
            },
            body:formData,
        }).then((res)=>res.json()).then((data)=>{responseData=data});

        if (responseData.success){
            product.image= responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'Application/json',
                    'Content-Type':'Application/json',
                },
                body:JSON.stringify(product)
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })

        }

    }
  return (
    <div className='p-10 w-full'>
        <h1 className='text-2xl font-bold'>Add Products</h1>
        <div className='bg-white p-10 h-[500px] mt-5 w-full flex flex-col gap-5 text-gray-400 text-[15px] '>
            <div className='flex flex-col gap-2'>
                <p>Product Title</p>
                <input type="text" name='name' value={productDetails.name} onChange={changeHandler} placeholder='Type here' className='border border-gray-200 w-full py-2 rounded-sm px-4' />
            </div>

            <div className='flex gap-5'>
                <div className='flex-1 gap-2 flex flex-col'>
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' className='border border-gray-200 w-full py-2 rounded-sm px-4' />
                </div>
                <div className='flex-1 gap-2 flex flex-col'>
                    <p>Offer Price</p>
                    <input type="text" value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='Type here' className='border border-gray-200 w-full py-2 rounded-sm px-4' />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Product Category</p>
                <select name="category" value={productDetails.category} onChange={changeHandler} id="" className='border border-gray-200 py-2 rounded-sm px-4'>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kid">Kid</option>
                </select>
            </div>

            <div className="flex items-center cursor-pointer justify-center relative w-24 h-24 mt-3 mb-3">
                <label htmlFor="file">
                    <img src={image?URL.createObjectURL(image):upload_area} className='w-48 ' alt="" />
                </label>
                <input id="file"
                    onChange={imageHandler} 
                    className="absolute w-full h-full"
                    type="file" hidden
                />
            </div>
            <button onClick={()=>{Add_Product()}} className='bg-orange-700 text-white py-2'>ADD</button>
        </div>
    </div>
  )
}

export default AddProduct