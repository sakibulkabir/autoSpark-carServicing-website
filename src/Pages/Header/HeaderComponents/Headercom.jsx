import React, { useState } from "react";
import Button from "../../../Components/sheard/Button";
import { Menu, X } from "lucide-react"; // for icons

function Headercom() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black w-full">
      <div className="flex items-center justify-between container mx-auto px-5 py-4">
        {/* Logo */}
        <img
          className="w-16 h-16"
          src="/images/logo-removebg-preview.png"
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-16 text-white text-xl font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Service</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Pages</li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button text={"Contact Us"} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden bg-black text-white px-8 pb-5 space-y-4 text-lg font-medium">
          <p className="hover:text-yellow-400 cursor-pointer">Home</p>
          <p className="hover:text-yellow-400 cursor-pointer">Service</p>
          <p className="hover:text-yellow-400 cursor-pointer">About</p>
          <p className="hover:text-yellow-400 cursor-pointer">Pages</p>

          {/* Mobile Button */}
          <Button text={"Contact Us"} />
        </div>
      )}
    </header>
  );
}

export default Headercom;
