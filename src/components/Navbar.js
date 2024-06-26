import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import bgchange from '../assets/bgchange.png';

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#151C25' : '#F0F0F4',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#000000',
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const renderDrawer = () => (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }}>
        <List>
          {navLinks.map((navLink) => (
            <ListItem button key={navLink.id} onClick={toggleDrawer}>
              <Link to={navLink.id} smooth={true} duration={500}>
                <ListItemText primary={navLink.title} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleThemeChange}>
            <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
            <IconButton
              color="inherit"
              aria-label="toggle dark mode"
              onClick={handleThemeChange}
              sx={{ mr: 2, backgroundColor: "white" }}
            >
              <img src={bgchange} alt="Toggle Dark Mode" style={{ width: '24px', height: '24px' }} />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: "2" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Abhineet Sahay
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                {renderDrawer()}
              </>
            ) : (
              <>
                {navLinks.map((navLink) => (
                  <Button key={navLink.id} color="inherit" sx={{ mx: 1 }}>
                    <Link to={navLink.id} smooth={true} duration={500}>
                      {navLink.title}
                    </Link>
                  </Button>
                ))}
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  color="inherit"
                  aria-label="toggle dark mode"
                  onClick={handleThemeChange}
                  sx={{ mr: 2, backgroundColor: "white" }}
                >
                  <img src={bgchange} alt="Toggle Dark Mode" style={{ width: '24px', height: '24px' }} />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
