import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Swal from 'sweetalert2'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Return() {
  const [agreed, setAgreed] = useState(false)

  const handleRefund = (e) => {
    e.preventDefault()
    const form = e.target;

    const productname = form.productname.value;
    const productsize = form.productsize.value;
    const email = form.email.value;
    const producturl = form.producturl.value;
    const country = form.country.value;
    const phonenumber = form.phonenumber.value;
    const message = form.message.value;

    const newRefund = {
      productname,
      productsize,
      email,
      producturl,
      country,
      phonenumber,
      message
    }

    // console.log(newContact) // checking if the data is being captured or not // working fine

    fetch('https://hypertouch-server.vercel.app/refund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRefund)
    })
      .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      // })
      // // .catch(err => console.log(err))
      .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Refund Message Post successfully',
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
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
      
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Return & Refund</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you want to return your product, you can return it within 7 days of delivery. You can return your product by contacting us. We will refund your money within 7 days.
        </p>
      </div>
      <form onSubmit={handleRefund} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Product Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="productname"
                id="first-name"
                autoComplete="given-name"
                placeholder='Product Name'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Product Size
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="productsize"
                id="last-name"
                autoComplete="family-name"
                placeholder='S, M, L, XL, XXL, XXXL'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder='@email.com'
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Product URL / Link
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="producturl"
                id="text"
                placeholder='enter product link'
                autoComplete="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>BD</option>
                  <option>ID</option>
                  <option>US</option>
                </select>
                {/* <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
              </div>
              <input
                type="tel"
                name="phonenumber"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                placeholder='Write why you want to refund or return message here...'
              />
            </div>
          </div>
         
        </div>
        <div className='mt-2'> 
        <a href="https://www.youtube.com/watch?v=HjpoJEY0bHs" target='_blank' className="font-semibold text-indigo-600">
                Tutorial on how to return or refund?
              </a>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

