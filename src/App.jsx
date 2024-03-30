import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Moviedetails from "./components/Moviedetails/Moviedetails";
import Pagenotfound from "./components/Pagenotfound/Pagenotfound";
import Footer from "./components/FooterOne/Footerone";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<Moviedetails />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
