"use client"
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import {  FiLoader, FiSearch, FiUser } from "react-icons/fi";
import dynamic from "next/dynamic";


const ModalAuth = dynamic(()=>import("../Modal/Login"),{
    loading:()=>{
        return <FiLoader className="animate-spin text-blue-500 text-2xl" />
    }
})
const Navbar = ()=>{
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = ()=>{
    setShowModal(false)
  }
    return(
        <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">KARA</div>
    
          {/* Navigation (Hidden on smaller screens) */}
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            
            <a href="#" className=" text-xl hover:text-gray-900">Product</a>
            <a href="#" className=" text-xl hover:text-gray-900">Blog</a>
            <a href="#" className=" text-xl  hover:text-gray-900">Contacts</a>
          </nav>
    
          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
            
            <BsBag className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
            <FiUser onClick={()=>setShowModal(true)} className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
          </div>
          {showModal && <ModalAuth isOpen={showModal} closeModal={handleCloseModal} />}
        </div>
      </header>
    )
}

export default Navbar;