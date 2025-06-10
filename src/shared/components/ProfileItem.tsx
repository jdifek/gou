import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiShoppingBag4Line } from "react-icons/ri";

interface ProfileItem {
  id: number;
  name: string;
  size: string;
  model: string;
  availability: string;
  originalPrice?: number;
  image: StaticImageData;
  prevPrice: number;
}

interface ProfileItemProps {
  item: ProfileItem;
  isButton?: boolean;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ isButton, item }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (windowWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col">
      <div className={`flex justify-between items-center ${isMobile ? "flex-col items-start" : ""} h-[117px] max-w-[924px]`}>
        <div className="flex h-[117px] max-w-[924px]">
          <Image width={88} height={117} src={item.image} alt={item.name} />
          <div className="flex flex-col justify-between ml-[15px]">
            <p className="text-[14px] font-medium">{item.name}</p>
            <p className="text-[14px] font-medium">Розмір: {item.size}</p>
            <div className="flex flex-col gap-[0px]">
              <p className="text-[13px]"><span>Модель:</span> {item.model}</p>
              <p className="text-[13px]"><span>Наявність:</span> {item.availability}</p>
            </div>
            <p className="text-[#D13030] font-bold flex gap-[5px]">
              {item.originalPrice} грн <span className="text-[#1C1C28] font-bold line-through">{item.prevPrice} грн</span>
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className="text-right h-full flex flex-col justify-end">
            {isButton ? (
              <button
                className="bg-[#1C1C28] h-[44px] w-[230px] text-white text-[14px] cursor-pointer flex justify-center items-center gap-[20px]"
              >
                Додати у Кошик
                <RiShoppingBag4Line size={20} />
              </button>
            ) : (
              <div>
                <p className="font-semibold">{item.originalPrice} грн</p>
              </div>
            )}
          </div>
        )}
      </div>
      {isMobile && isButton && (
        <div className="w-full mt-4">
          <button
            className="bg-[#1C1C28] h-[44px] w-full text-white text-[14px] cursor-pointer flex justify-center items-center gap-[20px]"
          >
            Додати у Кошик
            <RiShoppingBag4Line size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileItem;