import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import Books from '../components/Books'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const res = await axios.get('https://mern-books-store-api.vercel.app/api/v1/books')

        setBooks(res.data)
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
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl p-4'>Book List</h1>
        <Link to='/book/create'>
          <MdOutlineAddBox className='text-sky-300 text-4xl' />
        </Link>
      </div>
      {loading ? <Spinner /> : <Books books={books} />}
    </div>
  )
}

export default Home
