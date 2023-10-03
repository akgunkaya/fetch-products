import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
