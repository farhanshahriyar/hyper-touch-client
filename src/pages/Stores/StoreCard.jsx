import { Link } from "react-router-dom";

const StoreCard = ({ product }) => {
  const { _id,
    name, highlights, supplier, price, size, category,
    img4
  } = product;

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
    </div>
  )
}

export default StoreCard
