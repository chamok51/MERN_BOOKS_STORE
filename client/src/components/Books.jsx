import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md'

const Books = ({ books }) => {
  return (
    <div>
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-400 rounded-md'>No</th>
            <th className='border border-slate-400 rounded-md'>Title</th>
            <th className='border border-slate-400 rounded-md'>Author</th>
            <th className='border border-slate-400 rounded-md'>Publish Year</th>
            <th className='border border-slate-400 rounded-md'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='h-4'>
              <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {book.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {book.author}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {book.publishyear}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`book/showbook/${book._id}`}>
                    <BiInfoCircle className='text-3xl text-green-400' />
                  </Link>
                  <Link to={`book/update/${book._id}`}>
                    <AiOutlineEdit className='text-3xl text-sky-400' />
                  </Link>
                  <Link to={`book/delete/${book._id}`}>
                    <MdOutlineDelete className='text-3xl text-red-800' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
