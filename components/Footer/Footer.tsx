import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { SiZalo } from "react-icons/si";
import logo from "@/public/Image/komex-digital-logo_a39f6b3a05934b128b6b2e4e11ee89e1.webp";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">ĐĂNG KÍ NHẬN TIN</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l bg-white text-black flex-grow"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r flex items-center gap-1">
              <svg width="16" height="16" fill="currentColor">
                <path d="M0 0h16v16H0z" fill="none" />
                <path d="M1 14l13-6L1 2v4l9 2-9 2z" />
              </svg>
              ĐĂNG KÝ
            </button>
          </div>
          <Image src={logo} alt="Komex" className="h-10 mb-3" />
          {/* Bạn có thể thay đường dẫn logo tùy ý */}
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Địa chỉ: Thôn Thạch Lỗi, Xã Thanh Xuân, Huyện Sóc
            Sơn, Hà Nội
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone /> 1900 0267
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> tmdt@komex.com.vn
          </p>
          <p className="mt-2">MST: 0102675442</p>
          <p>Cấp ngày: 11/03/2008</p>
          <p>Nơi cấp: Sở KHĐT TP Hà Nội</p>
          <img
            src="/bo-cong-thuong.png"
            alt="Bộ Công Thương"
            className="h-8 mt-3"
          />
        </div>

        {/* Column 2 - Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4">DANH MỤC NỔI BẬT</h3>
          <ul className="space-y-2">
            <li>• Đang Khuyến Mãi</li>
            <li>• Smart Tivi</li>
            <li>• Thiết Bị Gia Dụng</li>
            <li>• Robot Hút Bụi</li>
            <li>• Lọc Không Khí</li>
            <li>• Quạt Thông Minh</li>
            <li>• Điện Lạnh</li>
            <li>• Camera Giám Sát</li>
            <li>• Thiết bị sức khỏe</li>
            <li>• Thiết Bị Tin Học</li>
          </ul>
        </div>

        {/* Column 3 - Customer Support */}
        <div>
          <h3 className="font-bold text-lg mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className="space-y-2">
            <li>• Hướng dẫn mua hàng</li>
            <li>• Chính Sách Bảo Hành</li>
            <li>• Chăm Sóc Khách Hàng</li>
            <li>• Chính sách kiểm hàng</li>
            <li>• Chính sách đổi trả</li>
            <li>• Phương thức thanh toán</li>
            <li>• Thông tin về vận chuyển</li>
            <li>• Chính sách bảo mật thông tin</li>
          </ul>
        </div>

        {/* Column 4 - Hotline & Payment */}
        <div>
          <h3 className="font-bold text-lg mb-4">TỔNG ĐÀI HỖ TRỢ</h3>
          <p>
            GỌI BẢO HÀNH:{" "}
            <span className="text-blue-400">0928206268 - 0922306268</span>{" "}
            (8h-17h)
          </p>
          <p className="mt-2">
            GỌI HỖ TRỢ KỸ THUẬT:{" "}
            <span className="text-blue-400">0862858466</span> (8h-17h)
          </p>
          <h3 className="font-bold text-lg mt-6 mb-2">
            PHƯƠNG THỨC THANH TOÁN
          </h3>
          <div className="flex gap-2">
            <img src="/payment-cod1.png" alt="COD 1" className="h-6" />
            <img src="/payment-cod2.png" alt="COD 2" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-neutral-900 text-xs">
        <p>© Copyright 2025 By Komex Digital. Powered by Komex Việt Nam.</p>
        <div className="flex gap-2">
          <button className="bg-white text-black p-1 rounded-full">
            <FaFacebookF />
          </button>
          <button className="bg-black text-white p-1 rounded-full border border-white">
            <FaTiktok />
          </button>
          <button className="bg-red-600 text-white p-1 rounded-full">
            <FaYoutube />
          </button>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
        <button className="bg-blue-600 p-2 rounded-full shadow-lg">
          <RiMessengerFill size={20} />
        </button>
        <button className="bg-cyan-500 p-2 rounded-full shadow-lg">
          <SiZalo size={20} />
        </button>
        <button className="bg-red-600 p-2 rounded-full shadow-lg text-white font-bold text-lg">
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
