// const features = [
//     { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//     { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//     { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//     { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//     { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//     { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
//   ]
  
//   export default function Section5() {
//     return (
//       <div className="bg-white">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//           <div>
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
//             <p className="mt-4 text-gray-500">
//               The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
//               steel divider separates active cards from new ones, or can be used to archive important task lists.
//             </p>
  
//             <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//               {features.map((feature) => (
//                 <div key={feature.name} className="border-t border-gray-200 pt-4">
//                   <dt className="font-medium text-gray-900">{feature.name}</dt>
//                   <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//           <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//             <img
//               src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//               alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
//               className="rounded-lg bg-gray-100"
//             />
//             <img
//               src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
//               alt="Top down view of walnut card tray with embedded magnets and card groove."
//               className="rounded-lg bg-gray-100"
//             />
//             <img
//               src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
//               alt="Side of walnut card tray with card groove and recessed card area."
//               className="rounded-lg bg-gray-100"
//             />
//             <img
//               src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
//               alt="Walnut card tray filled with cards and card angled in dedicated groove."
//               className="rounded-lg bg-gray-100"
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }

const features = [
  { name: 'Origin', description: 'Crafted by Elite Fashion House, Paris.' },
  { name: 'Material', description: '100% premium genuine leather with durable stitching.' },
  { name: 'Dimensions', description: 'Medium size: Shoulder 18", Chest 42", Length 26"' },
  { name: 'Finish', description: 'Smooth matte finish with a soft inner lining.' },
  { name: 'Includes', description: 'Internal pockets and branded zipper pulls.' },
  { name: 'Considerations', description: 'Natural leather may show minor color variations or marks.' },
]

export default function Section5() {
  return (
      <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Our Shop?</h2>
                  <p className="mt-4 text-gray-500">
                      The Elite Leather Jacket is the epitome of luxury and craftsmanship. A staple for every wardrobe, 
                      it’s meticulously crafted to ensure every detail showcases its superior quality.
                  </p>

                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                      {features.map((feature) => (
                          <div key={feature.name} className="border-t border-gray-200 pt-4">
                              <dt className="font-medium text-gray-900">{feature.name}</dt>
                              <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                          </div>
                      ))}
                  </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                  <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
                      alt="Front view of the leather jacket."
                      className="rounded-lg bg-gray-100"
                  />
                  <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
                      alt="Close-up of the jacket's leather texture."
                      className="rounded-lg bg-gray-100"
                  />
                  <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
                      alt="Interior view showcasing the soft lining."
                      className="rounded-lg bg-gray-100"
                  />
                  <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Side view of the jacket, highlighting its design."
                      className="rounded-lg bg-gray-100"
                  />
              </div>
          </div>
      </div>
  )
}

  