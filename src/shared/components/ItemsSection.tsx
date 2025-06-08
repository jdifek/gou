"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { Item } from "./Item";
import { useEffect, useRef, useState } from "react";

type ItemsSectionProps = {
  section?: {
    title: string;
    filters: string[];
    images: string[];
    onlyCarousel?: boolean
  },
};

export const ItemsSection = ({ section }: ItemsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLUListElement>(null);
  const[windowWidth, setWindowWidth] = useState(0);


  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = window.innerWidth * 0.4;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = direction === "left"
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setWindowWidth(window.screen.width);
    window.addEventListener("resize", () => {
      setWindowWidth(window.screen.width);
    })
  }, []);

  useEffect(() => {
    if (windowWidth <= 767) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  return (
    <section className="flex items-center justify-center flex-col w-full">
      {/* title with red vertical line */}
      <div className={`flex items-center gap-3 mt-[72px] mb-[24px] ${section?.onlyCarousel ? "hidden" : ""}`}>
        <div className="w-[3px] h-[28px] bg-[#D13030]" />
        <p className={`${isMobile ? "text-[20px]" : "text-[28px]"} font-bold uppercase`}>{section?.title}</p>
      </div>

      {/* filters */}
      {!section?.onlyCarousel && (
        <div className="w-full px-4">
          <ul
            ref={filtersRef}
            className={`flex items-center gap-[16px] ${windowWidth <= 550 ? "justify-start" : "justify-center"} ${isMobile ? "overflow-x-auto scrollbar-hide" : "flex justify-center"}`}
          >
            {section?.filters.map((filter) => (
              <li
                key={filter}
                className="p-[10px] border-[1px] h-[37px] flex-shrink-0 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* items */}
      <div className="w-full px-4 flex items-center justify-center mt-[24px]">
        <div className={`relative ${section?.onlyCarousel || isMobile ? "w-full" : "w-[75%]"}`}>
          <div
            onClick={() => handleScroll("left")}
            className="absolute top-[215px] -translate-y-1/2 left-[-48px] h-[33px] w-[33px] flex items-center justify-center cursor-pointer bg-[#EEEEEE] hover:bg-gray-200 transition-colors"
          >
            <ArrowLeftIcon />
          </div>
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex items-center gap-[8px] min-w-max">
              {[...Array(10)].map((_, index) => (
                <Item
                  key={index}
                  images={section?.images ?? []}
                  isDiscount={index % 2 === 0}
                  name={section?.title ?? ""}
                />
              ))}
            </div>
          </div>
          <div
            onClick={() => handleScroll("right")}
            className="absolute top-[215px] -translate-y-1/2 -right-[48px] h-[33px] w-[33px] flex items-center justify-center cursor-pointer bg-[#EEEEEE] hover:bg-gray-200 transition-colors"
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </section>
  );
};