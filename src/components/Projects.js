import React from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Link
} from "@mui/material";
import { motion } from "framer-motion";
import ChatBuddies from "../assets/projectPic/ChatBuddies.png";
import Ecommerce from "../assets/projectPic/E-commerce.png";
import SpaceExplorer from "../assets/projectPic/Space-Explorer.png";


const ProjectData = [
  {
    id: 1,
    image: ChatBuddies,
    link: "https://github.com/Abhineetsahay/Chat-Buddies",
    title: "Chat Buddies",
    description:
      "Chat Buddies is a real-time web chat application that leverages modern web technologies to provide an interactive and seamless messaging experience. The application supports real-time messaging, user authentication.",

  },
  {
    id: 2,
    image: Ecommerce,
    link: "https://github.com/Abhineetsahay/E-commerce",
    title: "E-commerce Website",
    description:
      "An e-commerce platform developed with the MERN stack (MongoDB, Express.js, React, Node.js). This comprehensive project includes features such as user authentication and authorization, product management,Cart Management. It aims to provide a fully functional, responsive online shopping experience.",
   
  },
  {
    id: 3,
    image: SpaceExplorer,
    link: "https://github.com/Abhineetsahay/Space-Explorer",
    title: "Space Explorer",
    description:
      "Explore the universe with this interactive web application. Built using modern web technologies, it offers a visually engaging experience where users can learn about different celestial bodies and space phenomena. The project includes educational resources for space enthusiasts.",
  
  },
];

const Project = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ marginBottom: "2rem" }} key={"work"}>
        <Typography variant="h3" align="center" gutterBottom>
          Featured Projects
        </Typography>
        <Typography variant="subtitle1" align="center">
          Here are some of the selected projects that showcase my passion for front-end development.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {ProjectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: project.id % 2 === 0 ? "row-reverse" : "row",
                },
                alignItems: "center",
                mb: 5,
                width: "100%",
                maxWidth: "900px",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                }}
              >
                 <Link href={project.image} target="_blank" rel="noopener noreferrer">   
                <CardMedia
                  component="img"
                  height="100%"
                  image={project.image}
                  alt={project.title}
                />
                </Link>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  padding: 3,
                  textAlign:"start"
                }}
              >
                <CardContent >
                  <Typography color="text.secondary" variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Divider sx={{ marginY: 2 }} />
                  <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                    <Button variant="outlined" href={project.link} target="_blank">
                      See on GitHub
                    </Button>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Project;
