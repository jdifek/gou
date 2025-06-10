"use client"

import React, { useEffect, useState } from 'react';
import ProfileItem from '@/shared/components/ProfileItem';
import { RiArrowLeftSLine } from 'react-icons/ri'; // Import the left arrow icon

import img from "../../../public/assets/item-placeholder-7.png";
import { StaticImageData } from 'next/image';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  image: StaticImageData;
  size: string;
  model: string;
  availability: string;
  prevPrice: number;
}

interface Order {
  id: string;
  orderNumber: string;
  status: string;
  date: string;
  total: number;
  products: Product[];
}

const Profile: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isHideInfo, setIsHideInfo] = useState(false);

  const menuItems = ["Мої дані", "Історія замовлень", "Обране"];

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    console.log(isMobile);
  }, []);

  useEffect(() => {
    if (windowWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log(windowWidth);
  }, [windowWidth]);

  useEffect(() => {
    !isMobile ? setActiveMenu("Історія замовлень") : setActiveMenu("");
  }, [isMobile]);

  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "№13245",
      status: "Виконано",
      date: "22.02.2024",
      total: 400,
      products: [
        { 
          id: 1, 
          name: "Костюм чоловічий флісовий чорний", 
          originalPrice: 199, 
          image: img, 
          size: "M-L",  
          model: "755GR", 
          availability: "наявності", 
          prevPrice: 599 
        },
        { 
          id: 2, 
          name: "Лонгслив жіночий бежевий", 
          originalPrice: 199, 
          image: img, 
          size: "M",  
          model: "755GR", 
          availability: "наявності", 
          prevPrice: 599 
        },
      ]
    },
    {
      id: "2",
      orderNumber: "№13334",
      status: "Відмінено",
      date: "24.02.2024",
      total: 300,
      products: [
        { 
          id: 3, 
          name: "Кавомолка", 
          originalPrice: 399, 
          image: img, 
          size: "M-L",  
          model: "75SGR", 
          availability: "наявності", 
          prevPrice: 559 
        },
      ]
    }
  ];

  const favoriteProducts = [
    orders[0].products[0], 
    orders[0].products[1],
    orders[1].products[0],
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Історія замовлень":
        if (isMobile) {
          return (
            <div className="w-full p-4">
              <h2 onClick={() => window.location.reload()} className="cursor-pointer text-xl font-semibold mb-6 text-center flex items-center justify-between">
                <RiArrowLeftSLine 
                  className="mr-2 cursor-pointer" 
                />
                <span className='mx-auto'>Історія замовлень</span>
              </h2>
              {orders.map((order) => (
                <div key={order.id} className="bg-white p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold">№{order.orderNumber}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                    <p className={`text-sm ${order.status === "Виконано" ? "text-green-600" : "text-red-600"}`}>
                      {order.status}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[30px]">
                    {order.products.map((product) => (
                      <ProfileItem 
                        key={product.id}
                        item={product}
                        isButton={false}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end mt-2">
                    <p className="text-lg font-semibold">Всього: {order.total} €</p>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return (
          <div className="w-full bg-[#FAFAFA] p-[30px]">
            <h2 className="text-[20px] font-semibold mb-[30px]">Історія замовлень</h2>
            {orders.map((order) => (
              <div key={order.id} className="bg-transparent mb-6">
                <div className="flex justify-between mb-[30px]">
                  <div>
                    <p className="text-[16px] font-semibold">№ Замовлення</p>
                    <p className="font-medium mt-[30px]">{order.orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Статус</p>
                    <p className="font-medium mt-[30px] text-green-600">{order.status}</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Дата</p>
                    <p className="font-medium mt-[30px]">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Сума</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  {order.products.map((product) => (
                    <ProfileItem 
                      key={product.id}
                      item={product}
                      isButton={false}
                    />
                  ))}
                </div>
                <div className="flex justify-end mt-[30px]">
                  <div className="text-lg font-semibold">
                    Всього: <span>{order.total} грн</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Мої дані":
        if (isMobile) {
          return (
            <div className="w-full p-4">
              <h2 onClick={() => window.location.reload()} className="flex justify-between cursor-pointer text-xl font-semibold mb-6 text-center items-center">
                <RiArrowLeftSLine 
                  className="mr-2 cursor-pointer" 
                />
                <span className='mx-auto'>Мої дані</span>
              </h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Основна інформація</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
                    <p className="text-[16px]">Ім'я</p>
                    <p className="text-[16px]">Вікторія</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
                    <p className="text-[16px]">Прізвище</p>
                    <p className="text-[16px]">Олійник</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
                    <p className="text-[16px]">Пошта</p>
                    <p className="text-[16px]">viktoria@gmail.com</p>
                  </div>
                </div>
                <div className="flex justify-end mt-3">
                  <button className="text-[#45B7FE] text-[14px]">Редагувати</button>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-center">Контакти та адреса доставки</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
                    <p className="text-[16px]">Телефон</p>
                    <p className="text-[16px]">+380631261861</p>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2">
                    <p className="text-[16px]">Пошта</p>
                    <p className="text-[16px]">viktoria@gmail.com</p>
                  </div>
                </div>
                <div className="flex justify-end mt-3">
                  <button className="text-[#45B7FE] text-[14px]">Редагувати</button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Адреса</h3>
                <div className="flex justify-between items-center border-b border-[#EEEEEE] pb-2 mb-4">
                  <p className="text-[16px]">Адреса</p>
                  <p className="text-[16px]">Одеса, вул. Мельницька, 112</p>
                </div>
                <div className="flex justify-between">
                  <button className="text-[#45B7FE] text-[14px]">+ Додати ще адресу</button>
                  <button className="text-[#45B7FE] text-[14px]">Редагувати</button>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full bg-[#FAFAFA] p-8">
              <h2 className="text-[20px] font-semibold mb-[20px]">ОСНОВНА ІНФОРМАЦІЯ</h2>
              <div className="">
                <div className="grid grid-cols-4 gap-4 items-center border-b border-[#EEEEEE] pb-[15px]">
                  <div>
                    <p className="text-[16px] font-semibold">Ім’я</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Прізвище</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">Пошта</p>
                  </div>
                  <div></div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center pt-[15px]">
                  <div>
                    <p className="text-[14px]">Вікторія</p>
                  </div>
                  <div>
                    <p className="text-[14px]">Олінник</p>
                  </div>
                  <div>
                    <p className="text-[14px]">viktoria@gmail.com</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#45B7FE] text-[14px] cursor-pointer">Редагувати</p>
                  </div>
                </div>
                <div className="mt-[60px]">
                  <p className="text-[20px] font-semibold mb-[20px]">КОНТАКТИ ТА АДРЕСА ДОСТАВКИ</p>
                  <div className="grid grid-cols-4 gap-4 items-center border-b border-[#EEEEEE] pb-[15px]">
                    <div>
                      <p className="text-[16px] font-semibold">Телефон</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold">Пошта</p>
                    </div>
                    <div></div> 
                    <div></div> 
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center mb-4 pt-[15px]">
                    <div>
                      <p className="text-[14px]">+380631261861</p>
                    </div>
                    <div>
                      <p className="text-[14px]">viktoria@gmail.com</p>
                    </div>
                    <div></div> 
                    <div className="text-right">
                      <p className="text-[#45B7FE] text-[14px] cursor-pointer">Редагувати</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-lg font-semibold mb-4 border-b border-[#EEEEEE] pb-[15px]">АДРЕСА</p>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <p className="text-[16px] col-span-3">Одеса, вул. Мельничука, 112</p>
                    <div className="text-right">
                      <button className="text-[#45B7FE] text-[14px] cursor-pointer">Редагувати</button>
                    </div>
                  </div>
                  <p className="text-[#45B7FE] text-[14px] cursor-pointer mt-[20px]">+ Додати ще адресу</p>
                </div>
              </div>
            </div>
          );
        }
      case "Обране":
        if (isMobile) {
          return (
            <div className="w-full p-4">
              <h2 onClick={() => window.location.reload()} className="cursor-pointer text-xl font-semibold mb-6 text-center flex items-center justify-between">
                <RiArrowLeftSLine 
                  className="mr-2 cursor-pointer" 
                   
                />
                <span className='mx-auto'>Обране</span>
              </h2>
              {favoriteProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 mb-4">
                  <ProfileItem 
                    key={product.id}
                    item={product}
                    isButton={true}
                  />
                </div>
              ))}
            </div>
          );
        }
        return (
          <div className="w-full bg-[#FAFAFA] p-[30px]">
            <h2 className="text-[20px] font-semibold mb-[30px]">Обране</h2>
            <div className="flex flex-col gap-[30px]">
              {favoriteProducts.map((product) => (
                <ProfileItem
                  key={product.id}
                  item={product}
                  isButton={true}
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className={`${isMobile ? "text-center" : ""} text-2xl font-bold mb-4`}>ОСОБИСТИЙ КАБІНЕТ</h1>
      {isMobile ? (
        <>
          <p className={`mb-4 text-[14px] ${isHideInfo ? "hidden" : ""}`}>
            В особистому кабінеті ви можете подивитися історію ваших замовлень, змінити адресу електронної пошти, відредагувати і додати нову адресу доставки, управляти збереженими закладками, підписатися або скасувати підписку на нашу розсилку новин, роздрукувати рахунок і багато іншого.
          </p>
          <p className={`mb-4 text-[14px] ${isHideInfo ? "hidden" : ""}`}>Якщо у вас є питання до нас, заповніть форму зворотнього зв'язку на сторінці "Контакти".</p>
          <div className={`flex flex-col gap-4 ${isHideInfo ? "hidden" : ""}`} style={{ borderLeft: "3px solid #D13030" }}>
            {menuItems.map((item) => (
              <div
                key={item}
                className={`font-semibold pl-4 py-2 cursor-pointer text-[16px] ${activeMenu === item ? "text-[#D13030] border-l-4 border-[#D13030]" : "text-[#1C1C28]"}`}
                onClick={() => {
                  setActiveMenu(item);
                  setIsHideInfo(true);
                }}
              >
                {item}
              </div>
            ))}
          </div>
          {renderContent()} {/* Add renderContent here for mobile */}
        </>
      ) : (
        <>
          <p className="mb-4 leading-[30px] text-[14px]">
            В особистому кабінеті ви можете подивитися історію ваших замовлень, змінити адресу електронної пошти, відредагувати і додати нову <br /> адресу доставки, управляти збереженими закладками, підписатися або скасувати підписку на нашу розсилку новин, роздрукувати рахунок <br /> і багато іншого.
          </p>
          <p className="text-[14px]">Якщо у вас є питання до нас, заповніть форму зворотнього зв'язку на сторінці "Контакти".</p>
          <div className="flex gap-[100px] mt-[30px]">
            <div className="w-[350px] flex flex-col">
              <div style={{ borderLeft: "3px solid #D13030" }}>
                {menuItems.map((item, i) => (
                  <div
                    key={item}
                    className={`font-semibold pl-[30px] cursor-pointer ${i == 0 || i == 1 ? "pb-[15px]" : ""} text-[20px] ${activeMenu === item ? "text-[#D13030]" : "text-[#1C1C28]"}`}
                    onClick={() => setActiveMenu(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {renderContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;