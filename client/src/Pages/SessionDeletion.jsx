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

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import { userRequest } from "../Axios/requestMethods";

function MediaCard(props) {
    
    const deleteSession= async (e)=>{
        const res = await userRequest.delete(`/session/deleteSession/${e}`)
        window.location.href='/sessionsDelete'
    }
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
                  <CalendarTodayIcon /> {props.date}
                </Grid>
                <Grid item sx={6} md={6}>
                  <AccessAlarmIcon /> {props.time}
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
        <CardContent sx={{maxWidth:325, height:250, maxHeight:250, padding:'2%', backgroundColor:'white'}}>
          <Typography variant="object-2" color="black" component="div" sx={{ padding:'2% 5%', textAlign:'center'}}>
            {props.description}
          </Typography>
        </CardContent>
        <Button fullWidth size="large" onClick={() => deleteSession(props.identity)} sx={{textAlign:'center', backgroundColor:'#ffc13b', '&:hover': {boxShadow:'2px', backgroundColor:'#FFB923'} }}>
          <Typography variant="h6" color="text.secondary">
            Delete <ArrowRightAltIcon sx={{position:'relative', top:'5px'}}/>
          </Typography>
        </Button>
      </Card>
    );
  }

const SessionDeletion = () =>{
    const [user, setUser] = useState()
    const navigate = useNavigate();
    let path = `/login`; 
    useEffect( () => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }else{
                navigate(path);
        }
        console.log(user);
      }, []);

  const [sessions,setSessions] = useState([{}]);
  
  useEffect(()=>{
    const getSessions = async ()=>{
      const res = await axios.get (`http://localhost:4000/api/session/showSessions`);
      setSessions(res.data);
    }
    getSessions()
    console.log(sessions);
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
                                Sessions
                        </Typography>
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ padding:'1% 5%', textAlign:'center', color:'black'}}
                            >
                                Engage with the finest professionals from industry and academia,
                                 to get an insiders perspective on career, growth opportunities
                                and its future prospects. Learn, and get inspired.
                        </Typography>
            </Grid>

            <Box width={'100%'} sx={{padding:'5% 15%'}}>
              <Grid container spacing={1}>
                
                    {sessions.map((item) =><Grid item xs={12} md={6} lg={4}  >
                    <MediaCard title={item.speaker} 
                                                date={item.dateWords} 
                                                time={item.time} 
                                                titleSub={item.eventDetailsCut} 
                                                identity={item._id}
                                                description={item.eventDescriptionCut} />
                                                
                                                </Grid>
                                                )}
                
              </Grid>
            </Box>
                <BottomBar />
              <Footer />
            </Grid>
    )
}
export default SessionDeletion;