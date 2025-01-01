import Image from "next/image";
import tp1 from "../public/images/tp1.png";
import tp2 from "../public/images/tp2.png";
import tp3 from "../public/images/tp3.png";
import tp4 from "../public/images/tp4.png";
import brc from "../public/images/brc.png";
import tcg from "../public/images/tcg.png";
import dbs from "../public/images/dbs.png";
import esc1 from "../public/images/esc1.png";
import esc2 from "../public/images/esc2.png";
import esc3 from "../public/images/esc3.png";

const Trending = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "YU023",
      price: "$320",
      image: tp1,
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "YU024",
      price: "$350",
      image: tp2,
      isNew: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "YU025",
      price: "$300",
      image: tp3,
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "YU026",
      price: "$340",
      image: tp4,
    },
  ];
  const ExecutiveChair = [
    { id: 1, name: "Executive Seat Chair", price: "$32", image: esc1,},
    { id: 2, name: "Executive Seat Chair", price: "$32", image: esc2,},
    { id: 3, name: "Executive Seat Chair", price: "$32", image: esc3,},
    ];

  return(
    <div className="bg-gray-50 py-10 px-4">
      {/* Trending Products Section */}
      <h2 className="text-2xl font-bold text-center mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain w-full h-40"
              />
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  New
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">Code: {product.code}</p>
              <p className="text-xl font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discounts Section */}
      <section className="my-10">
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-pink-50">
            <h3 className="text-xl font-semibold mt-2 mb-2">23% off in all products</h3>
            <p className="text-blue-500 cursor-pointer">Shop Now</p>
            <Image src= {brc} alt="Discount Item 1" width={150} height={150} className="object-contain w-full h-fit" />
          </div>
          <div className="p-4 bg-indigo-50">
            <h3 className="text-xl font-semibold mb-2">23% off in all products</h3>
            <p className="text-blue-500 cursor-pointer">View Collection</p>
            <Image src= {tcg} alt="Discount Item 2" width={150} height={150}  className="object-contain w-full h-full" />
          </div>
          <div className="grid grid-rows-3 gap-6 ">
            {/* <div>
              <Image src={esc1} alt="Executive Seat Chair" width={150} height={150} className="object-contain w-full h-40" />
            </div> */}
            {ExecutiveChair.map((chair) => (
              <div
              key={chair.id}
              className="bg-white shadow-md rounded-lg  h-28 w-auto transition-transform transform hover:scale-105 grid grid-flow-col-dense"
            >
              <div className="p-4 grid grid-cols-1 shadow-md w-fit h-28 ">
              <Image
                src={chair.image}
                alt={chair.name}
                width={300}
                height={300}
                className="object-contain w-fit h-24 "
              />
              </div>
                <div className="p-4 text-left ml-0 grid  ">
                  <div className=" grid grid-rows-1 text-left">
                  <span className=" text-sm font-semibold text-indigo-950">
                  {chair.name}
                </span>
                </div>
                <div className="text-center grid grid-rows-2">
                <p className="text-sm font-bold text-indigo-950">{chair.price}</p></div>
                </div>
            </div>
          ))}

          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-2xl text-violet-950 font-bold text-center ">Discount Item</h2>
        <p className=" text-sm text-gray-500 text-center mb-8">
            <span className="hover:text-pink-600 hover:underline mr-3">Wood Chair </span>
            <span className="hover:text-pink-600 hover:underline mr-3">Plastic Chair </span> 
            <span className="hover:text-pink-600 hover:underline">Sofa Collection</span>
          </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
      {/* Text and Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
        20% Discount Of All Products
        </h2>
        <span className="text-2xl text-pink-600">Eams Sofa Compact</span>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <p className="text-gray-600">
              <span className="mr-7">Material expose like metals</span>
              <span className="ml-7">Clear lines and geomatric figures</span>
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <p className="text-gray-600">
              <span className="mr-12">Simple neutral colours.</span>
              <span className="ml-10">Material expose like metals</span>
            </p>
          </li>
        </ul>

        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md shadow hover:bg-pink-600">
            Shop Now
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative h-72 lg:h-full mt-6 ">
        <Image
          src= {dbs} 
          alt="Discount Chair"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    </div>
  </section>

      
    </div>
  );
};

export default Trending;
