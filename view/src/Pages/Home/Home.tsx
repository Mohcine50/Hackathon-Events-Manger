import React from "react";
import "./home.css";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className='home'>
      <Header />
      <Outlet />
    </div>
  );
}
export default Home;
