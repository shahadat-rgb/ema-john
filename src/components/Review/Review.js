import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
const Review = () => {    
    const [cart, setCart] =useState([])
    const [orderPlace,setOrderPlace] =useState(false);

     const handlePlaceOrder=()=> {
          setCart([]);
          setOrderPlace(true)
         processOrder();
     }

    const removeProduct=(productKeys)=>{
    const newCart=cart.filter(pd=>pd.key !== productKeys)
        setCart(newCart);
     removeFromDatabaseCart(productKeys)
     }

useEffect(()=> {
       const saveCart= getDatabaseCart();
       const productKeys = Object.keys(saveCart);
       const cartProduct = productKeys.map(key => {
       const product= fakeData.find(pd => pd.key === key)
       product.quantity=saveCart[key]
            return product;

        })
            setCart(cartProduct);
     },[]);

      let thankyou;
     if (orderPlace) {
          thankyou= <img src={happyImage} alt=""/>
     }
    return (
        <div className="shop-container">
           <div clssName="product-container">
              {
                    cart.map(pd=> <ReviewItem
                    key={pd.key}
                    removeProduct={removeProduct} 
                    productItem={pd}></ReviewItem>)
              }
                  
                   {thankyou}
              
        </div>
         <div className="cart-container">
             <Cart cart={cart}>
             <button className="btn" onClick={handlePlaceOrder}>place order</button>
             </Cart>
         </div>
     </div>
        
    );
};

export default Review;