import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";


const UpdateProducts = () => {
  const product = useLoaderData();

  const { _id,
    name, highlights, supplier, price, size, category, details, color,img1,img2,img3,
    img4
  } = product;


  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: e.target.name.value,
      highlights: e.target.highlights.value,
      supplier: e.target.supplier.value,
      price: e.target.price.value,
      size: e.target.size.value,
      category: e.target.category.value,
      details: e.target.details.value,
      color: e.target.color.value,
      img1: e.target.img1.value,
      img2: e.target.img2.value,
      img3: e.target.img3.value,
      img4: e.target.img4.value,
    }

     fetch(`http://localhost:5000/products/${_id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
  })
    .then (res => res.json())
    .then (data => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Product has been updated',
          confirmButtonText: 'Done'
        })
      }
    })
  }
  

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
          {/* back route */}
          <div className="flex items-center gap-x-2 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 cursor-pointer" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" onClick={() => window.history.back()}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <p className="text-gray-500 cursor-pointer" onClick={() => window.history.back()}>Back</p>
          </div>
          <h1 className=" text-xl font-extrabold">Update Product</h1>
          {/* form */}
          <form onSubmit={handleUpdateProduct} >
            {/* row 1 - name and quantity */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                <div className="mt-2">
                  <input type="text" name="name" defaultValue={name} id="first-name" autoComplete="given-name" placeholder="enter product name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Highlights</label>
                <div className="mt-2">
                  <input type="text" name="highlights" defaultValue={highlights} id="first-name" autoComplete="given-name" placeholder="Quantity"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            {/* row 2 - supplier and taste */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-supplier" className="block text-sm font-medium leading-6 text-gray-900">Supplier
                  Name</label>
                <div className="mt-2">
                  <input type="text" name="supplier" defaultValue={supplier} id="first-name" autoComplete="given-name" placeholder="supplier name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div className="mt-2">
                  <input type="text" name="price" defaultValue={price} id="first-name" autoComplete="given-name" placeholder="price range"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            {/* row 3 - category and details */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-category" className="block text-sm font-medium leading-6 text-gray-900">Size</label>
                <div className="mt-2">
                  <input type="text" name="size" defaultValue={size} id="first-name" autoComplete="given-name"
                    placeholder="enter coffee category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Details</label>
                <div className="mt-2">
                  <input type="text" name="details" defaultValue={details} id="first-name" autoComplete="given-name" placeholder="details of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* row category and color */}
              <div name="category" className="mb-4">
              <label className="block text-sm font-bold mb-2">Category</label>
              <select className="block w-full bg-white text-gray-700 border rounded py-2 px-4 focus:border-blue-500 focus:outline-none" name="category" defaultValue={category}>
                  <option className="active">Men</option>
                  <option>Women</option>
                  <option>Kids</option>
              </select>
          </div>
          <div name="color" className="mb-4">
              <label className="block text-sm font-bold mb-2">Color</label>
              <div className="mt-2">
                  <input type="text" name="color" defaultValue={color} id="first-name" autoComplete="given-name" placeholder="color of clothes"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
          </div>


            </div>
              {/* row 2 - photos */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-supplier" className="block text-sm font-medium leading-6 text-gray-900">product img 1</label>
                <div className="mt-2">
                  <input type="text" name="img1" id="first-name" defaultValue={img1} autoComplete="given-name" placeholder="supplier name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 2</label>
                <div className="mt-2">
                  <input type="text" name="img2" defaultValue={img2} id="first-name" autoComplete="given-name" placeholder="taste of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 3</label>
                <div className="mt-2">
                  <input type="text" name="img3" defaultValue={img3} id="first-name" autoComplete="given-name" placeholder="taste of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 4</label>
                <div className="mt-2">
                  <input type="text" name="img4" defaultValue={img4} id="first-name" autoComplete="given-name" placeholder="taste of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              <button type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                Product</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default UpdateProducts
