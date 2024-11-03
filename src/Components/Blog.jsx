import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [user, setUser]= useState([])

  useEffect(()=>{
    const fetchdata= async()=> {
      const response= await fetch("https://dummyjson.com/posts")
      const data=await response.json()
      setUser(data.posts)
    }
    fetchdata()
  },[])
  return (
          <div>
          {user.map((post)=>(
            <div key={post.id}>
              <Link to={`/post/${post.id}`} >
              <h2 className='text-center font-bold'>{post.title}</h2>
              </Link>
              <h4>{post.body}</h4>
            </div>
          ))}
          </div>)
}

export default Blog
