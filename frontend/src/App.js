import React from 'react';
import './App.css';
import {data} from './data'

function App() {

  const opensidebar = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  
  const closesidebar = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={opensidebar}>&#9776;</button>
          <a href="index.html">T-short shop</a>
        </div>
        <div className="header-links">
          <a href="signin">Sign In</a>
          <a href="cart">Cart</a>
        </div>
      </header>
      <aside className="sidebar">
        <ul>
          <li>
            <a href="http://">Red</a></li>
          <li>Gren</li>
          <li>Blue</li>
          <li>Yellow</li>
          <li>White</li>
        </ul>
        <button className="sidebar-close-btn" onClick={closesidebar}>x</button>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product => 
                <li>
                  <div className="product">
                    <img className="product-image" src={"/images/" + product.image} alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
              <div iv className="product-rating">{product.rating} (Reviews: {product.numReviews})</div>
                  </div>
                </li>
              )
            }
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reserved
      </footer>
    </div>
  );
}

export default App;
