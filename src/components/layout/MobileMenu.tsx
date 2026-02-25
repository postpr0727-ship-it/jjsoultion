"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/constants/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      {/* 백드롭 */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ backgroundColor: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      {/* 메뉴 패널 */}
      <div
        className={`absolute top-0 right-0 h-full w-72 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out z-10 border-l border-border
                   ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* 닫기 버튼 */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-1 transition-colors p-2"
            aria-label="메뉴 닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 네비게이션 링크 */}
        <nav className="flex-1 px-6 py-4">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block py-4 px-6 text-text-2 hover:text-brand-green
                               hover:bg-[#EBF5EC] rounded-xl transition-all duration-200
                               text-xl font-bold shadow-sm"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 px-6 text-text-2 hover:text-brand-green
                               hover:bg-[#EBF5EC] rounded-xl transition-all duration-200
                               text-xl font-bold shadow-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
