import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetail() {
    const {bookId}=useParams()
    const id=parseInt(bookId)
    
const data=useLoaderData()
const bookfind=data.find(book=>book.bookId===id)
// console.log(data,bookfind,bookId);
const {bookId:currentbookID,bookName,image,author,rating,
  review,tags,category}
=bookfind
const handleMarkAsRead=()=>{

}

  return (

    <div className='md:flex py-8 my-14'>
      {/* Left DIv */}
      <div className='w-1/2'>
        <img src={image} alt="" />
      </div>
{/* Right Div */}
      <div className='w-1/2 flex flex-col justify-center gap-6'>
        <h1 className='text-3xl font-bold'>{bookName}</h1>
        <h1>By:{author}</h1>
    <div>
    <div className="divider"></div>
        <h2>{category}</h2>
        <div className="divider"></div>
    </div>
        <h2>
          <span className='text-xl font-bold'>Review: </span> 
          {review}</h2>
          <div className='space-x-3'>
            <button onClick={handleMarkAsRead}
            className="btn px-8 btn-outline btn-info">
              
              Read</button>
            <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
          </div>


      </div>
    </div>
  )
}
