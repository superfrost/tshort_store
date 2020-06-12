import React from 'react'
import { data } from '../data';
import { Link } from 'react-router-dom';

function ProductPage(props) {
  console.log(props.match.params.id);
  console.log(data.products);
  
  const product = data.products.find(p => p._id == props.match.params.id);
  console.log(product);
  
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
            <li>Price: {product.price}</li>
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
