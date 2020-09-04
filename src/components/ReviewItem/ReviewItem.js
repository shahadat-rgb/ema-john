import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {img,name,quantity,price,key} = props.productItem
    return (
           
    
        <div className='container'>
         <div className="image">
             <img src={img} alt=""/>
             <h4> {name}</h4>
             <p>quantity{quantity}</p>
             <p>price:{price}</p>
             <button className="btn" 
              onClick={()=>props.removeProduct(key)}>Remove</button>
          </div>
        </div>
        
      
    );
};

export default ReviewItem;