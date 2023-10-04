import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/delete/${id}`)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-4'>
      <h1 className='my-4 text-3xl'>Delete Book</h1>
      <div className='flex flex-col items-center  rounded-xl border-2 border-sky-500 w-[500px] p-8 mx-auto'>
        <h1 className='text-2xl my-2 '>
          Are you sure you want to delete this book?
        </h1>
        <button
          onClick={handleDelete}
          className='bg-red-700 cursor-pointer p-2 text-white w-full'
        >
          Yes, delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
