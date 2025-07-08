"use client";

import { SearchIcon } from "../icons";
import { menuData } from "../../app/catalog/data";
import { useState } from "react";
import { menSection } from "../utils";
import { Item } from "./Item";

interface FullscreenSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenSearch = ({ isOpen, onClose }: FullscreenSearchProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("women");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white w-full h-full flex justify-center overflow-auto">
      <div className="container w-full">
        {/* Строка поиска */}
        <div className="flex items-center w-full border-b-2 border-b-black mt-[46px] pb-3">
          <SearchIcon className="text-gray-400 text-xl mr-3" />
          <input
            type="text"
            placeholder="Пошук"
            autoFocus
            className="w-full py-3 placeholder:text-[#888888] placeholder:text-[18px] focus:outline-none text-xl"
          />
          <button 
            onClick={onClose}
            className="ml-3 text-2xl text-gray-500 hover:text-black transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Основной контент с двумя колонками */}
        <div className="flex mt-[30px]">
          {/* Левая колонка - категории и подкатегории */}
          <div className="w-1/2 pr-8">
            {/* Категории */}
            <div className="flex gap-[20px]">
              {["women", "men", "children", "home"].map((category) => (
                <button
                  key={category}
                  className={`cursor-pointer text-[16px] font-semibold pb-1 ${
                    activeCategory === category 
                      ? "shadow-[0_2px_0_0_black]" 
                      : "hover:shadow-[0_2px_0_0_black]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "women" && "Жінкам"}
                  {category === "men" && "Чоловікам"}
                  {category === "children" && "Дітям"}
                  {category === "home" && "Дім"}
                </button>
              ))}
            </div>

            {/* Подкатегории */}
            <div>
              <h3 className="text-gray-500 text-[14px] mt-[30px] mb-[30px]">Рекомендовані</h3>
              
              <div className="flex flex-col gap-[30px]">
                {menuData.map((category) => (
                  <a 
                    key={category.id}
                    href={`/${category.path}`}
                    className="text-black text-[16px] font-bold hover:text-gray-700 block"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - рекомендованные товары */}
          <div className="w-1/2">
            <h3 className="text-gray-500 text-[14px] mt-[30px] mb-[30px] w-full">Рекомендовані категорії</h3>

            <div className="grid grid-cols-3 w-full">
              {[...Array(6)].map((_, index) => (
                <Item
                  key={index}
                  images={menSection.images}
                  isDiscount={index % 3 === 0} // Каждый третий со скидкой
                  name={`Товар ${index + 1}`}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenSearch;