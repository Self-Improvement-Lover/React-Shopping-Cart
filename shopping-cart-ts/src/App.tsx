import './reset.css'
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Shop} />
        <Route path='/cart' Component={Cart}/> 

      </Routes>
    </Router>
  );
}

export default App;
