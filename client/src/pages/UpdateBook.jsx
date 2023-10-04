import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const UpdateBook = () => {
  const [lodaing, setLodaing] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishyear, setPublishyear] = useState('')

  useEffect(() => {
    const fetchBooks = async () => {
      setLodaing(true)
      try {
        setLodaing(true)
        const res = await axios.get(`http://localhost:5000/api/v1/book/${id}`)
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishyear(res.data.publishyear)
        setLodaing(false)
      } catch (error) {
        console.log(error)
        setLodaing(false)
      }
    }
    fetchBooks()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLodaing(true)
      const res = await axios.put(`http://localhost:5000/api/v1/update/${id}`, {
        title,
        author,
        publishyear,
      })
      setLodaing(false)
      navigate('/')
    } catch (error) {
      console.log(error)
      setLodaing(false)
    }
  }

  return (
    <>
      {lodaing ? (
        <Spinner />
      ) : (
        <div className='flex justify-center items-center h-[100vh]'>
          <div className=''>
            <span className='m-4 text-3xl'>Update Book</span>

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
                type='text'
                id='authorId'
                className='border rounded-sm p-2 my-2'
                onChange={(e) => setAuthor(e.target.value)}
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
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default UpdateBook
