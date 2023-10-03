import React from 'react';
import styles from '../styles/ProductList.module.css';
import Link from 'next/link';


function ProductList({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <div className={styles['products-container']}>
        {products.map((product) => (
         <Link className={styles['product-container']} href={`/product/${product.id}`} key={product.id}>          
          <div>
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>            
            <p>Price: ${product.price}</p>
          </div>
        </Link>          
        ))}
      </div>
    </div>
  );
}

export default ProductList;
