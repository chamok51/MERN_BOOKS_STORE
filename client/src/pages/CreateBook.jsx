import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishyear, setPublishyear] = useState('')
  const [loading, setLodaing] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLodaing(true)
      const res = await axios.post('http://localhost:5000/api/v1/create', {
        title,
        author,
        publishyear,
      })
      setLodaing(false)
      console.log(res.data.message)
      navigate('/')
    } catch (error) {
      console.log(error)
      setLodaing(false)
    }
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center items-center h-[100vh]'>
          <div className=''>
            <span className='m-4 text-3xl'>Create Book</span>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col m-4 border-2 p-4 gap-y-2 w-[500px] h-auto'
            >
              <label className='text-gray-500' htmlFor='titleId'>
                Title
              </label>
              <input
                type='text'
                id='titleId'
                className='border rounded-sm p-2 my-2'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className='text-gray-500' htmlFor='authorId'>
                Author
              </label>
              <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type='text'
                id='authorId'
                className='border rounded-sm p-2 my-2'
              />
              <label className='text-gray-500' htmlFor='publishId'>
                Publish Year
              </label>
              <input
                value={publishyear}
                type='text'
                id='publishId'
                className='border rounded-sm p-2 my-2'
                onChange={(e) => setPublishyear(e.target.value)}
              />
              <button className='p-2 rounded self-end w-max bg-teal-800 text-white cursor-pointer'>
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateBook
