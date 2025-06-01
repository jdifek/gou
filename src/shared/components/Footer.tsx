"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MinusIcon, PlusIcon } from "../icons";
import { useState } from "react";
import { Select } from "./Select";

export const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({
    account: false,
    buyers: false,
    about: false,
    contact: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => {
      if (prev[section]) {
        return {
          ...prev,
          [section]: false,
        };
      }

      return {
        account: false,
        buyers: false,
        about: false,
        contact: false,
        [section]: true,
      };
    });
  };

  return (
    <footer className="flex items-center justify-center mt-[72px]">
      <div className="container border-t-1 border-t-[#EEEEEE] py-[24px] px-[36px] hidden md:flex items-center justify-between">
        <div className="flex justify-between w-full">
          <div className="w-[25%] pr-[24px] border-r border-[#EEEEEE]">
            <p className="text-[12px] font-bold uppercase mb-[24px]">
              Контакт - центр
            </p>
            <div className="flex flex-col text-[12px] gap-1 font-bold">
              <p>+38 (073) 575 54 84</p>
              <p>+38 (067) 575 54 84</p>
            </div>
            <p className="text-[12px] font-bold mt-[18px]">
              Пн - Нд: з 8.00 до 17.00
            </p>
            <div className="flex items-center gap-2 w-[120px] justify-between my-[18px]">
              <div className="text-black">
                <FaFacebookSquare
                  className="cursor-pointer h-[18px] w-[18px]"
                  size={18}
                />
              </div>
              <div className="text-black">
                <RiInstagramFill
                  className="cursor-pointer h-[18px] w-[18px]"
                  size={18}
                />
              </div>
              <div className="text-black">
                <FaTelegramPlane
                  className="cursor-pointer h-[18px] w-[18px]"
                  size={18}
                />
              </div>
            </div>
            <p className="text-[12px] font-normal">
              2025 GOU. Усі права зареєстровані
            </p>
          </div>
          <div className="w-[25%] px-[48px] border-r border-[#EEEEEE]">
            <p className="text-[12px] font-bold uppercase mb-[24px]">
              Покупцям
            </p>
            <ul className="flex flex-col gap-[12px]">
              <Link href="/payment-and-delivery">
                <li className="text-[12px] font-bold">Оплата та доставка</li>
              </Link>
              <Link href="/terms-of-turnover">
                <li className="text-[12px] font-bold">Умови продажу</li>
              </Link>
              <li className="text-[12px] font-bold">Контакти</li>
              <li className="text-[12px] font-bold">Питання та відповіді</li>
            </ul>
          </div>
          <div className="w-[25%] px-[48px] border-r border-[#EEEEEE]">
            <p className="text-[12px] font-bold uppercase mb-[24px]">
              Особистий кабінет
            </p>
            <ul className="flex flex-col gap-[12px]">
              <li className="text-[12px] font-bold">Історія замовлень</li>
              <li className="text-[12px] font-bold">Мої дані</li>
              <li className="text-[12px] font-bold">Обране</li>
            </ul>
          </div>
          <div className="w-[25%] pl-[48px]">
            <p className="text-[12px] font-bold uppercase mb-[24px]">Про нас</p>
            <ul className="flex flex-col gap-[12px]">
              <Link href="/about-us">
                <li className="text-[12px] font-bold">Про компанію</li>
              </Link>
              <li className="text-[12px] font-bold">
                Політика конфіденційності
              </li>
              <li className="text-[12px] font-bold">Угода користувача</li>
            </ul>
            <div className="flex items-center gap-4 mt-[36px]">
              <div className="w-[35px] h-[22px] border-1 border-[#EEEEEE] rounded-[3px] flex items-center justify-center">
                <Image
                  src="/assets/mastercard.png"
                  alt="mastercard"
                  width={15}
                  height={12}
                />
              </div>
              <div className="w-[35px] h-[22px] border-1 border-[#EEEEEE] rounded-[3px] flex items-center justify-center">
                <Image
                  src="/assets/visa.png"
                  alt="visa"
                  width={25}
                  height={8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container md:hidden flex flex-col items-center justify-between">
        <div className="px-[10px] w-full first:border-t-1 first:border-t-[#EEEEEE] border-b-1 border-b-[#EEEEEE]">
          <div
            className="flex items-center justify-between w-full h-[40px] cursor-pointer"
            onClick={() => toggleSection("account")}
          >
            <p className="text-[12px] uppercase font-medium">
              Особистий кабінет
            </p>
            {expandedSections.account ? <MinusIcon /> : <PlusIcon />}
          </div>
          <div
            className={`flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
              expandedSections.account ? "max-h-[120px] py-[10px]" : "max-h-0"
            }`}
          >
            <p className="text-[12px] font-medium">Історія замовлень</p>
            <p className="text-[12px] font-medium">Мої дані</p>
            <p className="text-[12px] font-medium">Обране</p>
          </div>
        </div>
        <div className="flex flex-col w-full px-[10px] border-b-1 border-b-[#EEEEEE]">
          <div
            className="flex items-center justify-between w-full h-[40px] cursor-pointer"
            onClick={() => toggleSection("buyers")}
          >
            <p className="text-[12px] uppercase font-medium">Покупцям</p>
            {expandedSections.buyers ? <MinusIcon /> : <PlusIcon />}
          </div>
          <div
            className={`flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
              expandedSections.buyers ? "max-h-[200px] py-[10px]" : "max-h-0"
            }`}
          >
            <Link href="/payment-and-delivery">
              <p className="text-[12px] font-medium">Оплата та доставка</p>
            </Link>
            <Link href="/terms-of-turnover">
              <p className="text-[12px] font-medium">Умови продажу</p>
            </Link>
            <p className="text-[12px] font-medium">Контакти</p>
            <p className="text-[12px] font-medium">Питання та відповіді</p>
          </div>
        </div>
        <div className="flex flex-col w-full px-[10px] border-b-1 border-b-[#EEEEEE]">
          <div
            className="flex items-center justify-between w-full h-[40px] cursor-pointer"
            onClick={() => toggleSection("about")}
          >
            <p className="text-[12px] uppercase font-medium">Про нас</p>
            {expandedSections.about ? <MinusIcon /> : <PlusIcon />}
          </div>
          <div
            className={`flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
              expandedSections.about ? "max-h-[150px] py-[10px]" : "max-h-0"
            }`}
          >
            <Link href="/about-us">
              <p className="text-[12px] font-medium">Про компанію</p>
            </Link>
            <p className="text-[12px] font-medium">Політика конфіденційності</p>
            <p className="text-[12px] font-medium">Угода користувача</p>
          </div>
        </div>
        <div className="flex flex-col w-full px-[10px] border-b-1 border-b-[#EEEEEE] mb-[24px]">
          <div
            className="flex items-center justify-between w-full h-[40px] cursor-pointer"
            onClick={() => toggleSection("contact")}
          >
            <p className="text-[12px] uppercase font-medium">Контакт-центр</p>
            {expandedSections.contact ? <MinusIcon /> : <PlusIcon />}
          </div>
          <div
            className={`flex flex-col gap-[10px] overflow-hidden transition-all duration-300 ${
              expandedSections.contact ? "max-h-[150px] py-[10px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col text-[12px] gap-1 font-medium">
              <p>+38 (073) 575 54 84</p>
              <p>+38 (067) 575 54 84</p>
            </div>
            <p className="text-[12px] font-medium mt-[10px]">
              Пн - Нд: з 8.00 до 17.00
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mb-[24px] px-[20px]">
          <Select />
          <div className="flex items-center gap-4">
            <FaFacebookSquare className="cursor-pointer" size={20} />
            <RiInstagramFill className="cursor-pointer" size={20} />
            <FaTelegramPlane className="cursor-pointer" size={20} />
          </div>
        </div>
        <p className="text-[14px] font-medium mb-[24px]">
          2025 GOU. Усі права зареєстровані
        </p>
      </div>
    </footer>
  );
};
