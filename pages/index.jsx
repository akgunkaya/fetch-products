import Head from 'next/head';
import ProductList from '../components/ProductList'
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Head>
        <title>Fetch Products App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />        
      </Head>
  
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductList products={products} />
        )}
      </main>
  
      <footer></footer>
    </div>
  );
}
