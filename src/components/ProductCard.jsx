import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductCard({
  productId,
  image,
  name,
  quantity,
  add,
  minus,
  price,
}) {
  const product = {
    productId,
    image,
    name,
    quantity,
    add,
    minus,
    price,
  };

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/cart/${productId}`);
  };
  // console.log(detail);
  return (
    // <li className="item_wrap food">
    //   <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
    //     <img
    //       src={image}
    //       alt="food image"
    //       className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
    //     />
    //   </div>

    //   <div className="pt-5">
    //     <div className="mb-2">
    //       {/* <h4 className="card__title">{detail.name}</h4> */}
    //       <p className="paragraph">{name}</p>
    //     </div>

    //     <p className="text-secondaryColor text-white">{price}</p>
    //   </div>
    //   <button className="btn btn-primary">Add to cart</button>
    // </li>
    <div className="card card-side bg-base-100 shadow-xl mb-6 w-96 ">
      <figure className="w-36 ">
        <img src={image} alt="burger" />
      </figure>
      <div className="card-body justify-between items-center  ">
        <h2 className="card-title">{name}</h2>
        <div>
          <p className="peice">{price}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="flex gap-4 px-4  justify-between items-center">
            {/* <button
              className="btn btn-warning btn-xs hover:bg-yellow-200"
              onClick={() => add(productId)}
            >
              +
            </button>
            <button className="btn btn-warning text-white">{quantity}</button>
            <button
              className="btn btn-warning btn-xs hover:bg-yellow-200"
              onClick={() => minus(productId)}
            >
              -
            </button> */}

            <button className="btn btn-primary" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
