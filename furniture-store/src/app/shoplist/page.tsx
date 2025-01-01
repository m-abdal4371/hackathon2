import Image from 'next/image';
import imageS1 from '../public/images/s1.png';
import imageS2 from '../public/images/s2.png';
import imageS3 from '../public/images/s3.png';
import imageS4 from '../public/images/s4.png';
import imageS5 from '../public/images/s5.png';
import imageS6 from '../public/images/s6.png';
import imageS7 from '../public/images/s7.png';
import imageS8 from '../public/images/s8.png';
import imageS9 from '../public/images/s9.png';
import imageS10 from '../public/images/s10.png';
import imageS11 from '../public/images/s11.png';
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vel elit euismod",
      code: "YU023",
      price: "$26:00",
      image: imageS1, 
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      code: "YU024",
      price: "$26:00",
      image: imageS2,
      isNew: true,
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      code: "YU025",
      price: "$26.00",
      image: imageS3,
    },
    {
      id: 4,
      name: "Sed at fermentum",
      code: "YU026",
      price: "$26.00",
      image: imageS4,
    },

    {
        id: 5,
        name: "Fusce pellentesque at",
        code: "YU023",
        price: "$26.00",
        image: imageS5, 
      },
      {
        id: 6,
        name: "Vestibulum magna laoreet",
        code: "YU024",
        price: "$26.00",
        image: imageS6,
        isNew: true,
      },
      {
        id: 7,
        name: "Sollicitudin amet orci",
        code: "YU025",
        price: "$26.00",
        image: imageS7,
      },
      {
        id: 8,
        name: "Ultrices mauris sit",
        code: "YU026",
        price: "$26.00",
        image: imageS8,
      },

      
    {
        id: 9,
        name: "Pellentesque condimentum ac",
        code: "YU023",
        price: "$26.00",
        image: imageS9, 
      },
      {
        id: 10,
        name: "Cras scelerisque velit",
        code: "YU024",
        price: "$26.00",
        image: imageS10,
        isNew: true,
      },
      {
        id: 11,
        name: "Lectus vulputate faucibus",
        code: "YU025",
        price: "$26.00",
        image: imageS11,
      },
      {
        id: 12,
        name: "Purus risus, ut",
        code: "YU026",
        price: "$26.00",
        image: imageS4,
      },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl h-28 mx-auto text-center mb-8 bg-violet-50">
          <h1 className="text-3xl  font-bold text-gray-800">Shop List</h1>
          <p className=" text-sm text-gray-500 mt-3">
            Home &gt; Pages &gt; <span className="text-purple-600">Shop List</span>
          </p>
        </div>
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
                  new
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <div className=" flex justify-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          </div>
          {/* <p className="text-sm text-gray-500">Code: {product.code}</p> */}
          <p className="text-xl font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
