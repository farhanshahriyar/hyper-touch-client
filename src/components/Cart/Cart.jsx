import { useContext, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../firebase/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




const Cart = () => {
  const { setProducts, products } = useContext(AuthContext);
  console.log(products)
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    Swal.fire({
      icon: 'success',
      title: 'Continue Shopping',
      text: 'You can continue shopping now!',
    })
    navigate('/stores');
  }

  const handleCheckout = () => {
    Swal.fire({
      icon: 'success',
      title: 'Checkout',
      text: 'Product purchased successfully! You can continue shopping',
    })
    localStorage.removeItem('products');
    setProducts([]);
    navigate('/stores');
  }

  const handleRemoverProduct = (id) => {
    Swal.fire({
      icon: 'success',
      title: 'Remove',
      text: 'You can remove product now!',
    })
   const newProducts = products.filter((product) => product._id !== id);
   setProducts(newProducts);
   localStorage.setItem('products', JSON.stringify(newProducts));
   
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto bg-white rounded-lg">
            <div className="flex h-full flex-col overflow-y-scroll bg-white ">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.img1}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button onClick={()=>handleRemoverProduct(product._id)}
                                        type="button"
                                        className="font-medium text-black hover:text-gray-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="">
                        <div className='flex justify-between text-base font-medium text-gray-900"'>
                        <p className="font-bold">Items Total</p>
                        <p>BDT {products.reduce((pre,cur)=>pre+(cur.quantity * parseInt(cur.price)), 0)}</p>
                        </div>
                        {/* <div className='flex justify-between text-base font-medium text-gray-900"'>
                        <p className="font-bold">Shipping Fee</p>
                        <p>BDT {products.reduce((pre,cur)=>pre+(cur.quantity * parseInt(cur.price)), 0) * 0.1}</p>
                        </div>
                        <div className='flex justify-between text-base font-medium text-gray-900"'>
                        <p className='font-bold'>Total Payment</p>
                        <p>{products.reduce((pre,cur)=>pre+(cur.quantity * parseInt(cur.price)), 0) + (products.reduce((pre,cur)=>pre+(cur.quantity * parseInt(cur.price)), 0) * 0.1)}</p>
                        </div> */}
                        {/* <p>BDT {products.reduce((pre,cur)=>pre+(cur.quantity * parseInt(cur.price)), 0)}</p> */}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a onClick={handleCheckout}
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-black hover:text-gray-500"
                            onClick={handleContinueShopping}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default Cart
