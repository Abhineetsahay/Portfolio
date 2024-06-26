import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <Box sx={{ py: 4,marginTop:"40px", backgroundColor: '#1A1E24', color: '#fff', display: "flex", flexDirection: "column", alignItems: "center" }}>
     <motion.div>     
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton href="https://github.com/Abhineetsahay" color="inherit">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.linkedin.com/in/abhineet-sahay-17a39428b" color="inherit">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
          <PhoneIcon sx={{ mr: 1 }} /> <Link href="tel:+918006027440" color="inherit" underline="hover">+91 8006027440</Link>
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <EmailIcon sx={{ mr: 1 }} /> <Link href="mailto:abhineetsahay@gmail.com" color="inherit" underline="hover">abhineetsahay@gmail.com</Link>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2024 Abhineet Sahay
        </Typography>
      </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
