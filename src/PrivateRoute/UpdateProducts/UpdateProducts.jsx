import { useLoaderData } from "react-router-dom"


const UpdateProducts = () => {
  const product = useLoaderData();

  const { _id,
    name, highlights, supplier, price, size, category, details, color,img1,img2,img3,
    img4
  } = product;
  

  return (
    <div>
        Update Product Page
    </div>
  )
}

export default UpdateProducts
