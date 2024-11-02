import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'


export default function Books() {
    const [books,setBooks]=useState([])
    useEffect(()=>{
fetch('/data/booksData.json')
.then(res=>res.json())
.then(data=>setBooks(data))
// .then(data=>console.log(data))
    },[])
  return (
    <div>
        <h1 className='font-bold
        text-4xl text-center'>Books</h1>
        {books.length}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-6
       '>
       {
            books.map(book=><Book key={book.bookId}
                book={book}
            >
               

            </Book>)
        }
       </div>
      
    </div>
  )
}
