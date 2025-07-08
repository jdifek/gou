"use client"

import { useState } from "react";
import { getCategoryName, menuData } from "../../app/catalog/data";
import { SearchIcon } from "../icons";
import Image from "next/image";
import CloseIcon from "../../../public/assets/close.png";
import { ItemsSection } from "./ItemsSection";
import { menSectionCarousel } from "../utils";

export const MobileSearch = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Кнопка закрытия в правом верхнем углу */}
      <div className="flex justify-end p-3">
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-black"
        >
          <Image 
            src={CloseIcon} 
            alt="Закрыть" 
            width={24} 
            height={24} 
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Строка поиска */}
      <div className="px-3 pb-3">
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-3 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Пошук"
            className="w-full pl-[60px] pr-20 py-3 border-b-[2px] border-b-[#1C1C28] focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 text-gray-500 hover:text-black text-sm"
            >
              Стереть
            </button>
          )}
        </div>
      </div>

      {/* Категории для поиска */}
      <div className="p-3">
        <div className="flex flex-wrap justify-between gap-2">
          {["women", "men", "children", "home"].map((slug) => (
            <button
              key={slug}
              className={`font-semibold text-[18px] ${
                activeCategory === slug 
                  ? "shadow-[0_2px_0_0_black]" 
                  : ""
              }`}
              onClick={() => setActiveCategory(slug)}
            >
              {getCategoryName(slug)}
            </button>
          ))}
        </div>
      </div>

      {/* Рекомендовані категорії */}
      <div className="px-3 border-t border-gray-100 mt-[15px]">
        <h3 className="text-gray-500 text-[14px] mb-[25px]">Рекомендовані категорії</h3>
        <div className="flex flex-col gap-[30px]">
          {menuData.map((category) => (
            <a 
              key={category.id}
              href={`/${category.path}`}
              className="text-black text-[16px] font-bold hover:text-gray-700"
              onClick={onClose} // Закрываем модальное окно при клике
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      {/* Рекомендовані */}
      <div className="px-3 border-t border-gray-100 mt-[30px]">
        <h3 className="text-gray-500 text-[14px]">Рекомендовані</h3>

       <ItemsSection section={menSectionCarousel} />
      </div>
    </div>
  );
};

export default MobileSearch;