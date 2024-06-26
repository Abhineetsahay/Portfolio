import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ProfilePhoto from "../assets/Profile.jpeg";
import { motion } from 'framer-motion';
const aboutMe = [
  {
    id: 1,
    detail: `Hello! I'm Abhineet Sahay, a second-year engineering student at KIIT with a CGPA of 8.98. I specialize in the MERN stack and have skills in ReactJS, ExpressJS, MongoDB, JavaScript, CSS, C++, and C. I'm passionate about building efficient web applications and enjoy working on projects that solve real-world problems. I'm committed to continuous learning and personal growth, and I thrive in collaborative environments. Check out my projects on GitHub and connect with me on LinkedIn. Let's collaborate and create something amazing!`,
  },
];

const AboutPage = () => {

  return (
    <Box sx={{  minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 10 }}>
      <Container sx={{ maxWidth: 1200 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <Box
                  component="img"
                  src={ProfilePhoto}
                  alt="Profile"
                  sx={{ borderRadius: '50%', width: '100%', maxWidth: 300, mx: 'auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Abhineet Sahay
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#00C853', fontWeight: 'bold' }}>
                MERN STACK Developer
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                {aboutMe.map((about) => (
                  <Box key={about.id} sx={{ textAlign: 'start' }}>
                    {about.detail}
                  </Box>
                ))}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
