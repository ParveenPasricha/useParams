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
      <h1>{post.id},<br></br>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default BlogPost
