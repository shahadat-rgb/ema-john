import React, { useState, useEffect } from 'react';
import  fakeData  from "../../fakeData";
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () =>{  
const first10 =fakeData.slice(0,10);
const [product,setProduct] = useState(first10)
const [cart, setCart] = useState([]);

  useEffect(()=>{
    const saveCart=getDatabaseCart()
    const productKeys = Object.keys(saveCart);
    const cartProduct = productKeys.map(exixtingkey => {
    const product= fakeData.find(pd => pd.key === exixtingkey)
    product.quantity=saveCart[exixtingkey]
         return product;
  })
        setCart(cartProduct);

  },[])


 const productHandler =(product)=>{
     const toBeAddedKey = product.key;
 const sameProduct= cart.find(pd => pd.key === toBeAddedKey);
   let count =1;
   let newCart;
   if (sameProduct) {
       const count=sameProduct.quantity+1;
       sameProduct.quantity = count;
       const other =cart.filter(pd=> pd.key !== toBeAddedKey )
       newCart =[...other,sameProduct]
   }
   else{ 
       product.quantity =1;
       newCart =[...cart, product];
   } 
     setCart(newCart);

     addToDatabaseCart (product.key,count)  
     
 }
return (
    <div className='shop-container'>
        <div className="product-container">
            {
             product.map(pd => <Product
             showAddToCart={true}
               productHandler={productHandler} 
               key={pd.key}
                product={pd}></Product>)
            }
            
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
            <Link to='/review'>
              <button className="btn">Review order</button>
           </Link>
            </Cart>
        </div>
       
           
        </div>
    );
};

export default Shop;