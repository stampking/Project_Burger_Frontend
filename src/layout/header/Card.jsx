export default function Card({ name, image, price }) {
  return (
    <div className=" bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
      <div className=" basis-1/3 relative">
        <img
          src="/img/burger-1.png"
          alt=""
          className=" absolute w-28 -bottom-4 -left-4"
        />
      </div>
      <div>
        <div className="mb-2">
          <h4 className="card__title">Food</h4>
          <p className="text-xs">Lorem ipsum dolor sit.</p>
        </div>
        <a href="#" className="text-blackColor cursor-pointer">
          Buy Now
        </a>
      </div>
    </div>
  );
}
