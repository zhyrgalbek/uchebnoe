import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const ClientLayout = () => {
  return (
    <Container sx={{ height: "100vh" }} maxWidth="lg">
      <Header />
      <Footer />
    </Container>
  );
};
