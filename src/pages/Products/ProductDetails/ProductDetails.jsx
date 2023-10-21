
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { AuthContext } from '../../../firebase/AuthProvider';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const { setProducts, products } = useContext(AuthContext);
    const product = useLoaderData();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = getAuth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
      return () => unsubscribe();
    }, []);

    const paymentHandler = () => {
      if (!user) {
        navigate('/login');
       Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You must login first!',
        })
        return;
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product Added Successfully!',
        })
      }
      const exist = products.find((p) => p._id === product._id);
      if (!exist) {
        const newProduct = { ...product, quantity: 1 };
      const newProducts = [...products, newProduct]; 
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
      } else {
        const newProducts = products.map((p) =>
          p._id === product._id ? { ...exist, quantity: exist.quantity + 1 } : p
        );
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts));
      }
    }


    if (!product) {
        return <div>Loading...</div>; // Show a loading state if product data hasn't been loaded yet
    }

    const { 
      name,
      // highlights,
      supplier,
      price,
      size,
      category,
      details,
      color,
      img1,
      img2,
      img3,
      img4
    } = product;

    return (
        <div className="bg-white">
         
        

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={img1}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={img2}
                alt={name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={img3}
                alt={name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={img4}
              alt={name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
            <h4 className="mt-1 text-base text-gray-500"><span className='text-base text-black'>Brand : </span>{supplier}</h4>
                {/* Product Details: Description, Size, Category, Color */}
                <div className="mt-6 lg:col-span-2">
                    <h3 className="text-lg font-medium text-black underline">Description</h3>
                    <p className="mt-2 text-gray-700">{details}</p>

                    <h3 className="mt-4 text-lg font-medium text-black underline">Size</h3>
                    <p className="mt-2 text-gray-700">{size}</p>

                    <h3 className="mt-4 text-lg font-medium text-black underline">Category</h3>
                    <p className="mt-2 text-gray-700">{category}</p>

                    <h3 className="mt-4 text-lg font-medium text-black underline">Color</h3>
                    <p className="mt-2 text-gray-700">{color}</p>
                </div>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{price} BDT</p>


            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description
                <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                        <p className="text-base text-lg underline text-black">Description</p>
                        <p className="text-base text-gray-900">{details}</p>
                    </div>
                </div> */}
                   {/* purchase btn */}
                   <div className="mt-1">
                    <button onClick={paymentHandler}
                        type="submit"
                        className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-700"
                    >
                        Purchase Now
                    </button>
                    {/* <button 
                        type="submit"
                        onClick={paymentHandler}
                        className={`mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${
                          user ? "bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white" : "bg-gray-400"
                        }`}
                        disabled={!user}
                    >
                        Buy Ticket
                    </button> */}
                </div>

                {/* Highlights */}
                {/* <div className="mt-10">
                    <h3 className="text-base text-lg underline text-black">Highlights</h3>
                    <div className="mt-4">
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        {
                          highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                              <span className="text-gray-900">{highlights}</span>
                            </li>
                          ))
                        }

                        </ul>
                    </div>
                </div> */}
               
            </div>
          </div>

        </div>
        </div>
    );
}

