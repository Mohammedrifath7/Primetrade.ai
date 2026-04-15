import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";



const relatedProducts = [
  {
    id: 1,
    name: "Powerloom Gear",
    price: "₹4,500",
    img: "/asset/powerlooms-gear-40-t-2f-80-t-500x500.jpg"
  },
  {
    id: 2,
    name: "Jacquard Loom",
    price: "₹3,750",
    img: "/asset/product-jpeg-500x500.jpg"
  },
  {
    id: 3,
    name: "airjet dobby connector",
    price: "₹4,500",
    img: "/asset/airjet dobby connector.jpg"
  }
];


const products = [
  { id: 1, name: "airjet dobby connector", price: "₹4,500", img: "/asset/airjet dobby connector.jpg" },
  { id: 2, name: "harness lever", price: "₹4,500", img: "/asset/harness lever.jpg" },
  { id: 3, name: "Loom Mar Patta", price: "₹3,500", img: "/asset/Loom Mar Patta.jpg" },
  { id: 4, name: "loom-cutter-blades", price: "₹4,500", img: "/asset/loom-cutter-blades-500x500.jpg" },
  { id: 5, name: "frame lock", price: "₹4,500", img: "/asset/mild-steel-frame-lock-500x500.jpg" },
  { id: 6, name: "picker ring", price: "₹4,500", img: "/asset/picker ring_.jpg" },
  { id: 7, name: "Plastic Upper Cord M5", price: "₹4,500", img: "/asset/Plastic Upper Cord M5.jpg" },
  { id: 8, name: "powerloom gear", price: "₹3,750", img: "/asset/powerlooms-gear-40-t-2f-80-t-500x500.jpg" },
  { id: 9, name: "Jaquard Loom", price: "₹4,500", img: "/asset/product-jpeg-500x500.jpg" },
  { id: 10, name: "teeth face gear", price: "₹4,500", img: "/asset/teeth face gear.jpg" },
  { id: 11, name: "weft selector", price: "₹4,500", img: "/asset/weft-selector-500x500.jpg" },
  { id: 12, name: "Wire Heald", price: "₹4,500", img: "/asset/Wire Heald.jpg" },
  { id: 13, name: "airjet dobby connector", price: "₹4,500", img: "/asset/airjet dobby connector.jpg" },
  { id: 14, name: "harness lever", price: "₹4,500", img: "/asset/harness lever.jpg" },
  { id: 15, name: "Loom Mar Patta", price: "₹3,500", img: "/asset/Loom Mar Patta.jpg" },
  { id: 16, name: "loom-cutter-blades", price: "₹4,500", img: "/asset/loom-cutter-blades-500x500.jpg" }  
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(item => item.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <div className="pd-page">

      {/* Header */}
      <header className="pd-header">
        <div className="logo" onClick={() => navigate("/products")}>
          <h1 className="logo-title">
            POWER<span>LOOM</span>
          </h1>
          <p className="logo-sub">SPARES HUB</p>
        </div>
        

        <input className="pd-search" placeholder="Search for products..." />

        <div className="pd-actions">
          <span>🛒 Cart</span>
          <span>👤 Profile</span>
        </div>
      </header>

      <h2 className="pd-title">Product Details</h2>

      {/* Product Details */}
      <div className="pd-container">

        {/* Image */}
        <div className="pd-image-box">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Info */}
        <div className="pd-info">
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>

          <span className="pd-stock">✔ In Stock</span>

          <p className="pd-desc">
            Durable powerloom spare part suitable for industrial textile usage.
          </p>

          {/* Quantity */}
          <div className="pd-qty">
            <span>Quantity</span>
            <div className="pd-qty-box">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <button className="pd-add-cart">Add to Cart</button>

          {/* Tabs */}
          <div className="pd-tabs">
            <span className="active">Specifications</span>
            <span>Reviews</span>
          </div>

          <div className="pd-specs">
            <p><strong>Usage:</strong> Powerloom Machines</p>
            <p><strong>Condition:</strong> New</p>
            <p><strong>Availability:</strong> In Stock</p>
          </div>
        </div>
      </div>

      <h3 className="pd-related-title">Related Products</h3>

      <div className="pd-related">
        {relatedProducts.map(item => (
          <div key={item.id} className="pd-related-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductDetails;
