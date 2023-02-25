import * as React from 'react';
import NavBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amandas Todo App
          </Typography>
          <Link color="inherit" className='btn' to='/'>Login</Link>
          <Link color="inherit" className='btn' to="/adduser">Register</Link>
          <Link color="inherit" className='btn' to="/todo">Todo</Link>
        </Toolbar>
      </NavBar>
    </Box>
  );
}

