import { useState } from "react";

const ProductPage = ({ onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleColorChange = (color) => setSelectedColor(color);
  const handleQuantityChange = (change) =>
    setQuantity((prev) => Math.max(1, prev + change));
  const handleSizeChange = (size) => setSelectedSize(size);

  const handleAddToCart = () => {
    const product = {
      color: selectedColor,
      quantity,
      size: selectedSize,
    };
    onAddToCart(product);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* Left Side */}
        <div className="left-side">
          <img
            src={`/assets/product-${selectedColor}.jpg`}
            alt="Product"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side */}
        <div className="right-side">
          <h1 className="text-[40px] font-bold text-[#364A63] leading-10">Classy Modern Smart watch</h1>
          <div className="star flex items-center gap-x-1 mt-[20px] mb-[20px]">
            <img src="./assets/star-fill.svg" alt="" />
            <img src="./assets/star-fill.svg" alt="" />
            <img src="./assets/star-fill.svg" alt="" />
            <img src="./assets/star-half-fill.svg" alt="" />
            <img src="./assets/star.svg" alt="" />
          </div>
          <p className="text-[#8091A7] text-[18px] leading-8 mb-[20px]">I must explain to you how all this mistaken idea of denoun cing ple praising pain
            was born and I will give you a complete account of the system, and expound the actual teaching.</p>
          <div className="flex items-center gap-x-11 mb-[20px]">
            <div>
              <p className="text-[14px] font-normal leading-6 text-[#8091A7]">Type</p>
              <h6 className="text-[16px] font-bold leading-6 text-[#364A63]">Watch</h6>
            </div>
            <div>
              <p className="text-[14px] font-normal leading-6 text-[#8091A7]">Model Number</p>
              <h6 className="text-[16px] font-bold leading-6 text-[#364A63]">Forerunner 290XT</h6>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[18px] font-bold leading-5 text-[#364A63] mb-[20px]">Band Color</p>
            <div className="flex gap-2">
              {["red", "blue", "green"].map((color) => (
                <button
                  key={color}
                  className={`color-btn bg-${color}-500 w-8 h-8 rounded-full border ${selectedColor === color ? "ring-2 ring-black" : ""
                    }`}
                  onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[18px] font-bold leading-5 text-[#364A63] mb-[20px]">Wrist Size</p>
            <div className="flex gap-2">
              <button className="active-btn-b px-[18px] py-[8px] border border-[#DBDFEA] text-[#8091A7] rounded-[4px] text-[12px] font-normal group hover:border-[#6576FF]">
                <span className="font-bold text-[#364A63] group-hover:text-[#6576FF] active-btn">S</span>
                $69
              </button>
              <button className="px-[18px] py-[8px] border border-[#DBDFEA] text-[#8091A7] rounded-[4px] text-[12px] font-normal group hover:border-[#6576FF]">
                <span className="font-bold text-[#364A63] group-hover:text-[#6576FF]">M</span>
                $79
              </button>
              <button className="px-[18px] py-[8px] border border-[#DBDFEA] text-[#8091A7] rounded-[4px] text-[12px] font-normal group hover:border-[#6576FF]">
                <span className="font-bold text-[#364A63] group-hover:text-[#6576FF]">L</span>
                $89
              </button>
              <button className="px-[18px] py-[8px] border border-[#DBDFEA] text-[#8091A7] rounded-[4px] text-[12px] font-normal group hover:border-[#6576FF]">
                <span className="font-bold text-[#364A63] group-hover:text-[#6576FF]">XL</span>
                $99
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-4">
            <div className="flex items-center border border-[#DBDFEA]">
              <button
                className="border-r border-r-[#DBDFEA] w-[30px] py-[5px]"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                className="border-l border-l-[#DBDFEA] w-[30px] py-[5px]"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-[#6576FF] text-white text-[13px] font-bold leading-5 px-[18px] py-[8px] rounded"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <div>
              <button>
              <img src="./assets/star-fill.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
