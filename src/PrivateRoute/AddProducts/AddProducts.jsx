import Swal from "sweetalert2";


const AddProducts = () => {
  const handleProductAdd = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const highlights = form.highlights.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const size = form.size.value;
    const category = form.category.value;
    const details = form.details.value;
    const color = form.color.value;
    const img1 = form.img1.value;
    const img2 = form.img2.value;
    const img3 = form.img3.value;
    const img4 = form.img4.value;

    const newProduct = {
      name,
      highlights,
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
    }

    // console.log(newProduct) // checking if the data is being captured or not // working fine

    // send data to server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      // })
      // // .catch(err => console.log(err))
      .then(data => {
        console.log(data)
        if(data.insertedId){
            // alert('Coffee added successfully')
            Swal.fire({
              title: 'Success!',
              text: 'Product added successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
        } else {
            // alert('Something went wrong')
            Swal.fire({
              title: 'Error!',
              text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Back'
            })
        }
    })
    // clear the form
    form.reset()
  }
  

  return (
    <div>
        <div className="bg-[#F4F3F0] p-24">
          <h1 className=" text-xl font-extrabold">Add Product</h1>
          <form onSubmit={handleProductAdd}>
            {/* row 1 - name and quantity */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                <div className="mt-2">
                  <input type="text" name="name" id="first-name" autoComplete="given-name" placeholder="enter product name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Highlights</label>
                <div className="mt-2">
                  <input type="text" name="highlights" id="first-name" autoComplete="given-name" placeholder="Quantity"
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
                  <input type="text" name="supplier" id="first-name" autoComplete="given-name" placeholder="supplier name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div className="mt-2">
                  <input type="text" name="price" id="first-name" autoComplete="given-name" placeholder="price range"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
            {/* row 3 - category and details */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-category" className="block text-sm font-medium leading-6 text-gray-900">Size</label>
                <div className="mt-2">
                  <input type="text" name="size" id="first-name" autoComplete="given-name"
                    placeholder="enter coffee category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-name" className="block text-sm font-medium leading-6 text-gray-900">Details</label>
                <div className="mt-2">
                  <input type="text" name="details" id="first-name" autoComplete="given-name" placeholder="details of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              {/* row category and color */}
              <div name="category" className="mb-4">
              <label className="block text-sm font-bold mb-2">Category</label>
              <select className="block w-full bg-white text-gray-700 border rounded py-2 px-4 focus:border-blue-500 focus:outline-none" name="category">
                  <option className="active">Men</option>
                  <option>Women</option>
                  <option>Kids</option>
              </select>
          </div>
          <div name="color" className="mb-4">
              <label className="block text-sm font-bold mb-2">Color</label>
              <div className="mt-2">
                  <input type="text" name="color" id="first-name" autoComplete="given-name" placeholder="color of clothes"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
          </div>


            </div>
              {/* row 2 - photos */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="coffee-supplier" className="block text-sm font-medium leading-6 text-gray-900">product img 1</label>
                <div className="mt-2">
                  <input type="text" name="img1" id="first-name" autoComplete="given-name" placeholder="supplier name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 2</label>
                <div className="mt-2">
                  <input type="text" name="img2" id="first-name" autoComplete="given-name" placeholder="taste of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 3</label>
                <div className="mt-2">
                  <input type="text" name="img3" id="first-name" autoComplete="given-name" placeholder="taste of coffee"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="coffee-taste" className="block text-sm font-medium leading-6 text-gray-900">product img 4</label>
                <div className="mt-2">
                  <input type="text" name="img4" id="first-name" autoComplete="given-name" placeholder="taste of coffee"
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

export default AddProducts
