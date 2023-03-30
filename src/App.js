import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Mobile } from './Mobile';
import { MobileList } from "./MobileList";
import { Home } from "./Home";
import { ElectricalsList } from './ElectricalsList.js';
import { Mens } from './Mens.js';
import { Womens } from './Womens.js';
import { BuyPhone } from "./BuyPhone";
import { ShoppingCart } from "phosphor-react";
import { Signup } from "./Signup";
import { Login } from "./Login";

//import TextField from '@mui/material/TextField';


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  return (
    <div className="App">


      {/* <AppBar position="static" className="app-bar"> */}
      <div className="navbar">
        <div className="links">
          {/* <Toolbar variant="dense"> */}
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>

          <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Categories
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* <MenuItem onClick={handleClose}>Mobiles</MenuItem> */}
            <MenuItem onClick={() => navigate("/mobiles")}>Mobiles</MenuItem>

            <MenuItem onClick={() => navigate("/electricals")} >Electronics and Appliances</MenuItem>
            <MenuItem onClick={() => navigate("/mens")} >Mens</MenuItem>
            <MenuItem onClick={() => navigate("/womens")}>Womens</MenuItem>
          </Menu>


          <Button color="inherit" onClick={() => navigate("/signup")}>Signup</Button>
          <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          <Button color="inherit">Cart</Button>
          {/* <Avatar className="small-profile" src="/broken-image.jpg" /> */}
          <Button to="/cart">
            <ShoppingCart size={36} />
          </Button>
          {/* </Toolbar> */}
        </div>
      </div>
      {/* </AppBar> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<MobileList />} />
        <Route path="/electricals" element={<ElectricalsList />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/phones/:id" element={<BuyPhone />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />



      </Routes>





    </div >


  );
}

export default App;
