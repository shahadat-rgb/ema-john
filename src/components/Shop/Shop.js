import React, { useState } from 'react';
import  fakeData  from "../../fakeData";
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () =>{  
const first10 =fakeData.slice(0,10);
const [product,setProduct] = useState(first10)
const [cart, setCart] = useState([]);
 const productHandler =(product)=>{
     console.log('product',product);
   const newCart=[...cart,product]  
         setCart(newCart);
 }
return (
    <div className='shop-container'>
        <div className="product-container">
            {
             product.map(pd => <Product
            productHandler={productHandler} 
                product={pd}></Product>)
            }
            
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
       
           
        </div>
    );
};

export default Shop;