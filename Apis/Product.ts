"use client"
import { setListProduct } from "@/Redux/product";
import axiosInstance from "@/Utils/Axios"
// import { ProductType } from "@/Utils/type";
import { useEffect} from "react";
import { useDispatch } from "react-redux";


export const GetAllProduct = () => {
    
    const dispatch = useDispatch()
    useEffect(()=>{
      const fetchData = async () => {
        const response = await axiosInstance.post("/Product/GetListProductByGroup",{},{
         headers: {
           "Content-Type": "application/json",
         },
        })
         dispatch(setListProduct(response.data))
      } 
      fetchData()
    },[])
   
}

