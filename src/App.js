import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import './App.css'
import Footer from "./components/Footer";
  
function App() {
  
    return (
        <div>
            <HashRouter>   
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/menu" element={<Menu />} />
                </Routes>
                <Footer/>
            </HashRouter>
        </div>
    );
}
  
export default App;