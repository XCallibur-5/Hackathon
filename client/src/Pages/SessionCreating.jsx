import '../App.css';

import Navbar from '../Components/Navbar';

import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';

import React, { useState,useEffect } from "react";
import axios from "axios";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

const LoanCreation =()=> {

    const [rate,setRate] = useState("");
    const [time,setTime] = useState("");
    const [amount,setAmount] = useState("");
    const [interestType,setInterestType] = useState("");
    const [borrower,setBorrower] = useState("");
    const [borrowerScore,setBorrowerScore] = useState("");
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


    const handleChange = (interest) => {
      setInterestType(interest.target.value);
    };

    const handleClick=async (e)=>{
        e.preventDefault();
       const prod= await {
            rate: rate,
            time: time,
            interestType: interestType,
            amount: amount,
            borrower: borrower,
            borrowerScore: borrowerScore
        }

        const res = await axios.post("http://localhost:4000/api/loan/createLoan", prod);
        if(res.status===200){
            window.location.href='/'
        }}

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
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'26px', color:'black', textAlign:'center' }}
                    >
                        <h4>Create a new Loan</h4>
                    </Typography>
                    <Typography
                        component="span"
                        sx={{ mr: 2, display: { xs: 'block', md: 'block' }, fontSize:'13px', color:'black', textAlign:'center' }}
                    >
                        <p>.</p>
                    </Typography>
        
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Rate in %" placeholder=" rate of interest" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setRate(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Time in Months" placeholder="Time in Months" variant="outlined" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setTime(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Select Interest Type</InputLabel>
                            <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={interestType}
                            label="Select Event Type"
                            onChange={handleChange}
                            sx={{backgroundColor:"white"}}
                            >
                            <MenuItem value={'Simple'}>Simple Interest per Year</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" label="Amount" placeholder="enter Amount in digits without any comma(,)" fullWidth sx={{backgroundColor:"white"}} autoComplete="off" onChange={(e)=>setAmount(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" type='submit' sx={{backgroundColor:"black", width:'70%', height:'100%' }} onClick={handleClick} >Login</Button>
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
}
export default LoanCreation;