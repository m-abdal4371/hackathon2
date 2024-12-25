import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/kursi1.png", 
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/kursi2.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/kursi3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/kursi4.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-violet-950 hover:bg-violet-800 hover:text-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <div className=" bg-white hover:bg-white relative max-w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain w-full h-40 hover:bg-white"
              />
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  New
                </div>
              )}
            </div>
            <div className="mt-4 text-center hover:text-white">
            <h3 className="text-lg font-semibold text-pink-500 ">{product.name}</h3>
            <div className=" flex justify-center space-x-0.5 border-hidden">
            <span className="w-3 h-1 rounded-full bg-green-500"></span>
            <span className="w-3 h-1 rounded-full bg-pink-500"></span>
            <span className="w-3 h-1 rounded-full bg-blue-500"></span>
          </div>
            <p className="text-sm">Code: {product.code}</p>
              <p className="text-xl font-bold">{product.price}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
