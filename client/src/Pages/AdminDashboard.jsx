import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Board=()=>{

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
      }, []);

      const handleLogout= ()=>{
        const loggedUser = localStorage.getItem("user");
        if (loggedUser) {
            const foundUser = JSON.parse(loggedUser);
            localStorage.removeItem("user");
            navigate(path);
            
          }
      }

      

      const handleSessionCreation= ()=>{
        const loggedUser = localStorage.getItem("user");
        if (loggedUser) {
            navigate(`/sessionCreation`);
          }
      }

      const handleSessionDeletion= ()=>{
        const loggedUser = localStorage.getItem("user");
        if (loggedUser) {
            navigate(`/sessionsDelete`);
          }
      }

      const handleMailList= ()=>{
        const loggedUser = localStorage.getItem("user");
        if (loggedUser) {
            navigate(`/mailList`);
          }
      }

    return(
        <div>
            <Navbar />
            <Box sx={{height:'50rem', display:'block'}}>
                <Button variant="contained" sx={{ display:'block', margin:'4%'}} onClick={handleLogout} >Logout</Button>
                <Button variant="contained" sx={{ display:'block', margin:'4%'}} onClick={handleSessionCreation} >Add Session</Button>
                <Button variant="contained" sx={{ display:'block', margin:'4%'}} onClick={handleSessionDeletion} >Delete Session</Button>
                <Button variant="contained" sx={{ display:'block', margin:'4%'}} onClick={handleMailList} >View Mail List Subscribers</Button>
            </Box>
            <BottomBar />
            <Footer />
        </div>
        
    )

}

export default Board;