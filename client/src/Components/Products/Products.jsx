import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";



const products = [
  { id: 1, name: "airjet dobby connector", price: "₹4,500", img: "asset/airjet dobby connector.jpg" },
  { id: 2, name: "harness lever", price: "₹4,500", img: "asset/harness lever.jpg" },
  { id: 3, name: "Loom Mar Patta", price: "₹3,500", img: "asset/Loom Mar Patta.jpg" },
  { id: 4, name: "loom-cutter-blades", price: "₹4,500", img: "asset/loom-cutter-blades-500x500.jpg" },
  { id: 5, name: "frame lock", price: "₹4,500", img: "asset/mild-steel-frame-lock-500x500.jpg" },
  { id: 6, name: "picker ring", price: "₹4,500", img: "asset/picker ring_.jpg" },
  { id: 7, name: "Plastic Upper Cord M5", price: "₹4,500", img: "asset/Plastic Upper Cord M5.jpg" },
  { id: 8, name: "powerloom gear", price: "₹3,750", img: "asset/powerlooms-gear-40-t-2f-80-t-500x500.jpg" },
  { id: 9, name: "Jaquard Loom", price: "₹4,500", img: "asset/product-jpeg-500x500.jpg" },
  { id: 10, name: "teeth face gear", price: "₹4,500", img: "asset/teeth face gear.jpg" },
  { id: 11, name: "weft selector", price: "₹4,500", img: "asset/weft-selector-500x500.jpg" },
  { id: 12, name: "Wire Heald", price: "₹4,500", img: "asset/Wire Heald.jpg" },
  { id: 13, name: "airjet dobby connector", price: "₹4,500", img: "asset/airjet dobby connector.jpg" },
  { id: 14, name: "harness lever", price: "₹4,500", img: "asset/harness lever.jpg" },
  { id: 15, name: "Loom Mar Patta", price: "₹3,500", img: "asset/Loom Mar Patta.jpg" },
  { id: 16, name: "loom-cutter-blades", price: "₹4,500", img: "asset/loom-cutter-blades-500x500.jpg" }  
];

const PRODUCTS_PER_PAGE = 8;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="product-page">

      {/* Header */}
      <header className="top-bar">
        <div className="logo" onClick={ () => navigate("/cart") }>
          <h1 className="logo-title">
            POWER<span>LOOM</span>
          </h1>
          <p className="logo-sub">SPARES HUB</p>
        </div>

        <input
          type="text"
          placeholder="Search for products..."
          className="search-box"
        />

        <div className="top-links" >
          <span onClick={() => navigate("/cart")} >🛒 Cart</span>
          <span>👤 Profile</span>
        </div>
      </header>

      <div className="content">

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li>Weaving Loom</li>
            <li>Rapier Loom</li>
            <li>Jacquard Loom</li>
            <li>Weaving Loom</li>
            <li>Jacquard Loom</li>
          </ul>

          <hr />

          <h3>Price</h3>
          <input type="range" />
          <div className="price-range">
            <span>₹3,000</span>
            <span>₹20,000</span>
          </div>

          <hr />

          <h3>Brand</h3>
          <label><input type="checkbox" /> Abraws</label>
          <label><input type="checkbox" /> Grane</label>
          <label><input type="checkbox" /> Deezh</label>
          <label><input type="checkbox" /> Jarkey</label>
          <label><input type="checkbox" /> India</label>
          <label><input type="checkbox" /> Other</label>
        </aside>

        {/* Products */}
        <main className="product-grid">
          {currentProducts.map((item) => (
            <div key={item.id} className="product-card"  onClick={() => navigate(`/product/${item.id}`)}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button onClick={(e) => e.stopPropagation()}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Products;
