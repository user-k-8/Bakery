import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import './App.css'
import Footer from "./components/Footer";
  
function App() {
  
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/Menu" element={<Menu />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}
  
export default App;