import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Products from './Components/Products/Products';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Review from './Components/Review/Review';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path = "/cart" element = {<Cart/>} />
        <Route path="/checkout" element = {<Checkout/>} />
        <Route path="/payment" element = {<Payment/>} />
        <Route path="/review" element = {<Review/>} />
        
      </Routes>
    </Router>
  );
}

export default App;