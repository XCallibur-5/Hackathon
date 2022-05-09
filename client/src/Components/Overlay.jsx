import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function BasicOverlay(props) {
  const [disp, setDisp] = useState("block");
  function togler (){
    if(disp==="block"){
      setDisp("none");
    }else if(disp==="none"){
      setDisp("block");
    }
  }


  return (
    <div onClick={togler}>
      <Card variant='elevation' elevation={4} sx={{ width:'100%', height:'100%', position: 'fixed', display: disp, zIndex:2, backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <CardContent>
        <Box sx={{backgroundColor:'white', margin:'10% 30%', height:200}}>
          <Typography variant="h4" component="div" color={'#ffc13b'}>
              {props.Title} he hello lets play cello
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.Message}
          </Typography>
        </Box>
        </CardContent>
      </Card>
    </div>
  );
}
