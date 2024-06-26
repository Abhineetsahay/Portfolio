import React from 'react';
import { Container, Box, Card, CardMedia, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Html from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactJS from "../assets/skills/reactjs.png";
import ExpressJS from "../assets/skills/expressjs.png";
import MongoDB from "../assets/skills/mongodb.png";
import NodeJS from "../assets/skills/nodejs.png";
import CPP from "../assets/skills/C++.png";

const skills = [
  { id: 1, name: "HTML", image: Html },
  { id: 2, name: "CSS", image: CSS },
  { id: 3, name: "JavaScript", image: JavaScript },
  { id: 4, name: "ReactJS", image: ReactJS },
  { id: 5, name: "ExpressJS", image: ExpressJS },
  { id: 6, name: "MongoDB", image: MongoDB },
  { id: 7, name: "Node.js", image: NodeJS },
  { id: 8, name: "C++", image: CPP },
];

const SkillsSection = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          My Tech Stack
        </Typography>
        <motion.div
           initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill) => (
              <Grid item xs={6} sm={4} md={3} key={skill.id}>
                <Card sx={{ textAlign: 'center', p: 2,}}>
                  <CardMedia
                    component="img"
                    height="80"
                    image={skill.image}
                    alt={skill.name}
                    sx={{ objectFit: 'contain', mb: 1 }}
                  />
                  <Typography variant="subtitle1">
                    {skill.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default SkillsSection;
