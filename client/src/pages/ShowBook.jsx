import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:5000/api/v1/book/${id}`)
        setBook(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-3xl text-gray-800 p-4'>Book Deatails</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 rounded-sm border-slate-300 w-fit m-4 p-2'>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>Id</span>
            <span className=''>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>Title</span>
            <span className=''>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>Author</span>
            <span className=''>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>Publish Year</span>
            <span className=''>{book.publishyear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>Create Time</span>
            <span className=''>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4  text-gray-400'>
              Last Update Time
            </span>
            <span className=''>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook
