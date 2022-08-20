import React from 'react';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




const Posts = (props) => {
    const {title,body,id} = props.post
    return (
        <div style={{margin:'30px 0', textAlign:'left'}}>
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
         </CardContent>
         <CardActions>
          <Link to={`/post/${id}`}>
            <Button  size="small">Learn More</Button>
          </Link>
         </CardActions>
       </Card>
       
     </Container>
     
        </div>
    );
};

export default Posts;