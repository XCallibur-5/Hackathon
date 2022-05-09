import '../App.css';
import Navbar from '../Components/Navbar';
import MailList from '../Components/MailList';
import BottomBar from '../Components/BottomBar';
import Footer from '../Components/Footer';
import CardCircle from '../Components/CardCircle';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomCard from '../Components/Card';
import Box from '@mui/material/Box';


const Home = () =>{
    return(
        <div>
            <Navbar />
                <img src='..\assets\asset top.jpg' width={'100%'} alt='topImage' ></img>
                <Box display={{md:'block', xs:'none'}} sx={{ flexGrow: 1, padding:'0 15%', position:'relative', bottom:'100px'}}>
                <Grid container spacing={0} sx={{ flexGrow: 1, display:'flex', backgroundColor:'#ffc13b', boxShadow:'5px 5px'}} >
                    
                    <Grid item xs={12} md={12}>
                        <Box sx={{backgroundColor:'#ffc13b'}}>
                            <Typography
                                variant='h6'
                                component="span"
                                sx={{ display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                                >
                                    Financial Services
                            </Typography>
                            <Typography
                                variant='object2'
                                component="span"
                                sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'left', padding:'2% 10% 5% 10%'  }}
                            >
                                    WHy should the banks make the decision for you, with, us get ahead of your finances and connect
                                    with fellow Lenders and get loans at your own mutually accepted terms. Come join the revolution, and 
                                    get ahead. <br/><br/>

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                                    xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>
                </Box>


                <Box display={{md:'none', xs:'block'}} sx={{ flexGrow: 1, padding:'0 15%'}}>
                <Grid container spacing={0} sx={{ flexGrow: 1, display:'flex', backgroundColor:'#ffc13b'}} >
                    
                    <Grid item xs={12} md={12}>
                        <Box sx={{backgroundColor:'#ffc13b'}}>
                            <Typography
                                variant='h6'
                                component="span"
                                sx={{ display: { xs: 'block', md: 'block' }, color:'black', textAlign:'center' }}
                                >
                                    Career Guidance
                            </Typography>
                            <br />
                            <Typography
                                variant='object2'
                                component="span"
                                sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'left', padding:'2% 10% 5% 10%'  }}
                            >
                                    The decisions young people take on their life at school affect not just their academic performance,
                                    higher education, or employment, but also their social lives, finances, and health outcomes.<br/><br/>

                                    Schools are perfectly suited to prepare students for their future career pursuits. This includes 
                                    developing curricula to improve the skills of students, supporting the interests and aspirations of students.
                            </Typography>
                        </Box>
                    </Grid>
                    
                    
                </Grid>
                </Box>
    
            <Grid container spacing={0}>
                <Grid item xs={12} md={12}>
                    <Container sx={{display:'block', alignContent:'center', padding:'3S% 7%'}} >
                        <Typography
                            variant='h6'
                            component="span"
                            sx={{ display: { xs: 'block', md: 'block' }, color:'black' }}
                            >
                                Our Services
                        </Typography>
                        <br />
                        <Typography
                            variant='object2'
                            component="span"
                            sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'center' }}
                            >
                                At Loner, we are attempting to build comprehensive lending services for the society, where
                                consumers can connect to possible lenders to get loans. We believe this would give our users
                                opportunity to build connections and make informed financial decisions using the best resource at disposal.
                                <br /><br />
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore. quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure 
                                
                        </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={12} sx={{display: { xs: 'none', md: 'block' }}}>
                    <Box sx={{ flexGrow: 1, margin:'5% 20%', display:'flex', position:'relative', left:'5%'}}>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex'}}>
                            <CustomCard Photo='assets\about-page\career icon.svg' Title='Growth' Message='ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex'}}>
                            <CustomCard Photo='..\assets\about-page\Good humanicon.svg' Title='You are Incharge' Message='ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex'}}>
                            <CustomCard Photo='.\assets\about-page\Personal touch icon.svg' Title='Connect' Message="ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"/>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} sx={{display: { xs: 'block', md: 'none' }, position:'relative', left:'15%'}}>
                    <Box sx={{ flexGrow: 1, margin:'5% 15%', display:'block'}}>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex', margin:'3%'}}>
                            <CustomCard Photo='assets\about-page\career icon.svg' Title='Career Guidance' Message='Year long services for career selection & planning'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex', margin:'3%'}}>
                            <CustomCard Photo='..\assets\about-page\Good humanicon.svg' Title='Advocacy' Message='Building consensus on practices and policy around Career Education'/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} sx={{display:'flex', margin:'3%'}}>
                            <CustomCard Photo='.\assets\about-page\Personal touch icon.svg' Title='Academic Research' Message="Driving decisions based on data"/>
                        </Grid>
                    </Box>
                </Grid>
               


                <Grid item xs={12} md={5} sx={{backgroundColor: '#1b2f3f'}}>
                    <Container sx={{display:'block', alignContent:'center', padding:'3S% 7%'}} >
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'#ffc13b' }}
                        >
                            Mission Statement
                    </Typography>
                    <br />
                    <Typography
                        variant='object2'
                        component="span"
                        sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'white', textAlign:'left', padding:'0 0 10% 20%' }}
                        >
                            met, consectetur, adipisci
                             velit, sed quia non numquam eius modi tempora 
                             incidunt ut labore et dolore magnam 
                             aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    </Typography>
                    </Container>
                    <Container sx={{display:'block', alignContent:'center', padding:'3S% 7%'}} >
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'#ffc13b' }}
                        >
                            Vision Statement
                    </Typography>
                    <br />
                    <Typography
                        variant='object2'
                        component="span"
                        sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'white', textAlign:'left', paddingLeft:'20%' }}
                        >
                            Sed ut perspiciatis unde omnis iste natus 
                            error sit voluptatem accusantium doloremque
                             laudantium, totam rem aperiam, eaque ipsa quae
                              ab illo inventore veritatis et 
                    </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={7} sx={{backgroundColor: '#ffc13b', padding:'3% 10%'}}>
                    <Container sx={{display:'block', alignContent:'center', padding:'3% 10%'}} >
                    
                    
                    <Typography
                        variant='object2'
                        component="span"
                        sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'start' , paddingLeft:'20%'}}
                        >
                            Loner is a major force for the advancement
                             of C-2-C services in this country and deserves the attention of all people.
                    </Typography>
                    <br />

                    <Typography
                        variant='object3'
                        component="span"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'black',textAlign:'right' }}
                        >
                            <img src="..\assets\Asset 12NPOCA Website.png" height="60" width="50" alt='user review'></img><br/>
                            <b>Mr. Lorem Ipsum</b><br />
                            Executive Director<br />
                            Finances Development Association
                    </Typography>
                    </Container>
                </Grid>
                

                <Grid item xs={12} md={12}>
                    <Container sx={{display:'block', alignContent:'center', padding:'3S% 7%'}} >
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{ display: { xs: 'block', md: 'block' }, color:'black' }}
                        >
                            Our Process
                    </Typography>
                    <br />
                    <Typography
                        variant='object2'
                        component="span"
                        sx={{  display: { xs: 'block', md: 'block' }, fontSize:'15px', color:'black', textAlign:'center' }}
                        >
                            If you are interested in strengthening your finances and need
                            Guidance, we would invite you to join the community of over 100s'
                            of users. Our Extensive program, will help you in geeting your 
                            finances straight.
                    </Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Container sx={{display:'block', alignContent:'center', padding:'3S% 7%'}} >
                        <CardCircle />
                    <br />
                    </Container>
                </Grid>
            </Grid>

            <MailList />
            <BottomBar />
            <Footer />
        </div>  
    )
}
export default Home;