import '../App.css';

import Navbar from '../Components/Navbar';

import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { publicRequest } from "../Axios/requestMethods";
import { useNavigate } from "react-router-dom";


const Register = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleRegister=async (e)=>{
        e.preventDefault();
        const user = { username, email, password };
  // send the username and password to the server
        try{
            const res = await publicRequest.post(`/auth/registration`, user);
                if(res.data!=="User created Successfully."){
                    setError("check email and/or password")
                }else{
                    window.location.href='/login'
                }
        }catch(err){
            console.log(err);
        } 
    }

    
  
  return (
      <div>
      <Navbar />
    <AppBar position="static" sx={{backgroundColor: '#ffc13b', padding:'2% 7%', margin:'7% 0'}}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: { xs: 'block', md: 'block' } }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                    <Typography

                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <h3>Register</h3>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>Register to become a member.</p>
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="User Name" placeholder="Your User Name" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setUsername(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Email Id" placeholder="Enter Your Email" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Password" placeholder="Password" type="password" variant="outlined" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    
                    
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleRegister}>Register</Button>
                    </Grid>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'19px', color:'red', textAlign:'center' }}
                    >
                        <p>{error}</p>
                    </Typography>
                    
                </Grid>
            </form>
          </Toolbar>
      </Container>
    </AppBar>
    <BottomBar />
    <Footer />
    </div>
  );
};
export default Register;