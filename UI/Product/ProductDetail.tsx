"use client";

import { GetProductById } from "@/Apis/Product";
import { useState } from "react";

interface DetailType {
  id: string;
}

const ProductDetailUi = ({ id }: DetailType) => {
  const [product, setProduct] = useState<any>(null);
  const GetData = async () => {
    const response = await GetProductById(id);
    setProduct(response);
  };
  console.log(product);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Tên Sản Phẩm</h1>
        <p className="text-gray-600 mt-2">Chi tiết sản phẩm: Tên Sản Phẩm</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Hình ảnh */}
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-2 mb-4">
            <img
              className="w-full h-auto cursor-pointer border rounded"
              src="/path-to-image.jpg"
              alt="Ảnh nhỏ 1"
            />
            <img
              className="w-full h-auto cursor-pointer border rounded"
              src="/path-to-image.jpg"
              alt="Ảnh nhỏ 2"
            />
            <img
              className="w-full h-auto cursor-pointer border rounded"
              src="/path-to-image.jpg"
              alt="Ảnh nhỏ 3"
            />
            <img
              className="w-full h-auto cursor-pointer border rounded"
              src="/path-to-image.jpg"
              alt="Ảnh nhỏ 4"
            />
            <img
              className="w-full h-auto cursor-pointer border rounded"
              src="/path-to-image.jpg"
              alt="Ảnh nhỏ 5"
            />
          </div>
          <div className="border rounded overflow-hidden">
            <img
              className="w-full"
              src="/path-to-main-image.jpg"
              alt="Ảnh chính sản phẩm"
            />
          </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-left">Tên Sản Phẩm</h2>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {/* 5 sao */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="..." />
              </svg>
            </div>
            <span className="text-sm text-gray-600">(5 đánh giá)</span>
          </div>

          <div className="text-2xl font-bold text-red-500">200.000 đ</div>

          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Lon
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Lốc
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Thùng
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100">
              -
            </button>
            <input
              className="w-16 border rounded text-center"
              type="text"
              value="1"
              readOnly
            />
            <button className="w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100">
              +
            </button>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded">
            Thêm vào giỏ hàng
          </button>

          <div className="pt-4">
            <h3 className="font-semibold">Đặc điểm nổi bật</h3>
            <p className="text-gray-700">Sản phẩm tuyệt vời cho sức khỏe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailUi;
