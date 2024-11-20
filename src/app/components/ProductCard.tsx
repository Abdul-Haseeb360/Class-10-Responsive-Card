import Image from "next/image";

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => {
  return (
    <div className="bg-slate-400 shadow-xl rounded-lg flex flex-col">
      <div className="relative h-96 ">
        <Image src={image} alt={title} fill />
      </div>
      <div className="p-4 flex flex-col flex-grow rounded-sm bg-slate-200">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">${price}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-auto">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
