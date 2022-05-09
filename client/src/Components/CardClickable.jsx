import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card variant='elevation' elevation={4} sx={{ width:200, padding:'2%', display:'flex' }}>
      <CardMedia
        component="img"
        height="140"
        image={props.Photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            {props.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
            {props.Message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.Link1}</Button>
        <Button size="small">{props.Link2}</Button>
      </CardActions>
    </Card>
  );
}