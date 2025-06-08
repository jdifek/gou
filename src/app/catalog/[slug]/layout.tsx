"use client";
import { useRouter, usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { menuData, getCategoryName } from "../data";
import type { MenuItem, Subtab } from "../data";

interface Breadcrumb {
  name: string;
  path: string;
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const segments = pathname.split("/").filter(Boolean);
  const isProductPage = segments[0] === "catalog" && segments.length === 5;

  const [selectedTab, setSelectedTab] = useState<MenuItem | null>(null);
  const [selectedSubtab, setSelectedSubtab] = useState<Subtab | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

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

  const handleTabClick = (tab: MenuItem) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 2) {
      const categorySlug = segments[1];
      router.push(`/catalog/${categorySlug}/${tab.path}`);
      setSelectedTab(tab);
      setSelectedSubtab(null);
    }
  };

  const handleSubtabClick = (subtab: Subtab) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 2 && selectedTab) {
      const categorySlug = segments[1];
      router.push(
        `/catalog/${categorySlug}/${selectedTab.path}/${subtab.path}`
      );
      setSelectedSubtab(subtab);
    }
  };

  const getCategory = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 2) {
      return getCategoryName(segments[1]);
    }
    return "Категорія";
  };

  if (isProductPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col">
      <div className={`flex flex-col gap-[24px] ${isMobile ? "" : "container"} px-[12px] mt-[48px] m-auto`}>
        <p className="text-[18px] font-bold text-center">{getCategory()}</p>
        <div className="flex items-center flex-wrap gap-1">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <p
                className={`text-[14px] ${
                  index === breadcrumbs.length - 1
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
        <div className="w-full flex gap-[48px]">
          {/* Left menu - hidden on mobile */}
          {!isMobile && (
            <div className="w-[20%] flex flex-col gap-[24px]">
              <ul className="flex flex-col gap-[24px] text-[16px] font-bold">
                {menuData.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => handleTabClick(item)}
                  >
                    {item.name}

                    {selectedTab?.id === item.id && (
                      <ul className="ml-[64px] mt-3 flex flex-col gap-[16px] text-[14px] font-medium relative">
                        {item.subtabs.map((subtab) => (
                          <li
                            key={subtab.id}
                            className="cursor-pointer text-black"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSubtabClick(subtab);
                            }}
                          >
                            <div className="flex items-center gap-2">
                              {selectedSubtab?.id === subtab.id && (
                                <div className="absolute left-[-10px] w-[2px] h-[14px] bg-[#D13030]" />
                              )}
                              {subtab.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content - centered on mobile */}
          <div className={`${isMobile ? "w-full flex justify-center" : "w-[80%]"}`}>
            <div className={`w-full`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}