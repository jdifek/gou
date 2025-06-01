import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FavoritesIcon, TrashBinIcon } from "../icons";

export const CartItem = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-row justify-between items-end gap-[20px]">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[10px]">
          <Image
            src="/assets/item-placeholder-7.png"
            alt="item"
            width={160}
            height={245}
          />
          <div className="flex flex-col justify-between">
            <div className="text-[14px] font-normal">
              <p>Костюм чоловічий флісовий</p>
              <p>
                Колір: <span className="text-[#888888]">чорний</span>
              </p>
              <p>
                Розмiр: <span className="text-[#888888]">M-L</span>
              </p>
              <p>Кількість: 1</p>
            </div>
            <div className="px-[20px] py-[10px] flex items-center gap-[15px] border-1 border-[#EEEEEE] w-fit mt-[20px] md:mt-0">
              <button className="cursor-pointer">
                <AiOutlineMinus size={20} />
              </button>
              <p className="text-[20px] px-[27px] border-x-1 border-x-[#D9D9D9]">
                1
              </p>
              <button className="cursor-pointer">
                <AiOutlinePlus size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-[16px] font-medium sm:gap-[10px]">
          <p className="line-through">1000 грн</p>
          <p className="text-[#D13030]">399 грн</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <FavoritesIcon className="cursor-pointer w-[16px] h-[16px]" />
          <p className="text-[14px] font-medium">Купити пізніше</p>
        </div>
        <div className="size-[30px] bg-black flex items-center justify-center">
          <TrashBinIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
