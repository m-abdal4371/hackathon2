// components/ProductGrid.js
import Image from 'next/image';
import chair1 from '../public/images/chair1.png';
import chair2 from '../public/images/chair2.png';
import chair3 from '../public/images/chair3.png';
import chair4 from '../public/images/chair4.png';

const ProductGrid1 = () => {
  const products = [
    { id: 1, name: 'Cantilever chair', price: '$42.00', image: chair1 },
    { id: 2, name: 'Cantilever chair', price: '$42.00', image: chair2 },
    { id: 3, name: 'Cantilever chair', price: '$42.00', image: chair3 },
    { id: 4, name: 'Cantilever chair', price: '$42.00', image: chair4 },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap justify-center -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/3 md:w-1/2 p-4 w-full"> 
              <div className="block relative h-48 rounded overflow-hidden cursor-pointer hover:bg-violet-800 hover:shadow-lg transition">
                <Image
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33.33vw" 
                />
              </div>
              
              <div className="mt-4 text-center hover:bg-violet-800">
                <h3 className="text-gray-500 hover:bg-violet-800 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 hover:bg-violet-800 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="hover:bg-violet-800 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid1;