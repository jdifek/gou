"use client";
import "./style.css"
import { usePathname } from "next/navigation";
import { menuData } from "../../../data";
import { Item } from "@/shared/components/Item";
import { catalogPlaceholderImages } from "@/shared/utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SettingsIcons } from "@/shared/icons";
import Link from "next/link";
import { filtersData } from "./filtersData";
import { useState } from "react";

type FilterOption = string | { name: string; color: string };

interface FilterData {
  type: string;
  options?: FilterOption[];
  min_price?: number;
  max_price?: number;
}

const allFilters = [
  { id: 1, name: "Від популярного", alwaysVisible: true },
  { id: 2, name: "Розмір", alwaysVisible: true },
  { id: 3, name: "Колір", alwaysVisible: true },
  { id: 4, name: "Ціна", alwaysVisible: true },
  { id: 5, name: "Тканина", alwaysVisible: true },
  { id: 6, name: "Сезонність", alwaysVisible: true },
  { id: 7, name: "Стиль", alwaysVisible: true },
  { id: 8, name: "Акцiя", alwaysVisible: false },
  { id: 9, name: "Технологiя", alwaysVisible: false },
  { id: 10, name: "Виробник", alwaysVisible: false },
  { id: 11, name: "Тип крою", alwaysVisible: false },
  { id: 12, name: "Показати всі фільтри", alwaysVisible: true },
];

const FilterDropdown = ({ 
  title, 
  type, 
  options = [], 
  min_price, 
  max_price, 
  onClose 
}: {
  title: string;
  type: string;
  options?: FilterOption[];
  min_price?: number;
  max_price?: number;
  onClose: () => void;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([min_price || 0, max_price || 0]);
  const [colorInput, setColorInput] = useState<string>("");

  const selectedCount = selectedOptions.length + 
    (type === 'range' && (priceRange[0] !== min_price || priceRange[1] !== max_price) ? 1 : 0);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
  };

  const handleColorInputSubmit = () => {
    if (colorInput.trim() && !selectedOptions.includes(colorInput)) {
      setSelectedOptions(prev => [...prev, colorInput]);
      setColorInput("");
    }
  };

  const resetFilters = () => {
    setSelectedOptions([]);
    setColorInput("");
    if (min_price !== undefined && max_price !== undefined) {
      setPriceRange([min_price, max_price]);
    }
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 p-4 border border-gray-200">
      <div className="mb-4">
        <h3 className={`${type === "range" ? "hidden" : ""} text-[14px] font-medium`}>
          Вибранi фiльтри: {selectedCount}
        </h3>
        {title === "Колір" && (
          <div className="mt-2">
            <input
              type="text"
              value={colorInput}
              onChange={handleColorInputChange}
              onKeyPress={(e) => e.key === "Enter" && handleColorInputSubmit()}
              placeholder=""
              className="w-full border p-1 text-[14px]"
            />
          </div>
        )}
      </div>

      {type === 'checkbox' && (
  <div className="flex flex-col text-[14px] gap-[16px]">
    {options.map((option, idx) => (
      <label key={idx} className="flex items-center gap-2 cursor-pointer">
        <div className="relative border-[1px] border-[#666666]">
          <input
            type="checkbox"
            checked={selectedOptions.includes(typeof option === 'string' ? option : option.name)}
            onChange={() => handleCheckboxChange(typeof option === 'string' ? option : option.name)}
            className="absolute opacity-0 w-0 h-0"
          />
          <div className={`custom-checkbox ${
            selectedOptions.includes(typeof option === 'string' ? option : option.name) ? 'checked' : ''
          }`}>
            <div className="checkmark"></div>
          </div>
        </div>
        {typeof option === 'string' ? (
          <span>{option}</span>
        ) : (
          <>
            <div 
              className="w-4 h-4 border border-gray-300"
              style={{ backgroundColor: option.color }}
            />
            <span>{option.name}</span>
          </>
        )}
      </label>
    ))}
  </div>
)}
{type === 'color' && (
  <div className="flex flex-col text-[14px] gap-[16px]">
    {options.map((option, idx) => {
      if (typeof option !== 'string') {
        return (
          <label key={idx} className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.name)}
                onChange={() => handleCheckboxChange(option.name)}
                className="absolute opacity-0 w-0 h-0"
              />
              <div className={`custom-checkbox ${
                selectedOptions.includes(option.name) ? 'checked' : ''
              }`}>
                <div className="checkmark"></div>
              </div>
            </div>
            <div 
              className="w-4 h-4 border border-gray-300"
              style={{ backgroundColor: option.color }}
            />
            <span>{option.name}</span>
          </label>
        );
      }
      return null;
    })}
  </div>
)}

      {type === 'range' && min_price !== undefined && max_price !== undefined && (
        <div className="space-y-4">
          <div className="flex justify-between">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
              className="w-24 border p-1"
              min={min_price}
              max={max_price}
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
              className="w-24 border p-1"
              min={min_price}
              max={max_price}
            />
          </div>
          <input
            type="range"
            min={min_price}
            max={max_price}
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
            className="w-full"
          />
          <input
            type="range"
            min={min_price}
            max={max_price}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      <div className="flex flex-col-reverse justify-between mt-[30px] gap-[16px] text-[14px]">
        <button 
          onClick={resetFilters}
          className="w-full h-[18px] text-[#1C1C28] cursor-pointer font-semibold"
        >
          Скинути фільтри
        </button>
        <button 
          onClick={onClose}
          className="bg-[#1C1C28] text-white w-full h-[44px] cursor-pointer"
        >
          Ок
        </button>
      </div>
    </div>
  );
};

export default function SubcategoryPage() {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showAllFilters, setShowAllFilters] = useState(false);

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

  const toggleFilter = (filterName: string) => {
    if (filterName === "Показати всі фільтри") {
      setShowAllFilters(!showAllFilters);
      setActiveFilter(null);
    } else {
      setActiveFilter(activeFilter === filterName ? null : filterName);
    }
  };

  return (
    <div>
      <div className="flex items-center flex-wrap gap-x-[16px] w-full mb-[24px] relative">
        {allFilters.map((option) => {
          if (!option.alwaysVisible && !showAllFilters) return null;

          const filterData = filtersData[option.name as keyof typeof filtersData] as FilterData;
          return (
            <div key={option.id} className="relative w-[25%]">
              <div
                onClick={() => toggleFilter(option.name)}
                className="flex items-center justify-center h-[40px] border-b-1 border-[#EEEEEE] relative cursor-pointer"
              >
                {option.id === 12 && <SettingsIcons className="absolute left-3" />}
                <p className="text-[14px] font-medium">{option.name}</p>
                <MdKeyboardArrowDown
                  size={20}
                  className="absolute right-0 text-[#898686]"
                />
              </div>
              
              {activeFilter === option.name && (
                <FilterDropdown
                  title={option.name}
                  type={filterData.type}
                  options={filterData.options}
                  min_price={filterData.min_price}
                  max_price={filterData.max_price}
                  onClose={() => setActiveFilter(null)}
                />
              )}
            </div>
          );
        })}
      </div>

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