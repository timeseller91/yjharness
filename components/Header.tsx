"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/products", label: "제품" },
  { href: "/equipment", label: "장비설비" },
  { href: "/contact", label: "문의하기" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-brand-700 dark:text-brand-400">영지하네스</span>
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-1 mr-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </nav>
        <div className="flex md:hidden items-center space-x-2">
          <ThemeSwitch />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-800 dark:text-gray-200"
            aria-label="메뉴 열기"
          >
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-gray-800 dark:text-white px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
