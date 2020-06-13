import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import ProductPage from "./Pages/ProductPage"
import HomePage from './Pages/HomePage'
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';

function App() {  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <SideBar />
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
