import '../src/assets/css/settings.css';
import ReactDOM from "react-dom";
import { Route, Router, Routes } from "react-router-dom";

import Header from "./container/header/Header";
import HomePage from "./pages/homePage/homePage.js";
import Billing from './pages/billing/billing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/billing' element={<Billing />} />
      </Routes>
    </div>
  )
}

export default App;
