import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Card.css"

export default function MultiActionAreaCard({ title, description, imgSrc = '', imgAlt = '' }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc ? require(`../../assets/images/${imgSrc}`) : ''}
          alt={imgAlt}
        />
        <div className='learning-type'> Role Based </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}
