export default function ProductCard({ detail }) {
  console.log(detail);
  return (
    <li className="item_wrap food">
      <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
        <img
          src="img/burger-1.png"
          alt="food image"
          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
        />
      </div>

      <div className="pt-5">
        <div className="mb-2">
          <h4 className="card__title">{detail.name}</h4>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <p className="text-secondaryColor">$42.00</p>
      </div>
      <button className="btn btn-primary">Add to cart</button>
    </li>
  );
}
