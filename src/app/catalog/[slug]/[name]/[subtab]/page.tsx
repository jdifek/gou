"use client";
import "./style.css";
import { usePathname } from "next/navigation";
import { menuData } from "../../../data";
import { Item } from "@/shared/components/Item";
import { catalogPlaceholderImages } from "@/shared/utils";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SettingsIcons } from "@/shared/icons";
import Link from "next/link";
import { filtersData } from "./filtersData";
import { useEffect, useState } from "react";

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

const MobileFiltersModal = ({
  isOpen,
  onClose,
  onApply,
}: {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}) => {
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState<Record<string, [number, number]>>({});

  const toggleFilter = (filterName: string) => {
    setExpandedFilter(expandedFilter === filterName ? null : filterName);
  };

  const handleCheckboxChange = (filterName: string, option: string | { name: string; color: string }) => {
    const optionName = typeof option === "string" ? option : option.name;
    setSelectedOptions((prev) => ({
      ...prev,
      [filterName]: prev[filterName]?.includes(optionName)
        ? prev[filterName].filter((item) => item !== optionName)
        : [...(prev[filterName] || []), optionName],
    }));
  };

  const handlePriceChange = (filterName: string, index: number, value: number) => {
    setPriceRange((prev) => {
      const currentRange = prev[filterName] || [0, 0];
      const newRange = [...currentRange] as [number, number];
      newRange[index] = value;
      return { ...prev, [filterName]: newRange };
    });
  };

  const priceFilter = allFilters.find(filter => filter.name === "Ціна");
  const otherFilters = allFilters.filter(filter => 
    filter.name !== "Показати всі фільтри" && 
    filter.name !== "Ціна"
  );

  const resetFilters = () => {
    setSelectedOptions({});
    setPriceRange({});
    setExpandedFilter(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white shadow-md border border-gray-200">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-row-reverse justify-between items-center">
            <button onClick={onClose} className="text-[#1C1C28] text-2xl">
              ×
            </button>
            <h2 className="text-[14px] font-medium m-auto font-bold">Фільтри</h2>
            
          </div>
        </div>

        {/* Filters list with scroll */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {/* Остальные фильтры (аккордеон) */}
            {otherFilters.map((filter) => {
              const filterData = filtersData[filter.name as keyof typeof filtersData] as FilterData;

              return (
                <div key={filter.id} className="border-b border-gray-200 pb-2">
                  <div
                    className="flex justify-between items-center py-3 cursor-pointer"
                    onClick={() => toggleFilter(filter.name)}
                  >
                    <span className="text-[14px] font-medium">{filter.name}</span>
                    <MdKeyboardArrowDown
                      className={`transition-transform ${expandedFilter === filter.name ? "rotate-180" : ""}`}
                    />
                  </div>

                  {expandedFilter === filter.name && (
                    <div className="pb-3">
                      {/* Рендеринг содержимого фильтра */}
                      {filterData.type === "checkbox" && (
                        <div className="flex flex-col text-[14px] gap-[16px]">
                          {filterData.options?.map((option, idx) => (
                            <label key={idx} className="flex items-center gap-2 cursor-pointer">
                            <div className="relative border-[1px] border-[#666666]">
                              <input
                                type="checkbox"
                                checked={selectedOptions[filter.name]?.includes(typeof option === "string" ? option : option.name) || false}
                                onChange={() => handleCheckboxChange(filter.name, option)}
                                className="absolute opacity-0 w-0 h-0"
                              />
                              <div
                                className={`custom-checkbox ${
                                  selectedOptions[filter.name]?.includes(typeof option === "string" ? option : option.name) ? "checked" : ""
                                }`}
                              >
                                <div className="checkmark"></div>
                              </div>
                            </div>
                            {typeof option === "string" ? (
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
                    </div>
                  )}
                </div>
              );
            })}

            {/* Фильтр "Ціна" - всегда открыт */}
            {priceFilter && (
              <div className="border-b border-gray-200 pb-2">
                <div className="flex justify-center items-center py-3">
                  <span className="text-[14px] font-medium">{priceFilter.name}</span>
                </div>
                <div className="pb-3">
                  {/* Рендеринг фильтра цены */}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <input
                        type="number"
                        value={priceRange[priceFilter.name]?.[0] || filtersData["Ціна"].min_price || 0}
                        onChange={(e) => handlePriceChange(priceFilter.name, 0, parseInt(e.target.value))}
                        className="w-24 h-8 border p-1 text-[14px]"
                        min={filtersData["Ціна"].min_price}
                        max={filtersData["Ціна"].max_price}
                      />
                      <input
                        type="number"
                        value={priceRange[priceFilter.name]?.[1] || filtersData["Ціна"].max_price || 0}
                        onChange={(e) => handlePriceChange(priceFilter.name, 1, parseInt(e.target.value))}
                        className="w-24 h-8 border p-1 text-[14px]"
                        min={filtersData["Ціна"].min_price}
                        max={filtersData["Ціна"].max_price}
                      />
                    </div>
                    <input
                      type="range"
                      min={filtersData["Ціна"].min_price}
                      max={filtersData["Ціна"].max_price}
                      value={priceRange[priceFilter.name]?.[0] || filtersData["Ціна"].min_price || 0}
                      onChange={(e) => handlePriceChange(priceFilter.name, 0, parseInt(e.target.value))}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min={filtersData["Ціна"].min_price}
                      max={filtersData["Ціна"].max_price}
                      value={priceRange[priceFilter.name]?.[1] || filtersData["Ціна"].max_price || 0}
                      onChange={(e) => handlePriceChange(priceFilter.name, 1, parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Apply button */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-col-reverse gap-[16px]">
            <button
              onClick={resetFilters}
              className="w-full h-[18px] text-[#1C1C28] cursor-pointer font-semibold text-[14px]"
            >
              Скинути фільтри
            </button>
            <button
              onClick={() => {
                onApply();
                onClose();
              }}
              className="bg-[#1C1C28] text-white w-full h-[44px] cursor-pointer text-[14px]"
            >
              Показати результати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SubcategoryPage() {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedTab, setSelectedTab] = useState<any>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Block scroll when mobile filters are open
  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMobile(windowWidth <= 767);
  }, [windowWidth]);

  const getSelectedSubtab = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 4) {
      const mainTabPath = segments[2];
      const subtabPath = segments[3];

      const mainTab = menuData.find((tab) => tab.path === mainTabPath);
      if (!mainTab) return null;

      return mainTab.subtabs.find((subtab) => subtab.path === subtabPath) || null;
    }
    return null;
  };

  const selectedSubtab = getSelectedSubtab();

  if (!selectedSubtab) return null;

  const handleTabClick = (tab: any) => {
    setSelectedTab(selectedTab?.id === tab.id ? null : tab);
  };

  const toggleFilter = (filterName: string) => {
    if (filterName === "Показати всі фільтри") {
      setShowAllFilters(!showAllFilters);
      setActiveFilter(null);
    } else {
      setActiveFilter(activeFilter === filterName ? null : filterName);
    }
  };

  return (
    <div className={isMobileFiltersOpen ? "h-screen overflow-hidden" : ""}>
      {isMobile && (
        <div className="w-full overflow-x-auto whitespace-nowrap mb-4 px-4 py-2 bg-white">
          <div className="flex gap-2 justify-start">
            {menuData.map((item) => (
              <div
                key={item.id}
                className="min-w-[100px] flex justify-center items-center border border-[#888888] cursor-pointer hover:bg-[#212121] hover:text-white text-[14px] px-4 py-2"
                onClick={() => handleTabClick(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center flex-wrap gap-x-[16px] w-full mb-[24px] relative">
        {isMobile ? (
          <div className="relative w-full">
            <div className="flex items-center justify-between h-[40px] relative w-full">
              <div className="left_buttons flex gap-[12px]">
                <div className="w-[25px] h-[25px] border-1 border-[#1C1C28]"></div>
                <div className="flex">
                  <div className="w-[15px] h-[25px] border-1 border-[#888888]"></div>
                  <div className="w-[15px] h-[25px] border-1 border-[#888888]"></div>
                </div>
              </div>
              <div
                className="right_button flex gap-[15px] cursor-pointer"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <p className="text-[14px] font-medium">Фiльтри</p>
                <SettingsIcons className="" />
              </div>
            </div>
          </div>
        ) : (
          allFilters.map((option) => {
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
          })
        )}
      </div>

      <MobileFiltersModal
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        onApply={() => {
          console.log("Filters applied");
        }}
      />

      <div className={`${windowWidth <= 683 ? "justify-center" : ""} flex gap-[6px] items-center flex-wrap`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Link href={`${pathname}/${item}`} key={item} className="cursor-pointer">
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

const FilterDropdown = ({
  title,
  type,
  options = [],
  min_price,
  max_price,
  onClose,
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
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.screen.width);
    window.addEventListener("resize", () => {
      setWindowWidth(window.screen.width);
    });
  }, []);

  useEffect(() => {
    if (windowWidth <= 767) setIsMobile(true);
    else setIsMobile(false);
  }, [windowWidth]);

  const selectedCount =
    selectedOptions.length +
    (type === "range" && (priceRange[0] !== min_price || priceRange[1] !== max_price) ? 1 : 0);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const resetFilters = () => {
    setSelectedOptions([]);
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
      </div>

      {type === "checkbox" && (
        <div className="flex flex-col text-[14px] gap-[16px]">
          {options.map((option, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <div className="relative border-[1px] border-[#666666]">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(typeof option === "string" ? option : option.name)}
                  onChange={() => handleCheckboxChange(typeof option === "string" ? option : option.name)}
                  className="absolute opacity-0 w-0 h-0"
                />
                <div
                  className={`custom-checkbox ${
                    selectedOptions.includes(typeof option === "string" ? option : option.name) ? "checked" : ""
                  }`}
                >
                  <div className="checkmark"></div>
                </div>
              </div>
              {typeof option === "string" ? (
                <span>{option}</span>
              ) : (
                <>
                  <div className="w-4 h-4 border border-gray-300" style={{ backgroundColor: option.color }} />
                  <span>{option.name}</span>
                </>
              )}
            </label>
          ))}
        </div>
      )}

      {type === "range" && min_price !== undefined && max_price !== undefined && (
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