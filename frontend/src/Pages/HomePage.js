import React from "react";
import {data} from '../data'
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <Link to={`/product/${product._id}`} >
              <img
                className="product-image"
                src={"/images/" + product.image}
                alt="product"
              ></img>
            </Link>
            <div className="product-name">
              <Link to={`/product/${product._id}`} >{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div iv className="product-rating">
              {product.rating} (Reviews: {product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
