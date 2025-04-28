"use client";

import { setUser } from "@/Redux/auth";
import axiosInstance from "@/Utils/Axios";
import { LoginType } from "@/Utils/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const LoginApi = async ({ username, password }: LoginType) => {
  try {
    const res = await axiosInstance.post(
      `/MobileLogin/LoginEcommer?userName=${username}&password=${password}`
    );
    return res.data;
  } catch (error) {
    console.error("Login API Error:", error);
    return { Error: true, Message: "Login failed due to network error." };
  }
};
