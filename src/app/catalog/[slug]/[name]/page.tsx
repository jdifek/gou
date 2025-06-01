"use client";
import { usePathname } from "next/navigation";
import { menuData } from "../../data";
import { useRouter } from "next/navigation";
import { Item } from "@/shared/components/Item";
import { catalogPlaceholderImages } from "@/shared/utils";
import { CategoryItem } from "@/shared/components/CategoryItem";

export default function CategoryPage() {
  const pathname = usePathname();
  const router = useRouter();

  const getSelectedTab = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 3) {
      const tabPath = segments[2];
      return menuData.find((tab) => tab.path === tabPath) || null;
    }
    return null;
  };

  const getSelectedSubtab = () => {
    const selectedTab = getSelectedTab();
    if (!selectedTab) return null;

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 4) {
      const subtabPath = segments[3];
      return (
        selectedTab.subtabs.find((subtab) => subtab.path === subtabPath) || null
      );
    }
    return null;
  };

  const selectedTab = getSelectedTab();
  const selectedSubtab = getSelectedSubtab();

  if (!selectedTab) return null;

  return (
    <>
      {selectedSubtab ? (
        <div>
          <div className="flex items-center h-[20px] gap-[10px] mb-[24px]">
            <div className="w-[2px] h-[100%] bg-[#D13030]" />
            <p className="text-[16px] font-medium uppercase">
              {selectedSubtab.name}
            </p>
          </div>
          <div className="flex gap-[6px] items-center flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Item
                key={item}
                name={selectedSubtab.name}
                isDiscount={false}
                images={catalogPlaceholderImages}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center h-[20px] gap-[10px] mb-[24px]">
            <div className="w-[2px] h-[100%] bg-[#D13030]" />
            <p className="text-[16px] font-medium uppercase">
              {selectedTab.name}
            </p>
          </div>
          <div className="flex gap-[6px] items-center flex-wrap">
            {selectedTab.subtabs.map((subtab) => (
              <div
                key={subtab.id}
                className="cursor-pointer"
                onClick={() => {
                  const segments = pathname.split("/").filter(Boolean);
                  const categorySlug = segments[1];
                  router.push(
                    `/catalog/${categorySlug}/${selectedTab.path}/${subtab.path}`
                  );
                }}
              >
                <CategoryItem name={subtab.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
