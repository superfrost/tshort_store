import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import {data} from './data'
import ProductPage from "./Pages/ProductPage"
import HomePage from './Pages/HomePage'

function App() {

  const openSideBar = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  
  const closeSideBar = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  
  return (
    <BrowserRouter>
    
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openSideBar}>&#9776;</button>
          <Link to="/">T-short shop</Link>
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
        <button className="sidebar-close-btn" onClick={closeSideBar}>x</button>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/" exact={true} component={HomePage} />
          
        </div>
      </main>
      <footer className="footer">
        All right reserved
      </footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
