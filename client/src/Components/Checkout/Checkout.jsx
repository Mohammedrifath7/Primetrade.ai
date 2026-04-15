import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const navigate = useNavigate();

  return (
    <div className="checkout-page">

      {/* Header */}
      <header className="checkout-header">
        <div className="logo" onClick={ () => navigate("/products") }>
          <h1 className="logo-title">
            POWER<span>LOOM</span>
          </h1>
          <p className="logo-sub">SPARES HUB</p>
        </div>


        <input
          type="text"
          className="search"
          placeholder="Search for products..."
        />

        <div className="actions">
          <span>🛒 Cart (2)</span>
          <span>👤 Profile</span>
        </div>
      </header>

      {/* Title */}
      <div className="checkout-top">
        <h2>Checkout</h2>
        <div className="steps">
          <span className="active">1. Shipping</span>
          <span>›</span>
          <span>2. Payment</span>
          <span>›</span>
          <span>3. Review</span>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress active"></div>
        <div className="progress"></div>
        <div className="progress"></div>
      </div>

      <div className="checkout-content">

        {/* LEFT */}
        <div className="checkout-form">
          <h3>Shipping Information</h3>

          <input placeholder="Full Name" />
          <input placeholder="Address Line 1" />
          <input placeholder="Address Line 2 (Optional)" />

          <div className="two-col">
            <input placeholder="City" />
            <input placeholder="State/Province" />
          </div>

          <div className="two-col">
            <input placeholder="ZIP/Postal Code" />
            <select>
              <option>India</option>
            </select>
          </div>

          <input placeholder="Phone Number" />

          <hr />

          <h3>Shipping Method</h3>

          {/* CUSTOM RADIO */}
          <label
            className={`shipping-option ${
              shippingMethod === "standard" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="shipping"
              checked={shippingMethod === "standard"}
              onChange={() => setShippingMethod("standard")}
            />
            <div className="radio-ui"></div>
            <div className="shipping-text">
              <strong>Standard Shipping</strong>
              <span>Free · 5–7 business days</span>
            </div>
          </label>

          <label
            className={`shipping-option ${
              shippingMethod === "express" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="shipping"
              checked={shippingMethod === "express"}
              onChange={() => setShippingMethod("express")}
            />
            <div className="radio-ui"></div>
            <div className="shipping-text">
              <strong>Express Shipping</strong>
              <span>₹500 · 2–3 business days</span>
            </div>
          </label>
        </div>

        {/* RIGHT */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          <div className="summary-item">
            <span>High-Speed Shuttle (x2)</span>
            <span>₹9,000</span>
          </div>

          <div className="summary-item">
            <span>Low-Speed Gear (x1)</span>
            <span>₹4,500</span>
          </div>

          <hr />

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

          <button className="payment-btn" onClick={() => navigate("/payment")}>
            Continue to Payment
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;