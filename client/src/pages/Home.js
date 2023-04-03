import React from "react";
import { Header } from "client/src/components/header.jsx";
import "../assets/css/home.css";
export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="boxes-wrapper common_width"></div>
    </div>
  );
};