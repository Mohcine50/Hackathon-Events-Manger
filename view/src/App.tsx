import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import HomeCon from "./Pages/Home/HomeCon";
import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useState } from "react";
function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<HomeCon />} />
              <Route path='/about' element={<About />} />
              <Route path='/events' element={<Events />} />
            </Route>
            <Route path='/' element={<Welcome />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
