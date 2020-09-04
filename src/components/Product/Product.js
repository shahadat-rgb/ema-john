import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock,key } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
    <h4 className="product-name"><Link to={"/product/"+key}> {name}</Link>  </h4>
                <br />
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showAddToCart && <button className="btn"
                 onClick={()=>props.productHandler(props.product)}>
                 <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>}
            </div>

        </div>
    );
};

export default Product;