import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export default function SuccessOrder() {
  return (
    <div className="flex justify-center px-[10px] md:px-[0px]">
      <div className="flex flex-col items-center">
        <p className="mt-[100px] text-center font-semibold text-[50px] leading-[140%] tracking-[0.03em] text-[#1c1c28]">
          Дякуємо за покупку!
        </p>
        <Link href={'/profile'} className="flex justify-between mt-[50px] px-[20px] py-[10px] w-[100%] sm:w-[451px] h-[44px] bg-[#1c1c28]">
          <p
            className="font-normal text-[14px] leading-[180%] text-white"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Повернутись до особистого кабінету
          </p>
          <svg
            width="19"
            height="24"
            viewBox="0 0 19 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_781)">
              <path
                d="M9.18332 13.1446C7.03718 13.1471 5.18789 11.6338 4.76582 9.52957C4.7328 9.31202 4.79698 9.09094 4.94137 8.92489C5.08576 8.75884 5.29579 8.66458 5.51582 8.66707C5.88496 8.66171 6.2031 8.92577 6.26582 9.28957C6.55695 10.6792 7.78231 11.6744 9.20207 11.6744C10.6218 11.6744 11.8472 10.6792 12.1383 9.28957C12.201 8.92577 12.5192 8.66171 12.8883 8.66707C13.1083 8.66458 13.3184 8.75884 13.4627 8.92489C13.6071 9.09094 13.6713 9.31202 13.6383 9.52957C13.2135 11.6477 11.3435 13.1651 9.18332 13.1446Z"
                fill="white"
              />
              <path
                d="M15.8582 23.03H2.50819C1.89144 23.0307 1.30141 22.7783 0.876064 22.3317C0.450719 21.8851 0.227351 21.2834 0.258189 20.6675L0.865689 7.73746C0.917928 6.53306 1.91015 5.58383 3.11569 5.58496H15.2507C16.4562 5.58383 17.4485 6.53306 17.5007 7.73746L18.1082 20.6675C18.139 21.2834 17.9157 21.8851 17.4903 22.3317C17.065 22.7783 16.4749 23.0307 15.8582 23.03ZM3.11569 7.09246C2.70148 7.09246 2.36569 7.42825 2.36569 7.84246L1.75819 20.7425C1.74791 20.9478 1.82237 21.1483 1.96415 21.2972C2.10593 21.4461 2.30261 21.5302 2.50819 21.53H15.8582C16.0638 21.5302 16.2604 21.4461 16.4022 21.2972C16.544 21.1483 16.6185 20.9478 16.6082 20.7425L16.0007 7.81246C16.0007 7.39825 15.6649 7.06246 15.2507 7.06246L3.11569 7.09246Z"
                fill="white"
              />
              <path
                d="M13.6831 6.34229H12.1831V5.02979C12.1831 3.37293 10.8399 2.02979 9.18311 2.02979C7.52625 2.02979 6.18311 3.37293 6.18311 5.02979V6.34229H4.68311V5.02979C4.68311 2.5445 6.69783 0.529785 9.18311 0.529785C11.6683 0.529785 13.6831 2.5445 13.6831 5.02979V6.34229Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_781">
                <rect
                  width="19"
                  height="23"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <p
          className="mt-[30px] md:mt-[40px] font-normal text-[14px] leading-[180%] text-center text-black"
          style={{ fontFamily: "var(--font-family)" }}
        >
          Слідкуйте за нами в соцмережах
        </p>
        <div className="flex justify-center mt-[20px] items-center gap-4">
          <FaFacebookSquare className="cursor-pointer" size={30} />
          <RiInstagramFill className="cursor-pointer" size={30} />
          <FaTelegramPlane className="cursor-pointer" size={30} />
        </div>
      </div>
    </div>
  );
}
