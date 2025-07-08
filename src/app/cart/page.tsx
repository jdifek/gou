import { CartItem } from "@/shared/components/CartItem";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col gap-[24px] container px-[12px] mt-[48px]">
        <p className="text-[18px] font-medium uppercase">Кошик (3)</p>
        <div className="hidden md:block w-full md:w-[70%] bg-[#FAFAFA] border-1 border-black p-[30px] text-[14px]">
          <p>В кошику 1 товар на суму 199 грн</p>
          <p>
            <span className="font-bold">Важливо:</span> сума товарів для знижки
            рахується по нижній ціні товару.
          </p>
          <p className="mt-[24px]">
            Добери <span className="text-[#0F9E2C] font-bold">801 грн</span> і
            отримай ще нижчу ціну.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-[20px]">
          <div className="p-[30px] bg-[#FAFAFA] w-full lg:w-[70%]">
            <CartItem />
            <hr className="border-1 border-[#D8DADC] my-[30px]" />
            <CartItem />
            <hr className="border-1 border-[#D8DADC] my-[30px]" />
            <CartItem />
          </div>
          <div className="p-[20px] bg-[#FAFAFA] w-full lg:w-[30%] h-fit flex flex-col gap-[30px] font-inter">
            <p className="text-[24px] font-bold">Разом</p>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-bold">2 товари на суму</p>
                <p className="text-[14px]">2100 ₴</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-bold">Знижка</p>
                <p className="text-[14px] text-[#D13030]"> -598 ₴</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-bold">Доставка</p>
                <p className="text-[14px] w-[100px] text-right">
                  За тарифами перевiзника
                </p>
              </div>
            </div>
            <div className="flex justify-between text-[14px] font-bold">
              <p>До сплати</p>
              <p>1098 ₴</p>
            </div>
            <Link href={"/checkout"}>
                <button className="w-full text-center bg-black text-white text-[14px] font-normal h-[44px] cursor-pointer">
                  Оформити замовлення
                </button>
              </Link>
            <p className="text-[#888888] underline text-[12px] font-medium text-center cursor-pointer">
              Пiдвердждуючи замовлення, я приймаю умови.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
