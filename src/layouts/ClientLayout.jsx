import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ChatBotButton } from "../components/ChatBot";
import { FaqComponent } from "../components/FaqComponent/FaqComponent";

export const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      
      <ChatBotButton />
      <Footer />
    </>
  );
};
