import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes, useNavigate,Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import HomeCon from "./Pages/Home/HomeCon";
import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import React,{ useEffect, useState } from "react";
import Profile from "./Pages/Profile/Profile";
import EventPage from "./Pages/Event/EventPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { isLoged } from "./features/auth-slice";


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const LogedIn = useSelector<RootState>((state) => state.User.LogedIn);
  useEffect(() => {
    dispatch(isLoged());
  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<HomeCon />} />
              <Route path='/about' element={<About />} />
              <Route path='/events' element={<Events />} />
             {LogedIn ?  <Route path='/profile/:userId' element={<Profile />} /> : null}         
                <Route path='/event/:eventId' element={<EventPage />} />
            </Route>
            <Route path='/' element={<Welcome />}>
              <Route path='/login' element={LogedIn ?  <Navigate to="/"/>:<Login />} />
              <Route path='/register' element={LogedIn ?  <Navigate to="/"/>:<Register />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
