import Image from "next/image";

export const HomeBanner = () => {
  return (
    <div>
      <div className="h-[580px] flex">
        <div
          className="w-[55%] h-full bg-[#F4F4F4]"
          style={{
            backgroundImage: "url('/assets/main.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-[45%] bg-[#FAFAFA] px-[64px] py-[36px] flex flex-col gap-[32px]">
          <div>
            <Image
              src="/assets/light-logo.png"
              alt="logo"
              width={500}
              height={170}
            />
          </div>
          <p className="font-oswald text-[45px] leading-[55px] uppercase font-medium">
            Sport зі знижками
            <br />
            <span className="text-[#D13030] font-oswald">до 60%</span>
          </p>
          <p className="text-[12px] font-medium">Тiльки з 20.02 до 20.03</p>
          <button className="bg-[#1C1C28] h-[50px] w-[250px] text-white text-[14px] mt-[16px] cursor-pointer">
            Перейти до розділу
          </button>
        </div>
      </div>
    </div>
  );
};
