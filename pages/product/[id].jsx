import styles from '../../styles/ProductPage.module.css';


function ProductPage({ product }) {
  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />

      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Discount Percentage: {product.discountPercentage}%</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>

      <h2>Images:</h2>
      <div className={styles.imageContainer}>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const productId = context.params.id;
  let productData;

  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    
    productData = await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    return { notFound: true };
  }

  return {
    props: {
      product: productData
    }
  };
}

export default ProductPage;
