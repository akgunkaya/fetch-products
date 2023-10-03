import Head from 'next/head';
import ProductList from '../components/products'
import { useEffect, useState } from 'react';


export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data from an API or database
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);      
    }

    fetchProducts();
  }, []);
  return (
    <div> 
      <Head>
        <title>Fetch Products App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  

      <main>
        <h1>TEST</h1>
        <ProductList products={products} />
      </main>   


      <footer>

      </footer>
    </div>
  );
}
