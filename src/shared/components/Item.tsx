"use client";
import Image from "next/image";
import { FavoritesIcon } from "../icons";
import { TfiEmail } from "react-icons/tfi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const colors = [
  {
    id: 1,
    color: "#888888",
  },
  {
    id: 2,
    color: "#1C1C28",
  },
  {
    id: 3,
    color: "#D9D9D9",
  },
  {
    id: 4,
    color: "#738D72",
  },
  {
    id: 5,
    color: "#254AA5",
  },
];

interface ItemProps {
  isDiscount: boolean;
  images: string[];
  name: string;
  variant?: "default" | "compact"; // Добавляем пропс для управления размером
}

export const Item = ({
  isDiscount,
  images,
  name,
  variant = "default", // Значение по умолчанию
}: ItemProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Размеры в зависимости от варианта
  const dimensions = {
    default: {
      container: "w-[320px] min-h-[430px]",
      image: "h-[430px]",
      imageWidth: 320,
      imageHeight: 430,
      topPosition: "top-[183px]",
      discountTop: "top-2",
    },
    compact: {
      container: "w-[200px] min-h-[300px]",
      image: "h-[300px]",
      imageWidth: 200,
      imageHeight: 300,
      topPosition: "top-[128px]",
      discountTop: "top-1",
    },
  };

  const currentVariant = dimensions[variant];

  return (
    <div className={`${currentVariant.container} flex-shrink-0 relative pb-[12px]`}>
      <div className="relative group">
        <div className="absolute bottom-0 left-0 w-full h-[64px] px-[32px] bg-[#FFFFFFE0] flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <p className="text-[12px] text-center font-normal">Оберіть розмір</p>
          <ul className="flex items-center justify-between w-full text-[12px] font-normal">
            <li className="cursor-pointer">S</li>
            <li className="cursor-pointer">M</li>
            <li className="cursor-pointer">L</li>
            <li className="cursor-pointer flex items-center gap-1.5 text-[#B8B8B8]">
              <TfiEmail size={16} />
              <p>XXL</p>
            </li>
            <li className="cursor-pointer">3XL</li>
            <li className="cursor-pointer">4XL</li>
          </ul>
        </div>
        <div
          className={`absolute ${currentVariant.topPosition} left-2 -translate-y-1/2 text-[#888888] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
          onClick={handlePreviousImage}
        >
          <FaChevronLeft size={variant === "compact" ? 12 : 16} />
        </div>
        <div
          className={`absolute ${currentVariant.topPosition} right-2 -translate-y-1/2 text-[#888888] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
          onClick={handleNextImage}
        >
          <FaChevronRight size={variant === "compact" ? 12 : 16} />
        </div>
        <Image
          className={`w-full ${currentVariant.image} object-cover cursor-pointer transition-opacity duration-300`}
          src={images[currentImageIndex]}
          alt="item"
          width={currentVariant.imageWidth}
          height={currentVariant.imageHeight}
        />

        {isDiscount && (
          <div className={`absolute ${currentVariant.discountTop} right-2 h-[20px] flex items-center justify-center bg-[#D13030] text-white px-2 py-1 z-20 text-[12px]`}>
            -51%
          </div>
        )}
      </div>
      <div className="mt-[4px] flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[12px] font-normal">{name}</p>
          <div className="text-[15px] flex items-center gap-2">
            <span
              className={`${
                isDiscount ? "text-[#D13030]" : "text-black"
              } font-bold`}
            >
              399 грн
            </span>
            {isDiscount && (
              <span className="line-through font-normal">1000 грн</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {colors.map((color) => (
              <div
                key={color.id}
                className="h-[14px] pb-[1px] hover:border-b-1 hover:border-b-black"
              >
                <div
                  className="w-[12px] h-[12px] cursor-pointer"
                  style={{ backgroundColor: color.color }}
                />
              </div>
            ))}
            <p className="text-[12px] font-normal mb-0.5">+6</p>
          </div>
        </div>
        <FavoritesIcon className="cursor-pointer h-4 w-4 mt-0.5 mr-1" />
      </div>
    </div>
  );
};