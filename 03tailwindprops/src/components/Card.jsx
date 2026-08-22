function Card({ img, category }) {
  return (
    <div className=" bg-neutral-800 flex p-4 rounded-xl justify-start align-middle gap-10 transition-all duration-300 hover:translate-x-2">
      <div className="w-40 ">
        <img className="w-fit rounded-2xl" src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center align-middle gap-3 ">
        <h1 className="flex text-4xl text-neutral-100 font-bold">
          A card for photos
        </h1>
        <p className="text-rose-900 flex">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, odit!
        </p>
        <p className="text-zinc-600 flex">Category : {category}</p>
      </div>
    </div>
  );
}

export default Card;
