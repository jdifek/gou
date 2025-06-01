import Image from "next/image";

export const CategoryItem = ({ name }: { name: string }) => (
  <div className="w-[250px] cursor-pointer">
    <Image
      src="/assets/item-placeholder-7.png"
      alt="product-image"
      width={250}
      height={340}
    />
    <div className="h-[60px] flex items-center justify-center bg-[#FBFBFB]">
      <p className="text-[16px] font-medium">{name}</p>
    </div>
  </div>
);
