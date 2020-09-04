import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const cart =props.cart;
  let total=0;
 for (let i = 0; i < cart.length; i++) {
     const product = cart[i];
    total = total + product.price*product.quantity;
     
 }
   let shipping=0;
   if (total > 35) {
       shipping = 0;
   }
    else if (total > 15) {
         shipping = 4.99;
   }
    else if(total > 0){
          shipping =12.99;
   }
   const tax = (total / 10).toFixed(2);
   const grandTotal=(total+shipping+Number(tax)).toFixed(2);

   const formatNumber= num =>{
       const precision = num.toFixed(2);
     return Number(precision);           
   }
    return (
      <>
        <div className="cart-aria">
            <h4>Order summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>product price:{formatNumber(total)}</p>
            <p><small>shipping Cost:{shipping}</small></p>
            <p><small>Tax + Vat:{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
            </div>
            {
              props.children
            }
              
        </>
    );
};

export default Cart;