"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { addItem, clearCart } from "@/Redux/cart";
import { CartIntemType } from "@/Utils/type";
import Link from "next/link";

interface CardProps {
  id: number | any;
  productname: string;
  Price: number | any;
  pathimg: string;
  productCode: string;
}
const baseURL = "https://backend.smartwork.3i.com.vn"; // Đảm bảo URL này chính xác

const CardProduct: React.FC<CardProps> = ({
  id,
  productname,
  Price,
  pathimg,
  productCode,
}) => {
  const fullPath = `${baseURL}${pathimg}`;
  const dispatch = useAppDispatch();
  const buyProduct = (item: CartIntemType) => {
    dispatch(
      addItem({
        id: item.id,
        productname: item.productname,
        Price: item.Price,
        pathimg: fullPath,
        qualitiy: item.qualitiy,
      })
    );
    // dispatch(clearCart());
  };

  return (
    <div className="relative flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-full h-[400px] group overflow-hidden">
      <Link href={`/Product/${productCode}`}>
        <div className="w-full h-[250px] flex items-center justify-center overflow-hidden">
          <Image
            src={fullPath}
            alt={productname}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
          />
        </div>
      </Link>
      <span className="mt-4 text-center font-medium text-gray-700 line-clamp-1">
        {productname}
      </span>
      <span className="font-bold text-lg text-center text-red-500 mt-2">
        {Price} VNĐ
      </span>
      <div className="absolute top-2 right-2">
        <button>
          <AiOutlineShoppingCart className="text-xl text-gray-700" />
        </button>
      </div>
      <div
        onClick={() =>
          buyProduct({ id, productname, Price, pathimg: fullPath, qualitiy: 1 })
        }
        className="bottom-0 bg-blue-500 text-white w-full text-center py-2 rounded-b-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer absolute group-hover:translate-y-0 translate-y-full"
      >
        Mua Ngay
      </div>
    </div>
  );
};

export default CardProduct;
