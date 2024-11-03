import React from 'react'
import Blog from './Components/Blog'
import BlogPost from './Components/BlogPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog/>} ></Route>
          <Route path="/post/:id" element={<BlogPost/>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
