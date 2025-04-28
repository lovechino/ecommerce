"use client";

import dynamic from "next/dynamic";
import { FiLoader } from "react-icons/fi";

const ListProductHome = dynamic(
  () => import("@/components/Product/ListProductHome"),
  {
    loading: () => {
      return <FiLoader className="animate-spin text-blue-500 text-2xl" />;
    },
  }
);

const ProductPage = () => {
  return (
    <div className=" px-4 py-8 flex flex-row gap-8">
      <div className="w-64 p-4 bg-white rounded-lg shadow-md space-y-6">
        {/* Product Size */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-2">PRODUCT SIZE</h2>
          <div className="space-y-2">
            {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <div key={size} className="flex items-center gap-2">
                <input type="checkbox" id={size} className="accent-gray-600" />
                <label htmlFor={size} className="text-gray-600">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Product Rate */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-2">PRODUCT RATE</h2>
          <div className="space-y-2">
            {[{ rate: 4.5 }, { rate: 4 }, { rate: 3 }].map(({ rate }) => (
              <div
                key={rate}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < Math.floor(rate) ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">{rate}+</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Price */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-2">PRODUCT PRICE</h2>
          <div className="flex gap-2">
            {["$", "$$", "$$$"].map((price, idx) => (
              <button
                key={idx}
                className="px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-200 text-gray-600 text-sm"
              >
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ListProductHome />
      </div>
    </div>
  );
};
export default ProductPage;
