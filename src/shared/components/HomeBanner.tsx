"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Проверяем при первоначальной загрузке
    handleResize();

    // Добавляем слушатель изменений размера
    window.addEventListener("resize", handleResize);

    // Убираем слушатель при размонтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {isMobile ? (
        // Мобильная версия
        <div className="flex flex-col">
          <div 
            className="w-full h-[300px] bg-[#F4F4F4]"
            style={{
              backgroundImage: "url('/assets/main.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-full bg-[#FAFAFA] flex flex-col gap-6 mt-[20px]">
            <div className={`max-w-[250px] mx-auto ${isMobile ? "hidden" : ""}`}>
              <Image
                src="/assets/light-logo.png"
                alt="logo"
                width={500}
                height={170}
                layout="responsive"
              />
            </div>
            <p className="pl-[15px] pr-[15px] font-oswald text-[35px] leading-[1.2] uppercase font-medium">
              Sport зі знижками
              <br />
              <span className="text-[#D13030] font-oswald">до 60%</span>
            </p>
            <p className="text-xs font-medium pl-[15px] pr-[15px]">Тiльки з 20.02 до 20.03</p>
            <div className="flex justify-center pl-[15px] pr-[15px]">
              <button className="bg-[#1C1C28] h-[50px] w-full text-white text-sm mt-2 cursor-pointer">
                Перейти до розділу
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Десктопная версия
        <div className="h-[580px] flex">
          <div
            className="w-[55%] h-full bg-[#F4F4F4]"
            style={{
              backgroundImage: "url('/assets/main.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-[45%] bg-[#FAFAFA] px-[64px] py-[36px] flex flex-col gap-[32px]">
            <div>
              <Image
                src="/assets/light-logo.png"
                alt="logo"
                width={500}
                height={170}
              />
            </div>
            <p className="font-oswald text-[45px] leading-[55px] uppercase font-medium">
              Sport зі знижками
              <br />
              <span className="text-[#D13030] font-oswald">до 60%</span>
            </p>
            <p className="text-[12px] font-medium">Тiльки з 20.02 до 20.03</p>
            <button className="bg-[#1C1C28] h-[50px] w-[250px] text-white text-[14px] mt-[16px] cursor-pointer">
              Перейти до розділу
            </button>
          </div>
        </div>
      )}
    </div>
  );
};