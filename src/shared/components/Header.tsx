"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BurgerMenuIcon,
  CartBagIcon,
  FavoritesIcon,
  ProfileIcon,
  SearchIcon,
} from "../icons";
import { useRouter, usePathname } from "next/navigation";
import { Select } from "./Select";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.startsWith(path) || false;
  };

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
    <header className="flex flex-col items-center justify-center w-full">
      <div className="container relative h-[65px] flex items-center justify-center px-[12px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 w-[350px]">
            <div className="hidden md:block">
              <Select />
            </div>
            <div className="hidden lg:flex items-center gap-2 relative">
              <SearchIcon className="cursor-pointer absolute left-1" />
              <input
                type="text"
                placeholder="Пошук"
                className="w-[250px] border-b-1 border-b-[#D9D9D9] pl-12 py-1 placeholder:text-[#888888] placeholder:text-[16px] placeholder:font-medium"
              />
            </div>
          </div>
          <div className="flex gap-[12px] items-center absolute left-[12px] md:left-1/2 md:-translate-x-1/2">
            <div className="block md:hidden">
              <BurgerMenuIcon className="cursor-pointer" />
            </div>
            <Link href="/">
              <Image
                className="w-[80px] md:w-[100px]"
                src="/assets/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 w-[350px] justify-end">
            <div className="flex items-center md:hidden text-black">
              <SearchIcon className="cursor-pointer" />
            </div>
            <div
              className="flex items-center md:pr-4 md:border-r md:border-[#F4F4F4]"
              onClick={() => router.push("/profile")}
            >
              <ProfileIcon className="cursor-pointer" />
            </div>
            <div className="flex items-center md:pr-4 md:border-r md:border-[#F4F4F4]">
              <FavoritesIcon className="cursor-pointer" />
            </div>
            <div
              className="flex items-center pr-4 relative"
              onClick={() => router.push("/cart")}
            >
              <CartBagIcon className="cursor-pointer" />
              <div className="absolute -top-1.5 right-2.5 bg-[#D13030] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center cursor-pointer">
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-[58px] bg-[#1C1C28] flex items-center justify-center w-full ${isMobile ? "hidden" : ""}`}>
        <ul className="flex items-center justify-center gap-[80px] text-white font-medium text-[18px] leading-[18px]">
          <Link href="/catalog/women">
            <li
              className={`cursor-pointer border-b-1 ${
                isActive("/catalog/women")
                  ? "border-white"
                  : "border-transparent hover:border-b-1 hover:border-white"
              }`}
            >
              Жінкам
            </li>
          </Link>
          <Link href="/catalog/men">
            <li
              className={`cursor-pointer border-b-1 ${
                isActive("/catalog/men")
                  ? "border-white"
                  : "border-transparent hover:border-b-1 hover:border-white"
              }`}
            >
              Чоловікам
            </li>
          </Link>
          <Link href="/catalog/children">
            <li
              className={`cursor-pointer border-b-1 ${
                isActive("/catalog/children")
                  ? "border-white"
                  : "border-transparent hover:border-b-1 hover:border-white"
              }`}
            >
              Дітям
            </li>
          </Link>
          <Link href="/catalog/home">
            <li
              className={`cursor-pointer border-b-1 ${
                isActive("/catalog/home")
                  ? "border-white"
                  : "border-transparent hover:border-b-1 hover:border-white"
              }`}
            >
              Дім
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
