"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-[12px] text-center">
      <p className="text-[50px] font-bold mb-[24px]">OOPS!</p>
      <div className="flex flex-col gap-[16px] items-center justify-center">
        <p className="text-[24px]">Сторінка не знайдена.</p>
        <p className="text-[24px]">
          Скористайтесь пошуком по сайту або поверніться на головну.
        </p>
      </div>
      <button
        className="bg-[#1C1C28] text-[14px] font-normal w-[310px] h-[44px] text-white px-4 py-2 mt-[24px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        На головну
      </button>
    </div>
  );
}
