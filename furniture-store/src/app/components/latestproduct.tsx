
import Image from "next/image";
import brown from "../public/images/brown.png";
import yellow from "../public/images/yellow.png";
import white from "../public/images/white.png";
import bbbwt from "../public/images/bbbwt.png";
import bbblack from "../public/images/bbblack.png";
import bbbw from "../public/images/bbbw.png";


const Latestproduct = () => {


  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl text-violet-950 font-bold text-center mb-8">Latest Products</h2>

        {/* Categories */}
        <div className="flex justify-center space-x-4 sm:space-x-2 mb-6">
          <button className="text-gray-600 font-semibold hover:text-purple-600 hover:underline">
            New Arrival
          </button>
          <button className="text-gray-600 font-semibold hover:text-purple-600 hover:underline">
            Best Seller
          </button>
          <button className="text-gray-600 font-semibold hover:text-purple-600 hover:underline">Featured</button>
          <button className="text-gray-600 font-semibold hover:text-purple-600 hover:underline">
            Special Offer
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
          {/* Box 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
          
              <Image src= {brown} width={150} height={100} alt="product-1" className="  transition-transform transform hover:scale-105 "/>
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image src={yellow} width={150} height={100} alt="product-2" className=" transition-transform transform hover:scale-105 "/>
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image src={white} width={150} height={100} alt="product-3" className=" transition-transform transform hover:scale-105 "/>
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image src={bbbwt} width={150} height={100} alt="product-4" className=" transition-transform transform hover:scale-105 "/>
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>

          {/* Box 5 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image src= {bbblack} width={150} height={100} alt="product-5" className=" transition-transform transform hover:scale-105  " />
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>

          {/* Box 6 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image src={bbbw} width={150} height={100} alt="product-6" className=" transition-transform transform hover:scale-105 "/>
            </div>
            <div className="text-center mt-4">
              <p>Comfort Handy Craft</p>
              <div className="flex justify-center items-center space-x-2">
                <span>$42.00</span>
                <span className='text-[#FB2448] line-through'>$65.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Latestproduct;
