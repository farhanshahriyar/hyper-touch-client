import React, { useState } from 'react'
import ProductLists from './ProductLists'
import Error from '../../components/Error/Error';

const AllProducts = () => {
    const [error, setError] = useState(null);
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">Products Available in store</h2>
      {error && <Error/>}

      

            <ProductLists/>
    
    </div>
  </div>
  )
}

export default AllProducts
