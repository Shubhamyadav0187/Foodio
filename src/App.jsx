import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login"; // Import your Login component

import Nav from "./components/Nav"; // Import your Nav component
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Success from "./pages/Success";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Nav /> {/* Render your Nav component here */}
      <Routes>
        
        <Route path="/login" element={<Login />} /> {/* Define route for Login */}
        {/* Define routes for other pages if needed */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Success" element ={<ProtectedRoute element={<Success />} />}/>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

