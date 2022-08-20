import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
const Home = () => {
    const [post , setPost] = useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => setPost(data))
  },[])
  
    return (
        <div>
            
            {
                post.map((post) =><Posts post={post}></Posts>)
            }
            
        </div>
    );
};

export default Home;