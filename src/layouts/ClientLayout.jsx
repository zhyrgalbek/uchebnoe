import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const ClientLayout = () => {
  return (
    <>
      {/* <Container sx={{ minHeight: "100vh" }} maxWidth="lg"> */}
      <Header />
      <Outlet />
      {/* </Container> */}
      <Footer />
    </>
  );
};
