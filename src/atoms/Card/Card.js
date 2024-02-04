import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions, duration } from '@mui/material';
import "./Card.css"
import TimelapseIcon from '@mui/icons-material/Timelapse';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MultiActionAreaCard({ title, description, imgSrc = '', imgAlt = '', duration }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleExploreClick = () => {
    // Open the link in a new window when the Explore button is clicked
    window.open(`https://marcel.ai/classes/course/course:2018738`, '_blank');
  };
  return (
    <>

    <Card className='card-tile' sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleExploreClick}>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc ? require(`../../assets/images/${imgSrc}`) : ''}
          alt={imgAlt}
        />
        <div className='learning-type'> Role Based </div>
        <CardContent>
          <Typography className='course-title' gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className='course-description' variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className='explore-btn' size="small" color="primary" onClick={handleExploreClick}>
          Explore
        </Button>

        <div className='duration'>
        <TimelapseIcon /> <span className='duration-time'>{duration}</span></div>
      </CardActions>
    </Card>
    </>
  );
}
