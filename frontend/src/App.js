import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import KeyInformation from "./components/KeyInformation";
import Services from "./components/Services";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blogs from "./Blogs";
import Navbar from "./components/Navbar";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/key" element={<KeyInformation />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/AIAssistant" element={<AIAssistant />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
