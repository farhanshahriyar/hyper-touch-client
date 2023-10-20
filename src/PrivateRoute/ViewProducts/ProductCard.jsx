import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
    const { _id,
        name, highlights, supplier, price, size, category,
        img4
      } = product;
    

      const handleDelete = () => {
        // console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   console.log("file has been deleted.")
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deleteCount > 0 ) {
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted.',
                            'success'
                        )
                        
                    }
                })
            }
             // reset the page 
            window.location.reload()
          }) 
    }

  return (
    <div>
      <Link to={`/products/${_id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={img4}
                    alt={name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </Link>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-base font-medium text-gray-900"> <span className='text-gray-500'>{price}</span>BDT </p>
                <p className="mt-1 text-base font-medium text-gray-900">Size :<span className='text-gray-500'>{size}</span> </p>
                <div className='gap-2 flex mt-2'>
                   <button onClick={() => (handleDelete(_id))}
                    className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Delete</button>
                    <Link to={`/update-product/${_id}`}>
                    <button
                     className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Update</button>
                    </Link>
                </div>
    </div>
  )
}

export default ProductCard
