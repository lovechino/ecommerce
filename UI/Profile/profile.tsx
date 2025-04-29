"use client";
import { useAppSelector } from "@/Redux/hook";
import { Spin } from "antd";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const UpdateProfileModal = dynamic(
  () => import("@/components/Profile/UpdateModal"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-32">
        <Spin indicator={<AiOutlineLoading style={{ fontSize: 24 }} />} />
      </div>
    ),
    ssr: false,
  }
);
const ProfileUI = () => {
  const user: any = useAppSelector((state) => state.user.user);
  if (!user) {
    redirect("/");
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Thông tin tài khoản</h2>
      <div className="grid grid-cols-2 gap-y-4 text-gray-800">
        <span>Họ và tên</span>
        <span>{user?.FullName}</span>

        <span>Số điện thoại</span>
        <span>{user?.Phone}</span>

        <span>Địa chỉ</span>
        <span>{user?.Address}</span>

        <span>Giới tính</span>
        <span>{user?.Gender}</span>

        <span>Ngày sinh</span>
        <span>{user?.sBirthDay}</span>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="rounded-full px-6"
        >
          Cập nhật
        </button>
      </div>
      {isModalOpen && (
        <UpdateProfileModal open={isModalOpen} onClose={closeModal} />
      )}
      <h2 className="text-3xl font-semibold mt-10 mb-6">Thông tin đăng nhập</h2>
      <div className="grid grid-cols-2 gap-y-4 text-gray-800">
        <span>Email</span>
        <span>{user?.Email}</span>

        <span>Mật khẩu</span>
        <span>*****</span>
      </div>
      <div className="mt-4">
        <button className="rounded-full px-6">Cập nhật</button>
      </div>
    </div>
  );
};
export default ProfileUI;
