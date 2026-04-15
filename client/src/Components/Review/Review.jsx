import React from "react";
import "./Review.css";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const navigate = useNavigate();
  return (
    <div className="review-page">

      {/* HEADER */}
      <header className="review-header">
        <div className="logo" onClick={ () => navigate("/products") }>
          <h1 className="logo-title">
            POWER<span>LOOM</span>
          </h1>
          <p className="logo-sub">SPARES HUB</p>
        </div>

        <input
          className="search"
          placeholder="Search for products..."
        />

        <div className="actions">
          <span>🛒 Cart (2)</span>
          <span>👤 Profile</span>
        </div>
      </header>

      {/* TOP */}
      <div className="review-top">
        <h2>Checkout</h2>
        <div className="steps">
          <span>1. Shipping</span>
          <span>›</span>
          <span>2. Payment</span>
          <span>›</span>
          <span className="active">3. Review</span>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress-bar">
        <div className="progress done"></div>
        <div className="progress done"></div>
        <div className="progress active"></div>
      </div>

      <div className="review-content">

        {/* LEFT */}
        <div className="review-details">

          <h3>Shipping Information</h3>
          <div className="info-box">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Address:</strong> 12, MG Road, Chennai</p>
            <p><strong>City:</strong> Chennai</p>
            <p><strong>Phone:</strong> 9876543210</p>
            <p><strong>Shipping Method:</strong> Standard Shipping (Free)</p>
          </div>

          <h3>Payment Method</h3>
          <div className="info-box">
            <p><strong>Method:</strong> Credit / Debit Card</p>
            <p><strong>Card:</strong> **** **** **** 1234</p>
          </div>

          <h3>Items in Order</h3>

          <div className="review-item">
            <img src="/asset/airjet dobby connector.jpg" alt="" />
            <div>
              <h4>High-Speed Shuttle</h4>
              <p>Quantity: 2</p>
            </div>
            <span>₹9,000</span>
          </div>

          <div className="review-item">
            <img src="/asset/powerlooms-gear-40-t-2f-80-t-500x500.jpg" alt="" />
            <div>
              <h4>Low-Speed Gear</h4>
              <p>Quantity: 1</p>
            </div>
            <span>₹4,500</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹13,500</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Tax:</span>
            <span>₹2,430</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total:</span>
            <span>₹15,930</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Review;