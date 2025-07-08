"use client";
import { CartItem } from "@/shared/components/CartItem";
import { SearchIcon } from "@/shared/icons";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex py-[40px] flex-col items-center w-full">
      <div className="flex md:py-[40px] flex-col w-full container px-[12px] md:px-[20px]">
        <p
          className="md:mb-[20px] font-semibold text-[18px] text-center uppercase text-[#1c1c28]"
          style={{ fontFamily: "var(--font-family)" }}
        >
          Оформлення замовлення
        </p>
        <div className=" items-center gap-[8px] hidden md:flex">
          <span
            className="font-medium text-[14px] leading-[137%] text-[#848484] underline"
            style={{
              fontFamily: "var(--font-family)",
              textDecorationSkipInk: "none",
            }}
          >
            Головна
          </span>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_428)">
              <path
                d="M0.5 11L5.5 6.01L0.5 1"
                stroke="#848484"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_428">
                <rect width="6" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            className="font-medium text-[14px] leading-[137%] text-[#212121]"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Кошик
          </span>
          <svg
            width="6"
            height="12"
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_428)">
              <path
                d="M0.5 11L5.5 6.01L0.5 1"
                stroke="#848484"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_428">
                <rect width="6" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            className="font-medium text-[14px] leading-[137%] text-[#212121]"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Оформлення
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] container px-[12px] mt-[48px]">
        <div className="flex gap-[30px] flex-wrap">
          {/* Левая часть */}
          <div className="flex-1 flex flex-col gap-[30px] md:gap-[50px]">
            {/* Контактні дані */}
            <div className="py-[30px] px-[10px] bg-[#fafafa]">
              <p
                className="font-semibold text-[20px] mb-[30px] leading-[130%] text-[#1c1c28]"
                style={{ fontFamily: "var(--font-family)" }}
              >
                Ваші контактні дані
              </p>

              <div className="flex items-center justify-between h-[38px] mb-[30px] w-full bg-white border-b border-[#888] px-[10px] py-[10px]">
                <input
                  type="text"
                  className="flex-grow text-[14px] leading-[122%] font-medium text-[#1c1c28] outline-none"
                  placeholder="Ваше ім’я"
                  style={{ fontFamily: "var(--font-family)" }}
                />
                <span
                  className="text-[14px] font-medium leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </span>
              </div>

              <div className="flex items-center justify-between h-[38px] w-full bg-white border-b border-[#888] px-[10px] py-[10px]">
                <input
                  type="text"
                  className="flex-grow text-[14px] leading-[122%] font-medium text-[#1c1c28] outline-none"
                  placeholder="Ваше вулиця"
                  style={{ fontFamily: "var(--font-family)" }}
                />
                <span
                  className="text-[14px] font-medium leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </span>
              </div>
            </div>

            {/* CartItems */}
            <div className="p-[30px] bg-[#fafafa]">
              <CartItem />
              <hr className="border-1 border-[#D8DADC] my-[30px]" />
              <CartItem />
              <hr className="border-1 border-[#D8DADC] my-[30px]" />
              <CartItem />
            </div>

            <div className="py-[30px] px-[10px] bg-[#fafafa]">
              <p
                className="font-semibold text-[20px] mb-[30px] leading-[130%] text-[#1c1c28]"
                style={{ fontFamily: "var(--font-family)" }}
              >
                Доставка
              </p>

              <div className="hidden md:block px-[10px]">
                <div className=" px-[10px] flex justify-between items-center">
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        fill="#D13030"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                    <p
                      className="text-[16px] font-normal leading-[100%] tracking-[0.03em] text-black"
                      style={{ fontFamily: "var(--font-family)" }}
                    >
                      Самовивіз з поштоматів
                      <br />
                      Нова Пошта
                    </p>
                  </div>
                  <p
                    className="text-[16px] font-semibold leading-[125%] text-center text-[#1c1c28]"
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    139 грн
                  </p>
                </div>

                <div className="mb-[30px]">
                  <hr className="px-[10px] text-[#888] mt-[10px]" />
                  <div
                    onClick={toggleOpen}
                    className="flex px-[20px] justify-between items-center cursor-pointer"
                  >
                    <p
                      className="block py-[22px] text-[16px] font-normal leading-[100%] tracking-[0.03em] text-[#888]"
                      style={{ fontFamily: "var(--font-family)" }}
                    >
                      Виберіть відповідний поштомат
                    </p>
                    <svg
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      <g clipPath="url(#clip0_29_56)">
                        <path
                          d="M0.832893 1.18897C0.791877 1.26697 0.775764 1.35684 0.784553 1.45844C0.793342 1.56004 0.827033 1.63817 0.885627 1.69284L9.05945 9.86079L0.885627 18.0405C0.827033 18.0952 0.793342 18.1713 0.784553 18.269C0.775764 18.3667 0.791877 18.4584 0.832893 18.5444C0.879768 18.6225 0.939826 18.6674 1.01307 18.6791C1.08632 18.6909 1.15223 18.6694 1.21083 18.6147L9.67468 10.1538C9.70398 10.1225 9.72888 10.0815 9.74939 10.0307C9.7699 9.97993 9.78015 9.92329 9.78015 9.86079C9.78015 9.80611 9.7699 9.75337 9.74939 9.70259C9.72888 9.6518 9.70398 9.61079 9.67468 9.57953L1.21083 1.11857C1.15223 1.05604 1.08632 1.03271 1.01307 1.04831C0.939826 1.06391 0.879768 1.11084 0.832893 1.18897Z"
                          fill="#888888"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_29_56">
                          <rect
                            width="20"
                            height="10"
                            fill="white"
                            transform="matrix(0 -1 1 0 0 20)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <hr className="px-[10px] text-[#888] mb-[10px]" />

                  {isOpen && (
                    <div className="px-[20px] py-[10px]">
                      <div
                        className="flex items-center justify-between gap-[10px]"
                        style={{
                          borderBottom: "1px solid #888",
                          padding: "10px",
                          height: "39px",
                        }}
                      >
                        <button type="button" className="ml-[10px]">
                        <SearchIcon />
                        </button>
                        <input
                          type="text"
                          placeholder="Знайдіть потрібний поштомат за номером або адресою"
                          className="outline-none w-full"
                          style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0.03em",
                            color: "#888",
                            background: "transparent",
                          }}
                        />
                      </div>

                      <ul className="space-y-[8px] text-[14px] text-[#1c1c28] mt-[20px]">
                        {Array.from({ length: 6 }).map((_, idx) => (
                          <li key={idx}>№1234, Одеса вул. Мельницька 112</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="px-[10px] mb-[30px] flex justify-between items-center">
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6.5"
                        fill="white"
                        stroke="#888888"
                      />
                    </svg>
                    <p
                      className="text-[16px] font-normal leading-[100%] tracking-[0.03em] text-black"
                      style={{ fontFamily: "var(--font-family)" }}
                    >
                      Самовивіз з відділення
                      <br />
                      Нова Пошта
                    </p>
                  </div>
                  <p
                    className="text-[16px] font-semibold leading-[125%] text-center text-[#1c1c28]"
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    139 грн
                  </p>
                </div>
                <div className="px-[10px] mb-[30px] flex justify-between items-center">
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6.5"
                        fill="white"
                        stroke="#888888"
                      />
                    </svg>
                    <p
                      className="text-[16px] font-normal leading-[100%] tracking-[0.03em] text-black"
                      style={{ fontFamily: "var(--font-family)" }}
                    >
                      Самовивіз з відділення
                      <br />
                      УКРПОШТА
                    </p>
                  </div>
                  <p
                    className="text-[16px] font-semibold leading-[125%] text-center text-[#1c1c28]"
                    style={{ fontFamily: "var(--font-family)" }}
                  >
                    139 грн
                  </p>
                </div>
              </div>

              <Link
                href={"/checkout-mobile-delivery"}
                className="h-[38px] md:hidden  border border-[#888] bg-white px-[10px] flex justify-between items-center"
              >
                <p
                  className="font-normal text-[16px] leading-[100%] tracking-[0.03em] text-[#1c1c28]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Самовивіз з Нової Пошти
                </p>
                <p
                  className="font-medium text-[14px] leading-[122%] text-black"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  119 грн
                </p>
              </Link>
              <Link
                href={"/checkout-mobile-delivery"}
                className="mt-[10px] h-[38px] md:hidden  border border-[#888] bg-white px-[10px] flex justify-between items-center"
              >
                <p
                  className="font-normal text-[16px] leading-[100%] tracking-[0.03em] text-[#1c1c28]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Самовивіз з Нової Пошти
                </p>
                <p
                  className="font-medium text-[14px] leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </p>
              </Link>
            </div>
            <div className="py-[30px] px-[10px] bg-[#fafafa]">
              <p
                className="font-semibold text-[20px] mb-[30px] leading-[130%] text-[#1c1c28]"
                style={{ fontFamily: "var(--font-family)" }}
              >
                Оплата
              </p>
              <Link
                href={"/checkout-mobile-payments"}
                className="mt-[10px] h-[38px] md:hidden  border border-[#888] bg-white px-[10px] flex justify-between items-center"
              >
                <p
                  className="font-normal text-[16px] leading-[100%] tracking-[0.03em] text-[#1c1c28]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Карткою онлайн
                </p>
                <p
                  className="font-medium text-[14px] leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </p>
              </Link>
              <div className="hidden md:block  px-[10px]">
                {[
                  "Оплата під час отримання товару",
                  "Оплатити карткою у відділені пошти",
                  "Оплатити зараз",
                ].map((el, index) => (
                  <div
                    key={index}
                    className="px-[10px] mb-[30px] flex justify-between items-center"
                  >
                    <div className="flex gap-[10px] items-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="6.5"
                          fill="white"
                          stroke="#888888"
                        />
                      </svg>
                      <p
                        className="text-[16px] w-[180px] font-normal leading-[100%] tracking-[0.03em] text-black"
                        style={{ fontFamily: "var(--font-family)" }}
                      >
                        {el}
                      </p>
                    </div>
                    <p
                      className="text-[16px] font-semibold leading-[125%] text-center text-[#1c1c28]"
                      style={{ fontFamily: "var(--font-family)" }}
                    >
                      139 грн
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-[30px] px-[10px] bg-[#fafafa]">
              <p
                className="font-semibold text-[20px] mb-[30px] leading-[130%] text-[#1c1c28]"
                style={{ fontFamily: "var(--font-family)" }}
              >
                Отримувач замовлення
              </p>

              <div className="flex items-center justify-between h-[38px] mb-[30px] w-full bg-white border-b border-[#888] px-[10px] py-[10px]">
                <input
                  type="text"
                  className="flex-grow text-[14px] leading-[122%] font-medium text-[#1c1c28] outline-none"
                  placeholder="Iм’я"
                  style={{ fontFamily: "var(--font-family)" }}
                />
                <span
                  className="text-[14px] font-medium leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </span>
              </div>

              <div className="flex items-center justify-between h-[38px] w-full bg-white border-b border-[#888] px-[10px] py-[10px]">
                <input
                  type="text"
                  className="flex-grow text-[14px] leading-[122%] font-medium text-[#1c1c28] outline-none"
                  placeholder="+380-123-1234"
                  style={{ fontFamily: "var(--font-family)" }}
                />
                <span
                  className="text-[14px] font-medium leading-[122%] text-[#45b7fe]"
                  style={{ fontFamily: "var(--font-family)" }}
                >
                  Змінити
                </span>
              </div>
            </div>
          </div>
          {/* Правая часть */}
          <div className="flex flex-col w-full md:w-[300px]">
            <div className="mb-[12px] p-[20px] bg-[#FAFAFA] h-fit flex flex-col gap-[30px] font-inter">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[20px] leading-[130%] text-[#1c1c28]">
                  Промокод
                </span>
                <span className="font-normal text-[16px] leading-[100%] tracking-[0.03em] text-[#45b7fe]">
                  Додати +
                </span>
              </div>
            </div>
            <div className="p-[20px] bg-[#FAFAFA] h-fit flex flex-col gap-[30px] font-inter">
              <p className="text-[24px] font-bold">Разом</p>
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold">2 товари на суму</p>
                  <p className="text-[14px]">2100 ₴</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold">Знижка</p>
                  <p className="text-[14px] text-[#D13030]">-598 ₴</p>
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
              <Link href={"/success-order"}>
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
    </div>
  );
}
