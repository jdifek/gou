import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiShoppingBag4Line } from "react-icons/ri";
import close_img from "../../../public/assets/close.png";

interface ProfileItem {
  id: number;
  name: string;
  size: string;
  model: string;
  availability: string;
  originalPrice?: number;
  image: StaticImageData;
  prevPrice: number;
  type: string;
}

interface ProfileItemProps {
  item: ProfileItem;
  isButton?: boolean;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ isButton, item }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobile(windowWidth <= 1023);
  }, [windowWidth]);

  return (
    <div className="flex flex-col">
      <div className={`flex justify-between items-center ${isMobile ? "flex-col items-start" : ""} h-[117px]`}>
        <div className="flex h-[117px] w-full">
          <Image width={88} height={117} src={item.image} alt={item.name} />
          <div className="flex flex-col justify-between ml-[15px] w-full">
            
            <div className="flex flex-col leading-[18px]">
            <div className="flex justify-between items-start w-full">
              <p className="text-[14px] font-medium">{item.name}</p>
              {isMobile && isButton && (
                <button className="min-w-[16px] min-h-[16px]">
                  <Image src={close_img} alt="Close" width={16} height={16} />
                </button>
              )}
            </div>
              <p className={`text-[14px] font-medium ${item.type == "clothes" ? "block" : "hidden"}`}>Розмір: {item.size}</p>
            </div>
            <div className="flex flex-col gap-[0px]">
              <p className="text-[13px]"><span className="text-[#888888]">Модель:</span> {item.model}</p>
              <p className="text-[13px]"><span className="text-[#888888]">Наявність:</span> {item.availability}</p>
            </div>
            <p className="text-[#D13030] font-bold flex gap-[5px]">
              {item.originalPrice} грн <span className="text-[#1C1C28] font-bold line-through">{item.prevPrice} грн</span>
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className="text-right h-full flex flex-col justify-end items-end">
            {isButton ? (
              <div className="flex h-full flex-col justify-between items-end">
                <button className="w-[16px] h-[16px]">
                  <Image src={close_img} alt="Close" width={16} height={16} />
                </button>
                <button
                  className="bg-[#1C1C28] h-[44px] w-[230px] text-white text-[14px] cursor-pointer flex justify-center items-center gap-[20px]"
                >
                  Додати у Кошик
                  <RiShoppingBag4Line size={20} />
                </button>
              </div>
            ) : (
              <div className='w-[500px]'>
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