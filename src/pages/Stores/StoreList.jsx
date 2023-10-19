import Error from '../../components/Error/Error'
import StoreCard from './StoreCard'
import React, { useState, useEffect } from 'react'

// const StoreList = () => {
//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/products')
//         if (!res.ok) throw new Error("Network response was not ok");
//         const data = await res.json()
//         setProducts(data)
//       } catch (err) {
//         setError(err.message)
//       }
//     }

//     getProducts()
//   }, [])

//   return (
//     <div>
//       {error && <Error/>}
//       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//         {products.map((product) => (
//           <a key={product.id} href={product.href} className="group">
//             <StoreCard product={products} />
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }

const StoreList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products');
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      {error && <Error/>}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <StoreCard product={product} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default StoreList

