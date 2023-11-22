export default function PromoSection() {
  return (
    <section>
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        <div className=" bg-secondaryColor flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <img
            src="/img/promo-1.png"
            alt="promo image"
            className=" w-40 mx-auto hover:animate-movingY md:mx-5"
          />
          <div className=" space-y-2 pt-5 md:pt-0">
            <p className=" text-xs text-secondaryColor">Payday promo</p>
            <h3 className="card_title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className=" paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              illo.
            </p>
            <a href="#" className=" text-xs  text-blackColor">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
