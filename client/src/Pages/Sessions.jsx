import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState,useEffect } from "react";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from "axios";
import { publicRequest, userRequest } from "../Axios/requestMethods";

import PercentIcon from '@mui/icons-material/Percent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function MediaCard(props) {

    return (
      <Card variant='elevation' elevation={4} sx={{ minWidth:325, maxWidth:325, margin:'5%', padding:'0' }}>
          <CardContent sx={{minWidth:325, minHeight:75, maxHeight:150, padding:'0 5%', backgroundColor:'black'}}>
            <Typography variant="h5" component="div" sx={{color:'#FFB923', padding:'2% 5%'}}>
              {props.title}
            </Typography>
          </CardContent>
          <CardContent sx={{minWidth:325, padding:'2% 5%', backgroundColor:'black'}}>
            <Typography variant="body-1" flexWrap component="div" sx={{color:'white', padding:'0 1%', textAlign:'center'}}>
              <Grid container spacing={0}>
                <Grid item sx={6} md={6} >
                  <CalendarTodayIcon /> {props.time}
                </Grid>
                <Grid item sx={6} md={6}>
                  <PercentIcon /> {props.date}
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        <CardContent sx={{maxWidth:325, height:75, maxHeight:75, padding:'4%', backgroundColor:'white'}}>
          <Typography variant="object-2" color="text.secondary" component="div" sx={{ padding:'2% 5%', textAlign:'center'}}>
            <em>
              {props.titleSub}
            </em>
          </Typography>
        </CardContent>
        <CardContent sx={{maxWidth:325, height:150, maxHeight:250, padding:'2%', backgroundColor:'white'}}>
          <Typography variant="object-2" color="black" component="div" sx={{ padding:'2% 5%', textAlign:'center'}}>
            Borrower <ArrowRightAltIcon sx={{position:'relative', top:'5px'}} />  {props.description}
          </Typography>
          <Typography variant="object-2" color="black" component="div" sx={{ padding:'2% 5%', textAlign:'center'}}>
            Score  <ArrowRightAltIcon sx={{position:'relative', top:'5px'}} /> {props.descriptionScore}
          </Typography>
        </CardContent>
        <Button fullWidth size="large" sx={{textAlign:'center', backgroundColor:'#ffc13b', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'} }}>
          <Typography variant="h6" color="text.secondary">
            Accept <ArrowRightAltIcon sx={{position:'relative', top:'5px'}}/>
          </Typography>
        </Button>
        <Button fullWidth size="large" sx={{textAlign:'center', backgroundColor:'#ffc13b', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'} }}>
          <Typography variant="h6" color="text.secondary">
            Counter Offer <ArrowRightAltIcon sx={{position:'relative', top:'5px'}}/>
          </Typography>
        </Button>
      </Card>
    );
  }

const Loan = () =>{

  const [loans,setLoans] = useState([{}]);
  
  useEffect(()=>{
    const getLoans = async ()=>{
      const res = await publicRequest.get(`/loan/showLoansAll`);
      setLoans(res.data);
    }
    getLoans()
  },[]);

    return(
            <Grid container spacing={1} alignItems="center">
            <Navbar />
            <Grid item xs={12} md={12}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'2% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Loans
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ padding:'1% 5%', textAlign:'center', color:'black'}}
                            >
                                Engage with the finest professionals from industry and academia,
                                Browse through loan requests from people registered to the service.
                        </Typography>
            </Grid>

            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
                
                    {loans.map((item) =><Grid item xs={12} md={6} lg={4}  >
                    <MediaCard title={'₹'+ item.amount} 
                                                date={item.rate} 
                                                time={item.time +" Months"} 
                                                titleSub={item.interestType}
                                                description={item.borrower} 
                                                descriptionScore={item.borrowerScore} />
                                                </Grid>
                                                )}
                
              </Grid>
            </Box>
                <BottomBar />
              <Footer />
            </Grid>
    )
}
export default Loan;