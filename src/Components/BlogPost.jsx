import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const BlogPost = () => {
  const {id} = useParams();
  const [post, setPost] = useState({});
  console.log("Post aa gya", post)


  useEffect(()=>{
       const fetchBlogPost = async () =>{
          const response = await fetch(`https://dummyjson.com/posts/${id}`);
          const data = await response.json();
          setPost(data);
      }
      fetchBlogPost();

  }, [id])
  
  return (
    <div>
      <h1 className='text-center font-semibold text-2xl bg-yellow-600 text-red-800 p-8'>{post.id} </h1>
      <h1 className='text-center bg-white text-black'>{post.title}</h1>
      <p className='justify-stretch'>{post.body}</p>
    </div>
  )
}

export default BlogPost
