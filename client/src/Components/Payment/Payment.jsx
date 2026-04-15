import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="payment-page">

      {/* HEADER */}
      <header className="payment-header">
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

      {/* TITLE */}
      <div className="payment-top">
        <h2>Checkout</h2>
        <div className="steps">
          <span>1. Shipping</span>
          <span>›</span>
          <span className="active">2. Payment</span>
          <span>›</span>
          <span>3. Review</span>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress-bar">
        <div className="progress done"></div>
        <div className="progress active"></div>
        <div className="progress"></div>
      </div>

      <div className="payment-content">

        {/* LEFT */}
        <div className="payment-form">
          <h3>Payment Method</h3>

          {/* CARD */}
          <label
            className={`payment-option ${
              paymentMethod === "card" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            <div className="radio-ui"></div>
            <div className="payment-text">
              <strong>Credit / Debit Card</strong>
              <span>Visa, MasterCard, RuPay</span>
            </div>
          </label>

          {/* UPI */}
          <label
            className={`payment-option ${
              paymentMethod === "upi" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            <div className="radio-ui"></div>
            <div className="payment-text">
              <strong>UPI</strong>
              <span>Google Pay, PhonePe, Paytm</span>
            </div>
          </label>

          {/* COD */}
          <label
            className={`payment-option ${
              paymentMethod === "cod" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <div className="radio-ui"></div>
            <div className="payment-text">
              <strong>Cash on Delivery</strong>
              <span>Pay when product arrives</span>
            </div>
          </label>

          {/* CARD DETAILS */}
          {paymentMethod === "card" && (
            <div className="card-form">
              <input placeholder="Card Number" />
              <input placeholder="Card Holder Name" />

              <div className="two-col">
                <input placeholder="MM / YY" />
                <input placeholder="CVV" />
              </div>
            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="card-form">
              <input placeholder="Enter UPI ID (example@upi)" />
            </div>
          )}
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

          <button className="pay-btn" onClick={() => navigate("/review")}>
            Pay ₹15,930
          </button>
        </div>

      </div>
    </div>
  );
};

export default Payment;