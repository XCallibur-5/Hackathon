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
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../Axios/requestMethods";
import axios from "axios";



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate();
    // var a = 'block';

    // function togler (){
    //     a='none'
    //     console.log(
    //         'hi hi hi'
    //     );
    // }

    useEffect( () => {
        let path = `/adminPanel`; 
    const loggedInUser = localStorage.getItem("user");
        //console.log(loggedInUser);
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
          navigate(path);
          console.log(foundUser);
          //const currentUser = user && JSON.parse(user).currentUser;
//console.log(currentUser);
const TOKEN = foundUser?.accessToken;
console.log(TOKEN);
        }
      }, [user]);

    const handleLogin=async (e)=>{
        e.preventDefault();
        const user = { email, password };
  // send the username and password to the server
        const res = await publicRequest.post(`/auth/login`, user);
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
        
        
    }

    const handleRegister=async (e)=>{
        e.preventDefault();
        navigate(`/register`);
    }

  return (
      <div>
      <Navbar />
      {/* <BasicOverlay disp={a} onClick={togler}  /> */}
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
                        <h4>Login</h4>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>come join in the community.</p>
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" placeholder="Your Email" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" placeholder="Password" type="password" variant="outlined" fullWidth sx={{backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleLogin}>Login</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleRegister}>Register Instead</Button>
                    </Grid>
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
export default Login;