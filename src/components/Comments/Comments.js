import React, { useEffect, useState } from 'react';
import CommentImg from '../CommentImg/CommentImg';
import './comments.css'

const Comments = (props) => {
    const {name , email,body} = props.comments
 const {image , setImage} = useState()
 useEffect(()=>{
    const url =`https://randomuser.me/api/?results=45`
    fetch(url)
    .then(res => res.json())
    .then(data => setImage(data))
 },[])
 
    return (
        <div className='Comments'>
            <CommentImg image={image}></CommentImg>
            <div className="commentsDetail">
                <h4>{name}</h4>
                <h6>{email}</h6>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;