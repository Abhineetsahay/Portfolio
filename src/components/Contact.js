import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Alert } from "@mui/material";
import contactImage from "../assets/Contact.png";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "./Firebase";

const db = getDatabase(app);

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const PostContact = (data) => {
    console.log(data);
    push(ref(db, "visitors"), {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString()
    }).then(() => {
      setSuccessMessage("Message sent successfully!");
      reset();
    }).catch((error) => {
      console.error("Error writing to the database: ", error);
    });
  };

  return (
    <Container sx={{ marginTop: "50px" }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Get In Touch
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            mt: 4,
            height: { xs: "auto", md: "80vh" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              mr: { md: 4 },
              mb: { xs: 4, md: 0 },
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Box
              component="img"
              src={contactImage}
              alt="contactImage"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: { md: "block" },
              }}
            />
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                width: "80%",
                padding: "10px",
              }}
            >
              Let’s discuss on something{" "}
              <span style={{ color: "#00C853" }}>cool</span> together
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#f9f9f9",
              p: { xs: 2, md: 4 },
              borderRadius: 2,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
            <form onSubmit={handleSubmit(PostContact)}>
              <TextField
                fullWidth
                label="Your name"
                variant="outlined"
                margin="dense"
                id="name"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Your email"
                variant="outlined"
                margin="dense"
                id="email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Your message"
                variant="outlined"
                margin="dense"
                id="message"
                {...register("message", { required: "Message is required" })}
                error={!!errors.message}
                helperText={errors.message ? errors.message.message : ""}
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
