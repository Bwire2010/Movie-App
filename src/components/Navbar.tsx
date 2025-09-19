"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getUserName = (email: string) => email.split("@")[0];

  return (
    <nav className="w-full bg-white text-gray-800 py-4 px-4 md:px-24 shadow-md z-50">
      <div className="flex justify-between items-center relative">
        {/* Logo + App Name */}
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-gray-950">CinemaHub</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 hover:text-blue-600"
              >
                <span className="font-semibold">Welcome, {getUserName(user)}</span>
                <ChevronDown size={18} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a
              href="#login"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm text-white"
            >
              Sign In
            </a>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-3">
          {user ? (
            <>
              <span className="text-gray-800 font-medium">
                Welcome, {getUserName(user)}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="#login"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm text-white text-center"
            >
              Sign In
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
