"use client";
import { usePathname } from "next/navigation";
import { menuData } from "../../../data";
import { Item } from "@/shared/components/Item";
import { catalogPlaceholderImages } from "@/shared/utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SettingsIcons } from "@/shared/icons";
import Link from "next/link";

const sortOptions = [
  {
    id: 1,
    name: "Від популярного",
  },
  {
    id: 2,
    name: "Розмір",
  },
  {
    id: 3,
    name: "Колір",
  },
  {
    id: 4,
    name: "Ціна",
  },
  {
    id: 5,
    name: "Тканина",
  },
  {
    id: 6,
    name: "Сезонність",
  },
  {
    id: 7,
    name: "Стиль",
  },
  {
    id: 8,
    name: "Показати всі фільтри",
  },
];
export default function SubcategoryPage() {
  const pathname = usePathname();

  console.log(pathname);

  const getSelectedSubtab = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 4) {
      const mainTabPath = segments[2];
      const subtabPath = segments[3];

      const mainTab = menuData.find((tab) => tab.path === mainTabPath);
      if (!mainTab) return null;

      return (
        mainTab.subtabs.find((subtab) => subtab.path === subtabPath) || null
      );
    }
    return null;
  };

  const selectedSubtab = getSelectedSubtab();

  if (!selectedSubtab) return null;

  return (
    <div>
      <div className="flex items-center flex-wrap gap-x-[16px] w-full mb-[24px]">
        {sortOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center justify-center w-[25%] h-[40px] border-b-1 border-[#EEEEEE] relative"
          >
            {option.id === 8 && <SettingsIcons className="absolute left-3" />}
            <p className="text-[14px] font-medium">{option.name}</p>
            <MdKeyboardArrowDown
              size={20}
              className="absolute right-0 text-[#898686]"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex items-center h-[20px] gap-[10px] mb-[24px]">
        <div className="w-[2px] h-[100%] bg-[#D13030]" />
        <p className="text-[16px] font-medium uppercase">
          {selectedSubtab.name}
        </p>
      </div> */}
      <div className="flex gap-[6px] items-center flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Link
            href={`${pathname}/${item}`}
            key={item}
            className="cursor-pointer"
          >
            <Item
              isDiscount={false}
              images={catalogPlaceholderImages}
              name={`${selectedSubtab.name} ${item}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
