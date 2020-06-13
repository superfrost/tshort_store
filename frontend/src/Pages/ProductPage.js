import React from 'react'
import { Link } from 'react-router-dom';

function ProductPage(props) {

  const data = {
    products: [
      {
        _id: 1,
        name: "Black T-short",
        brand: "Nike",
        image: "black.jfif",
        price: 60,
        rating: 4.5,
        numReviews: 9,
      },
      {
        _id: 2,
        name: "Orange T-short",
        brand: "Nike",
        image: "orange.jfif",
        price: 62,
        rating: 4.6,
        numReviews: 6,
      },
      {
        _id: 3,
        name: "White T-short",
        brand: "Nike",
        image: "white.jfif",
        price: 65,
        rating: 4.8,
        numReviews: 12,
      },
      {
        _id: 4,
        name: "Green T-short",
        brand: "Nike",
        image: "green.jfif",
        price: 55,
        rating: 4.2,
        numReviews: 4,
      },
      {
        _id: 5,
        name: "Purple T-short",
        brand: "Nike",
        image: "purple.jfif",
        price: 56,
        rating: 4.4,
        numReviews: 5,
      },
      {
        _id: 6,
        name: "Red T-short",
        brand: "Nike",
        image: "red.jfif",
        price: 55,
        rating: 4.3,
        numReviews: 7,
      },
    ]
  }
  
  const product = data.products.find(p => p._id == props.match.params.id);
  
  return (
    <div>
      <div className="back-to-result">
        <Link to="/" >Back</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={`/images/${product.image}`} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li><h4>{product.name}</h4></li>
            <li>{product.rating} Stars ({product.numReviews} Reviews)</li>
            <li><b>${product.price}</b></li>
            <li></li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>Qty: 
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
