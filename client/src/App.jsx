import { Route, Routes } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'
import Spinner from './components/Spinner'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spinner' element={<Spinner />} />
        <Route path='book/create' element={<CreateBook />} />
        <Route path='book/update/:id' element={<UpdateBook />} />
        <Route path='book/delete/:id' element={<DeleteBook />} />
        <Route path='book/showbook/:id' element={<ShowBook />} />
      </Routes>
    </>
  )
}

export default App
