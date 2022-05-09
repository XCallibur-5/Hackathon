import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";


function LogButton(){
  return(
    <div >
    {/* ------------------------------here we have used css from the app.css file. */}
      Login
    </div>
  )
}


// -----------------external css used here---------------------
const pages = [<a className='navMenu' href='/sessions'>Product</a>,<a className='navMenu' href='/login'><LogButton /></a>,<a className='navMenu' href='/aboutUs'>About Us</a>];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <AppBar position="sticky" sx={{backgroundColor:'#fff', paddingLeft:'10%', paddingRight:'10%'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            noWrap
            component="div"
            sx={{ mr: 2, height: '70px', display: { xs: 'none', md: 'flex' } }}
          >
          <a href='/'><img src='..\assets\Mylogo.jpeg' height='70px' alt='companyLogo'/></a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'relative', right: '10%' }}>
            {/*------------------------------------------------------------------------------------ hamburger button */}
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"black"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              dense
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, height: '70px', display: { xs: 'flex', md: 'none' } }}
          >
            Loner
          </Typography>
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse' ,display: { xs: 'none', md: 'flex' } }}>
            {pages.slice(0).reverse().map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', margin:'0','&:hover': {color: '#FFB923', backgroundColor:'inherit'} }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
