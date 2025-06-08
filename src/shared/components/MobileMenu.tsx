"use client"

import { useState } from "react";
import { menuData } from "../../app/catalog/data";
import { getCategoryName } from "../../app/catalog/data";
import Link from "next/link";

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleTab = (tabName: string) => {
    setActiveTab(activeTab === tabName ? null : tabName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Категории (Жінкам, Чоловікам...) */}
      <div className="flex items-center h-[50px] border-b-1 border-b-[#D9D9D9] p-[20px] justify-between">
        {["women", "men", "children", "home"].map((slug) => (
          <button
            key={slug}
            className={`hover:shadow-[0_2px_0_0_black] cursor-pointer pb-[6px] ${
              activeCategory === slug ? "shadow-[0_2px_0_0_black]" : ""
            }`}
            onClick={() => setActiveCategory(slug)}
          >
            {getCategoryName(slug)}
          </button>
        ))}

        <button onClick={onClose} className="text-[35px] font-extralight mb-[8px]">
          &times;
        </button>
      </div>

      {/* Раскрывающиеся блоки (Одяг, Взуття...) */}
      <div className="p-4 flex flex-col">
        {menuData.map((item) => (
          <div key={item.id} className="mb-4 min-h-[50px]">
            <button
              onClick={() => toggleTab(item.name)}
              className="flex justify-between items-center w-full text-left font-bold"
            >
              <span className="text-[16px]">{item.name}</span>
              <span className="ml-2">
                {activeTab === item.name ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                )}
              </span>
            </button>
            
            {activeTab === item.name && (
              <div className="flex flex-col gap-[25px] mt-[20px]">
                {item.subtabs.map((subtab) => (
                  <Link
                    key={subtab.id}
                    href={`/${item.path}/${subtab.path}`}
                    className="text-[14px]"
                  >
                    {subtab.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};