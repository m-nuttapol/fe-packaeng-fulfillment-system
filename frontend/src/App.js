import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src="/cat.jpeg" alt="PACKHAI Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#">หน้าแรก</a></li>
            <li><a href="#">เกี่ยวกับเรา</a></li>
            <li><a href="#">บริการ Fulfillment</a></li>
            <li><a href="#">คำนวณราคา</a></li>
            <li><a href="#">รีวิวลูกค้า</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>PACKHAI FULFILLMENT</h1>
          <p>คลังสินค้าออนไลน์ ที่มีสาขามากที่สุดในไทย</p>
          <button className="btn-service">สนใจใช้บริการ</button>
        </div>
        <div className="hero-image">
          <img src="/cat.jpeg" alt="Fulfillment Warehouse" />
        </div>
      </section>

      <ProductList />
    </div>
  );
}

export default App;
