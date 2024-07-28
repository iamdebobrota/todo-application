import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Navbar from '../components/Navbar'
import Todo from '../pages/todo/Todo'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/todo' element={<Todo />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  )
}

export default AllRoutes