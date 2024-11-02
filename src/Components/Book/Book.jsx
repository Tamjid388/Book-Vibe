import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({book}) {
    const {bookId,bookName,image,author,rating,tags,category}=book
  return (
   <Link to={`/books/${bookId}`}>
    <div className=''>
       <div className="card bg-base-100 shadow-xl p-6">
  <figure className='bg-slate-400 py-8 rounded-2xl'>
    <img
      src={image}
      className='h-[166px]'
      alt="img" />
  </figure>
  <div className="card-body  ">
   <div className='flex justify-center gap-4'>
    {
        tags.map((tag,idx)=><button key={idx}
           className="btn btn-xs text-green-500 bg-green-100">{tag}</button>)
    }
   </div>

  

    <h2 className="card-title ">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className=''>By : {author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
      </div>
     
    </div>
  </div>
</div>
    </div>
   </Link>
  )
}
