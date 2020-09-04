import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const ProductDeatils = () => {
    const {productkey}=useParams()
  const product= fakeData.find(pd=>pd.key === productkey);
//   console.log(product); 
    return (
        <div>
            <h2>{productkey} product deatils</h2>
             <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDeatils; 
