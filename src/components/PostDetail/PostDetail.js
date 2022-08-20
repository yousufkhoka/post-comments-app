
import {useParams} from 'react-router-dom';
import {useState,React, useEffect} from 'react';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Comments from '../Comments/Comments';




const PostDetail = () => {
    const {postId}= useParams()
    const [post ,setPost] = useState([])
    const [comments ,setComment] = useState([])
    useEffect(()=>{
      // post api
        const urlPost =`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(urlPost)
        .then(res => res.json())
        .then(data => setPost(data))
        // comments api
        const urlComment =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(urlComment)
        .then(res => res.json())
        .then(data => setComment(data))
       

    },[])
  
    const {title,body} = post
  
    return (
        <div style={{padding:'30px 0', textAlign:'left' , background:'#777'}} >

      
           <Container maxWidth="sm">
            <Card sx={{ maxWidth: 800 }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {
            title
          }
         </Typography>
          <Typography variant="body2" color="text.secondary">
          {
            body
          }
        </Typography>
        
         <Typography  variant="p" component="div" label={'margin="dense"'} id="margin-dense" margin="dense">
          Comments
          
         </Typography>
         </CardContent>
         <div style={{paddingTop:'19px', borderTop:'2px solid #ddd', height:'400px' , overflow:'auto'}}>
         
         {
          comments.map((comment)=><Comments comments={comment}></Comments> )
         }
         </div>
        
         
         
       </Card>
      
       
     </Container>
    </div>
    );
};

export default PostDetail;