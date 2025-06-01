"use client";
import { usePathname } from "next/navigation";
import { menuData } from "../data";
import { useRouter } from "next/navigation";
import { CategoryItem } from "@/shared/components/CategoryItem";
export default function CatalogPage() {
  const pathname = usePathname();
  const router = useRouter();

  const findSelectedTab = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length >= 3) {
      const tabPath = segments[2];
      return menuData.find((tab) => tab.path === tabPath) || null;
    }
    return null;
  };

  return (
    <>
      {!findSelectedTab() ? (
        menuData.map((category) => (
          <div key={category.id} className="first:mt-0 mt-[48px]">
            <div className="flex items-center h-[20px] gap-[10px] mb-[24px]">
              <div className="w-[2px] h-[100%] bg-[#D13030]" />
              <p className="text-[16px] font-medium uppercase">
                {category.name}
              </p>
            </div>
            <div className="flex gap-[6px] items-center flex-wrap">
              {category.subtabs.slice(0, 3).map((subtab) => (
                <div
                  key={subtab.id}
                  className="cursor-pointer"
                  onClick={() => {
                    const segments = pathname.split("/").filter(Boolean);
                    const categorySlug = segments[1];
                    router.push(
                      `/catalog/${categorySlug}/${category.path}/${subtab.path}`
                    );
                  }}
                >
                  <CategoryItem name={subtab.name} />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
