import * as React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector } from 'react-redux'; 


const NavBarPanel = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const cartProducts = useSelector(state => state.cart);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return ( 
    <AppBar position="static" sx={{
      bgcolor: 'transparent',
      backgroundImage: 'linear-gradient(0deg, #FBAB7E 0%, #F7CE68 100%)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and icon */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          {/* Page Title/Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/" // Make the Typography act as a Link
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            Store
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="product menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
            >
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop menu items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to="/" 
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Products
            </Button>
          </Box>

          {/* MyBag Link, aligned to the end */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={Link}
              to="/cart" 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              MyBag {cartProducts.length}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   
  );
}
 
export default NavBarPanel;