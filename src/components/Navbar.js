import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';


// import './Navbar.css'

const MyToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  height:"40%",
})

const Navbar = () => {

  return (
    <AppBar position='sticky'>
      <MyToolbar>
        <Typography variant="h4" fontWeight="500" sx={{color:"#f8f8f8",letterSpacing:1}} >SpeedShare</Typography>
        <IconButton href='/'>
          <ShareIcon fontSize='large' sx={{color:"#fbc531"}} />
        </IconButton>
      </MyToolbar>
    </AppBar>
  );
};
export default Navbar;
