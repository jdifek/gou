"use client";

import { useRouter, usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import type { MenuItem, Subtab } from "../../../../data";
import { menuData, getCategoryName } from "../../../../data";
import { FaTelegramPlane } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { GoChevronDown, GoChevronUp} from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import {menSectionCarousel } from "@/shared/utils";

import "./media.css"

import Image from "next/image";
import {ItemsSection } from "@/shared/components";

export default function ProductPage() {

  interface Breadcrumb {
    name: string;
    path: string;
  }

  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const images = [
    "/assets/ProductPage/MainImg/image.png",
    "/assets/ProductPage/MainImg/image-1.png",
    "/assets/ProductPage/MainImg/image-2.png",
    "/assets/ProductPage/MainImg/image-3.png",
    "/assets/ProductPage/MainImg/image-4.png",
    "/assets/ProductPage/MainImg/image (1).png"
  ];

    const pathname = usePathname();

   const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  
    const [selectedTab, setSelectedTab] = useState<MenuItem | null>(null);
    const [selectedSubtab, setSelectedSubtab] = useState<Subtab | null>(null);
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  const [openDescription, setOpenDescription] = useState(false);
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openExchange, setOpenExchange] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  
  
    useEffect(() => {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length >= 2) {
        if (segments.length >= 3) {
          const tabPath = segments[2];
          const mainTab = menuData.find((tab) => tab.path === tabPath);
  
          if (mainTab) {
            setSelectedTab(mainTab);
  
            if (segments.length >= 4) {
              const subtabPath = segments[3];
              const subtab = mainTab.subtabs.find((st) => st.path === subtabPath);
  
              if (subtab) {
                setSelectedSubtab(subtab);
              }
            }
          }
        }
  
        updateBreadcrumbs(segments);
      }
    }, [pathname]);

    useEffect(() => {
      setWindowWidth(window.screen.width);
      window.addEventListener("resize", () => {
        setWindowWidth(window.screen.width);
      })
    }, []);

    useEffect(() => {
      if (windowWidth <= 700) setIsMobile(true);
      else setIsMobile(false);
    }, [windowWidth]);
  
    const updateBreadcrumbs = (segments: string[]) => {
      const newBreadcrumbs: Breadcrumb[] = [];
  
      newBreadcrumbs.push({ name: "Головна", path: "/" });
  
      if (segments.length >= 2) {
        const categorySlug = segments[1];
        const categoryName = getCategoryName(categorySlug);
  
        newBreadcrumbs.push({
          name: categoryName,
          path: `/catalog/${segments[1]}`,
        });
      }
  
      if (selectedTab) {
        newBreadcrumbs.push({
          name: selectedTab.name,
          path:
            segments.length >= 2
              ? `/catalog/${segments[1]}/${selectedTab.path}`
              : "",
        });
      }
  
      if (selectedSubtab && selectedTab) {
        newBreadcrumbs.push({
          name: selectedSubtab.name,
          path:
            segments.length >= 2
              ? `/catalog/${segments[1]}/${selectedTab.path}/${selectedSubtab.path}`
              : "",
        });
      }
  
      setBreadcrumbs(newBreadcrumbs);
    };
  
  return (
    <div className="mt-[40px] w-full">
      <div className="flex flex-col items-start flex-wrap gap-x-[16px] w-full mb-[24px] container m-auto">
        <div className={`flex items-center flex-wrap gap-1 ${isMobile ? "pl-[20px] pr-[20px]" : ""}`}>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <p
                className={`text-[14px] ${index === breadcrumbs.length - 1
                    ? "font-medium"
                    : "text-[#848484] underline font-medium cursor-pointer"
                  }`}
                onClick={() => {
                  if (index < breadcrumbs.length - 1) {
                    router.push(crumb.path);
                  }
                }}
              >
                {crumb.name}
              </p>
              {index < breadcrumbs.length - 1 && (
                <MdOutlineKeyboardArrowRight
                  size={15}
                  className="text-[#848484]"
                />
              )}
            </div>
          ))}
        </div>

      
      <div className={`main justify-between w-full mt-[27px] gap-[36px] ${isMobile ? "flex flex-col-reverse" : "flex"}`}>
        <div className={`${isMobile ? "hidden" : ""} images grid grid-cols-2 gap-[12px] w-full self-start`}>
          <Image src="/assets/ProductPage/MainImg/image.png" alt="" width={380} height={506} />
          <Image src="/assets/ProductPage/MainImg/image-1.png" alt="" width={380} height={506} />
          <Image src="/assets/ProductPage/MainImg/image-2.png" alt="" width={380} height={506} />
          <Image src="/assets/ProductPage/MainImg/image-3.png" alt="" width={380} height={506} />
          <Image src="/assets/ProductPage/MainImg/image-4.png" alt="" width={380} height={506} />
          <Image src="/assets/ProductPage/MainImg/image (1).png" alt="" width={380} height={506} />
        </div>

        <div className={`main-info flex flex-col items-start w-full ${isMobile ? "pl-[20px] pr-[20px]" : ""}`}>
          <p className="color-[##1C1C28] text-[20px] font-semibold">Термобілизна чоловіча GOU ПРЕМІУМ <br className={`${isMobile ? "block" : "hidden"}`} /> мікродайвінг на флісі</p>
          <span className="text-[13px] mt-[5px]">85MEN</span>

    <div className={`relative w-[80%] m-auto ${!isMobile ? "hidden" : ""}`}>


      {/* Mobile view - carousel */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image 
                src={src}
                alt=""
                width={380}
                height={506}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={prevImage}
          className="absolute left-0 top-0 bottom-0 w-1/4 flex items-center justify-start pl-2 z-10"
          aria-label="Previous image"
        >
          <div className="bg-black/30 rounded-full p-2">
            {/* Left arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-0 top-0 bottom-0 w-1/4 flex items-center justify-end pr-2 z-10"
          aria-label="Next image"
        >
          <div className="bg-black/30 rounded-full p-2">
            {/* Right arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>

    <p className="text-[18px] font-semibold mt-[32px]">Костюм чоловічiй флісовий</p>

            <div className="prices-colors-container flex flex-col-reverse">
              <div className="prices">
                <div className="discount flex gap-[15px] items-center mt-[10px]">
                  <span className="flex justify-center items-center text-white text-[15px w-[55px] h-[28px] bg-[#D13030]">-55%</span>
                  <span className="text-[20px] line-through">1 000 грн</span>
                </div>

                <div className="prices flex flex-col w-full gap-[11px] mt-[10px]">
                  <div className="flex items-center gap-[15px]">
                    <span className="text-[#C60C0C] text-[22px] font-medium">449 грн</span>
                    <span className="font-normal">На замовлення від 1000грн</span>
                  </div>

                  <div className="w-full h-[1px] bg-[#EEEEEE]"></div>

                  <div className="flex items-center gap-[15px]">
                    <span className="text-[#000000] text-[22px] font-medium">549 грн</span>
                    <span className="font-normal">На замовлення до 1000грн</span>
                  </div>
                </div>
              </div>



              <div className="colors mt-[32px] w-full">
                <p className="text-[16px] text-[#212121]" ><span className="font-semibold">Колір:</span> cірий</p>

                <div className={`flex gap-[14px] mt-[5px] w-full`}>
                  <div className="relative pb-1 hover:border-b-1 hover:border-black">
                    <Image
                      src="/assets/ProductPage/ColorsImg/Rectangle 62.png"
                      alt=""
                      width={48}
                      height={65}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative pb-1 hover:border-b-1 hover:border-black">
                    <Image
                      src="/assets/ProductPage/ColorsImg/Frame 34.png"
                      alt=""
                      width={48}
                      height={65}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative pb-1 hover:border-b-1 hover:border-black">
                    <Image
                      src="/assets/ProductPage/ColorsImg/Frame 35.png"
                      alt=""
                      width={48}
                      height={65}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative pb-1 hover:border-b-1 hover:border-black">
                    <Image
                      src="/assets/ProductPage/ColorsImg/Frame 36.png"
                      alt=""
                      width={48}
                      height={65}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>




            <div className={`mt-[32px] w-full ${windowWidth <= 470 ? "text-[10px]" : null}`}>
              <p className="text-[16px] text-[#212121] font-bold" >Оберіть розмір</p>

              <div className={`flex gap-[10px] w-full ${isMobile ? "justify-between" : ""}`}>
                <button className="p-[10px] bg-transparent border-1 border-[#EEEEEE] flex justify-center items-center cursor-pointer">S-M</button>
                <button className="p-[10px] bg-transparent border-1 border-[#EEEEEE] flex justify-center items-center cursor-pointer">M-L</button>
                <button className="flex gap-[5px] p-[10px] bg-transparent border-1 border-[#EEEEEE] flex justify-center items-center cursor-pointer">
                  <FaTelegramPlane className={windowWidth <= 470 ? "hidden" : ""} />
                  L-XL
                </button>
                <button className="p-[10px] bg-transparent border-1 border-[#EEEEEE] flex justify-center items-center cursor-pointer">XL-XXL</button>
                <button className="flex gap-[5px] p-[10px] bg-transparent border-1 border-[#EEEEEE] flex justify-center items-center cursor-pointer">
                  <FaTelegramPlane className={windowWidth <= 470 ? "hidden" : ""} />
                  XXL-3XL
                </button>
              </div>
            
            </div>

            <div className="flex buttons w-full h-[44px] mt-[30px] gap-[20px]">
              <button className="flex w-full h-full bg-[#1C1C28] text-white justify-center items-center cursor-pointer gap-[20px]">Додати у Кошик <RiShoppingBag4Line size={23} /> </button>
              <button className="cursor-pointer flex w-[44px] h-full bg-[#1C1C28] text-white justify-center items-center text-[35px]"><CiHeart /></button>
            </div>

            

            <div className="accoredeons flex flex-col w-full mt-[30px]">
              <div className="border-b border-t">
                <div
                  className="flex justify-between items-center pt-[16px] pb-[16px] cursor-pointer hover:bg-gray-100"
                  onClick={() => setOpenReview(!openReview)}
                >
                  <h3 className="font-medium text-[14px] text-[#212121]">Обзор товару</h3>
                  {openReview ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
                </div>

                {openReview && (
                  <div className="relative w-full mb-[30px] group mt-[30px]">
                    <video
                      src="#"
                      className="w-full h-full"
                      poster="/assets/ProductPage/VideoPrewiev/image (2).png"
                    ></video>

  
                    <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/60 to-transparent">
                      <h4 className="text-white text-[20px] font-inter font-normal">Термобілизна чоловіча GOU ПРЕМІУМ мікродайвінг на флісі</h4>
                    </div>

                    {/* Кнопка воспроизведения */}
                    <button
                      className="text-[50px] absolute inset-0 m-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transition-all hover:bg-red-700 hover:scale-110 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}

                      
                    >
                      <GoTriangleRight className="ml-[5px]" />
                    </button>
                  </div>
                )}
              </div>

              <div className="border-b">
                <div
                  className="flex justify-between items-center pt-[16px] pb-[16px] cursor-pointer  hover:bg-gray-100"
                  onClick={() => setOpenDescription(!openDescription)}
                >
                  <h3 className="font-medium text-[14px] text-[#212121]">Опис товару</h3>
                  {openDescription ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
                </div>

                {openDescription && (
                  <div className="text-[##000000] mb-[30px]">
                    <p>Описание товара</p>
                  </div>
                )}
              </div>

              <div className="border-b">
                <div
                  className="flex justify-between items-center pt-[16px] pb-[16px] cursor-pointer hover:bg-gray-100"
                  onClick={() => setOpenDelivery(!openDelivery)}
                >
                  <h3 className="font-medium text-[14px] text-[#212121]">Доставка</h3>
                  {openDelivery ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
                </div>

                {openDelivery && (
                  <div className="text-[##000000] mb-[30px]">
                    <p>Информация о доставке</p>
                  </div>
                )}
              </div>

              <div className="border-b last:border-b-0 transition-all transition-[0.2s]">
                <div
                  className="flex justify-between items-center pt-[16px] pb-[16px] cursor-pointer hover:bg-gray-100"
                  onClick={() => setOpenExchange(!openExchange)}
                >
                  <h3 className="font-medium text-[14px] text-[#212121]">Повернення та обмін</h3>
                  {openExchange ? <GoChevronUp size={20} /> : <GoChevronDown size={20} />}
                </div>

                {openExchange && (
                  <div className="text-[##000000] mb-[30px]">
                    <p>Информация об обмене</p>
                  </div>
                )}
              </div>
            </div>
        </div>

        
      </div>

      <div className="w-full bg-[#D9D9D9] h-[1px] mt-[50px] mb-[50px]"></div>

        <div className="carousel w-full">
          <p className="ml-[15px] font-inter text-[16px] font-bold uppercase border-l-[2px] border-[#D13030] pl-[10px]">Схожі товари</p>
          <ItemsSection section={menSectionCarousel}/>
        </div>

        <div className="carousel w-full mt-[80px]">
          <p className="ml-[15px] font-inter text-[16px] font-bold uppercase border-l-[2px] border-[#D13030] pl-[10px]">вам може сподобатись</p>
          <ItemsSection section={menSectionCarousel}/>
        </div>

        <div className="carousel w-full mt-[80px]">
          <p className="ml-[15px] font-inter text-[16px] font-bold uppercase border-l-[2px] border-[#D13030] pl-[10px]">популярнi товари</p>
          <ItemsSection section={menSectionCarousel}/>
        </div>

      </div>

      
    </div>
  );
}
