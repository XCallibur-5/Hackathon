import '../App.css';
import Navbar from '../Components/Navbar';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const About = () =>{
    return(
        <div>
            <Navbar />
            <Box sx={{ flexGrow: 1, margin:'0 15%' }}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                <div>
                    <Typography
                        variant="b"
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                        >
                            Vision Statement
                    </Typography>
                    <p></p>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'left' }}
                        >
                            Work with Individual Borrowers in mainstreaming lending within the community.
                    </Typography>
                
                </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            variant="b"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                About Us
                        </Typography>
                        <p></p>
                        <Typography
                            variant="p"
                            component="div"
                            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, padding:'3% 5%', textAlign:'left' }}
                            >
                                We are a social initiative focused on mainstreaming social connection and lending.<br /><br />
                                At Loner , we are attempting to build a comprehensive lending and borrowing services for Individuals, which would help them
                                 explore opportunities and make informed decisions using the best resource available locally.<br /><br />
                                
                        </Typography>
                    
                    </div>
                </Grid>
                    <br /><br /><br />
                <Grid item xs={12} md={12}>
 
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ mr: 2,  padding:'3% 5%', textAlign:'center', color:'#FFB923' }}
                            >
                                Our Key Virtues
                        </Typography>
                </Grid>
            </Grid>
                
            </Box>
            <Box sx={{ flexGrow: 1, margin:'5% 15%',alignItems:'center'}}>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex', alignSelf:'center'}}>
                        <Card Photo='..\assets\about-page\career icon.svg' Title='Customer First' Message='Customer welfare and interest precedes everything else'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='..\assets\about-page\Good humanicon.svg' Title='Collaboration' Message='Building partnerships and alliances is the fastest way to contribute and scale'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='.\assets\about-page\Personal touch icon.svg' Title='Integrity' Message="It is about what's right over what???s convenient"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} sx={{display:'flex'}}>
                        <Card Photo='.\assets\about-page\Experience icon.svg' Title='Transparency' Message='It is key to building trust.'/>
                    </Grid>
                </Grid>
            </Box>
            <BottomBar />
            <Footer />
        </div>  
    )
}
export default About;