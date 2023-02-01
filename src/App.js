import React from "react";
import ReactDOM from "react-dom";
import Header from "./container/header/Header";
import HomePage from "./pages/homePage/homePage.js";
import { Route, Router, Routes } from "react-router-dom";
import '../src/assets/css/settings.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App;
