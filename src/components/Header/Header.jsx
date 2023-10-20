// import { Fragment, useEffect, useState } from 'react'
// import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react'
// import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
// // import Cart from '../../components/Cart/Cart.jsx'
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import Swal from "sweetalert2";

// const navigation = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//           imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Dresses', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Denim', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Significant Other', href: '#' },
//           ],
//         },
//       ],
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//           imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//           imageAlt:
//             'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//         },
//       ],
//       sections: [
//         {
//           id: 'clothing',
//           name: 'Clothing',
//           items: [
//             { name: 'Tops', href: '#' },
//             { name: 'Pants', href: '#' },
//             { name: 'Sweaters', href: '#' },
//             { name: 'T-Shirts', href: '#' },
//             { name: 'Jackets', href: '#' },
//             { name: 'Activewear', href: '#' },
//             { name: 'Browse All', href: '#' },
//           ],
//         },
//         {
//           id: 'accessories',
//           name: 'Accessories',
//           items: [
//             { name: 'Watches', href: '#' },
//             { name: 'Wallets', href: '#' },
//             { name: 'Bags', href: '#' },
//             { name: 'Sunglasses', href: '#' },
//             { name: 'Hats', href: '#' },
//             { name: 'Belts', href: '#' },
//           ],
//         },
//         {
//           id: 'brands',
//           name: 'Brands',
//           items: [
//             { name: 'Re-Arranged', href: '#' },
//             { name: 'Counterfeit', href: '#' },
//             { name: 'Full Nelson', href: '#' },
//             { name: 'My Way', href: '#' },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Stores', href: '/stores' },
//     { name: 'Contact', href: '/contact' },
//   ],
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Header() {
//   const [open, setOpen] = useState(false)
//   const [user, setUser] = useState(null);
//   // const location = useLocation();
  
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (user) {
//             setUser(user);
//         } else {
//             setUser(null);
//         }
//     });

//     return () => unsubscribe();
// }, []);

// const handleLogout = () => {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//         setUser(null);
//         Swal.fire ({
//           title: "Logged Out",
//           text: "You have been logged out successfully",
//           icon: "success",
//           button: "OK",
//         });
//     }).catch((error) => {
//         Swal.fire ({
//           title: "Error",
//           text: error.message,
//           icon: "error",
//           button: "OK",
//         });
//     });
// };


 

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex px-4 pb-2 pt-5">
//                   <button
//                     type="button"
//                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <Tab.Group as="div" className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <Tab.List className="-mb-px flex space-x-8 px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
//                               'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                         <div className="grid grid-cols-2 gap-x-4">
//                           {category.featured.map((item) => (
//                             <div key={item.name} className="group relative text-sm">
//                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                 <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
//                               </div>
//                               <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                 <span className="absolute inset-0 z-10" aria-hidden="true" />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                               {section.name}
//                             </p>
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>

//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   {navigation.pages.map((page) => (
//                     <div key={page.name} className="flow-root">
//                       <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                         {page.name}
//                       </a>
//                     </div>
//                   ))}
//                 </div>

//                     {/* Profile System Here */}
//                     {
//                       user ? (
//                         <Menu as="div" className="relative ml-3">
//                         <div>
//                             <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                 <span className="absolute -inset-1.5" />
//                                 <span className="sr-only">Open user menu</span>
//                                 <img
//                                     className="h-8 w-8 rounded-full"
//                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                     alt=""
//                                 />
//                   </Menu.Button>
//               </div>
//               <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//               >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                           <div className="block px-4 py-2 text-sm text-gray-700">
//                               {user.email}
//                           </div>
//                       </Menu.Item>
//                       <Menu.Item>
//                           <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700">
//                               Logout
//                           </button>
//                       </Menu.Item>
//                   </Menu.Items>
//               </Transition>
//           </Menu>
//                       ) : (
//                         <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   <div className="flow-root">
//                     <a href="/login" className="-m-2 block p-2 font-medium text-gray-900">
//                       Sign in
//                     </a>
//                   </div>
//                   <div className="flow-root">
//                     <a href="/register" className="-m-2 block p-2 font-medium text-gray-900">
//                       Create account
//                     </a>
//                   </div>
//                 </div>
//                       )}

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <a href="#" className="-m-2 flex items-center p-2">
//                     <img
//                       src="https://www.flagcolorcodes.com/data/flag-of-bangladesh.png"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-base font-medium text-gray-900">BD</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>
              
                    
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over 1000BDT
//         </p>

//         <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <a href="/">
//                   <span className="sr-only">Your Company</span>
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
//                     alt=""
//                   />
//                 </a>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? 'border-indigo-600 text-indigo-600'
//                                   : 'border-transparent text-gray-700 hover:text-gray-800',
//                                 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

//                               <div className="relative bg-white">
//                                 <div className="mx-auto max-w-7xl px-8">
//                                   <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div key={item.name} className="group relative text-base sm:text-sm">
//                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-cover object-center"
//                                             />
//                                           </div>
//                                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                             <span className="absolute inset-0 z-10" aria-hidden="true" />
//                                             {item.name}
//                                           </a>
//                                           <p aria-hidden="true" className="mt-1">
//                                             Shop now
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p id={`${section.name}-heading`} className="font-medium text-gray-900">
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li key={item.name} className="flex">
//                                                 <a href={item.href} className="hover:text-gray-800">
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Sign in
//                   </a>
//                   <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
//                   <a href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
//                     Create account
//                   </a>
//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
//                     <img
//                       src="https://www.flagcolorcodes.com/data/flag-of-bangladesh.png"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-sm font-medium">BD</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                   </a>
//                 </div>

//                 {/* Cart */}
//                {/* Cart Icon */}
//       <div className="ml-4 flow-root lg:ml-6">
//         <button onClick={() => setOpen(true)} className="group -m-2 flex items-center p-2">
//           <ShoppingBagIcon
//             className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//             aria-hidden="true"
//           />
//           <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
//           <span className="sr-only">items in cart, view bag</span>
//         </button>
//       </div>

//                     {/* <Cart/> */}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Swal from 'sweetalert2';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Moved the navigation array inside the component
  const navigation = [
    { name: 'Stores', href: '/stores', current: location.pathname === '/stores' },
    { name: 'Return & Refund', href: '/return', current: location.pathname === '/return' },
    { name: 'Terms & Condition', href: '/terms-condition', current: location.pathname === '/terms-condition' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  // console.log(navigation)


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    return () => unsubscribe();
}, []);

const handleLogout = () => {
  Swal.fire({
      title: "Are you sure you want to logout?",
      text: "You will be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "No, Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
  }).then((result) => {
      if (result.isConfirmed) {
          const auth = getAuth();
          signOut(auth).then(() => {
              setUser(null);
              Swal.fire(
                  "Logged Out",
                  "You have been logged out successfully",
                  "success"
              );
          }).catch((error) => {
              Swal.fire({
                  title: "Error",
                  text: error.message,
                  icon: "error",
                  button: "OK",
              });
          });
      }
  });
};


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="VCT Champs"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

               
              {/* Profile dropdown */}
    {user ? (
    <Menu as="div" className="relative ml-3">
        <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    <div className="block px-4 py-2 text-sm text-gray-700">
                        {user.email}
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700">
                        Logout
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
) : (
    // non-logged in users
    <Menu as="div" className="relative ml-3">
        <a href="/login" className="text-sm font-medium leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
    </Menu>
)}

<div className="hidden lg:ml-8 lg:flex">
                {/* Cart */}
                {/* Cart Icon */}
       <div className="ml-4 flow-root lg:ml-6">
         <button  className="group m-2 flex items-center p-2">
          <ShoppingBagIcon
             className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500"
            aria-hidden="true"
          />
           <span className="ml-2 text-sm font-medium text-white group-hover:text-gray-800">0</span>
          <span className="sr-only">items in cart, view bag</span>
         </button>
       </div>

                     {/* <Cart/> */}
              </div>
            </div>

              </div>
            </div>
   

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


