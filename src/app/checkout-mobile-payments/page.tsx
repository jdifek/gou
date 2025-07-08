import Link from "next/link";

export default function CheckoutMobileDelivery() {
  return (
    <div className="px-[10px] pt-[40px]">
      <div className="flex items-center mb-[40px] justify-between">
        <Link href="/cart">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_714)">
              <path
                d="M9.16711 1.18893C9.20812 1.26694 9.22424 1.3568 9.21545 1.4584C9.20666 1.56 9.17297 1.63814 9.11437 1.6928L0.940545 9.86075L9.11437 18.0404C9.17297 18.0951 9.20666 18.1713 9.21545 18.2689C9.22424 18.3666 9.20812 18.4584 9.16711 18.5443C9.12023 18.6225 9.06017 18.6674 8.98693 18.6791C8.91368 18.6908 8.84777 18.6693 8.78917 18.6147L0.325315 10.1537C0.296016 10.1225 0.271115 10.0815 0.250606 10.0307C0.230096 9.9799 0.219846 9.92325 0.219846 9.86075C0.219846 9.80607 0.230096 9.75333 0.250606 9.70255C0.271115 9.65176 0.296016 9.61075 0.325315 9.5795L8.78917 1.11853C8.84777 1.056 8.91368 1.03267 8.98693 1.04827C9.06017 1.06387 9.12023 1.1108 9.16711 1.18893Z"
                fill="#1C1C28"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_714">
                <rect
                  width="20"
                  height="10"
                  fill="white"
                  transform="matrix(0 -1 -1 0 10 20)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <p
          className="text-[18px] font-semibold uppercase text-center text-[#1c1c28]"
          style={{ fontFamily: "var(--font-family)" }}
        >
          спосіб оплати
        </p>
        <div></div>
      </div>
      <div className="px-[10px]">
        {[
          "Оплата під час отримання товару",
          "Оплатити карткою у відділені пошти",
          "Оплатити зараз",
        ].map((el, index) => (
          <div
            key={index}
            className="px-[10px] mb-[30px] flex justify-between items-center"
          >
            <div className="flex gap-[10px] items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="6.5" fill="white" stroke="#888888" />
              </svg>
              <p
                className="text-[16px] w-[180px] font-normal leading-[100%] tracking-[0.03em] text-black"
                style={{ fontFamily: "var(--font-family)" }}
              >
                {el}
              </p>
            </div>
            <p
              className="text-[16px] font-semibold leading-[125%] text-center text-[#1c1c28]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              139 грн
            </p>
          </div>
        ))}
      </div>
      <div className="bg-[#1c1c28] w-[100%] h-[44px]  py-[10px]">
        <p
          className="text-white text-center font-normal text-[14px] leading-[99%]"
          style={{ fontFamily: "var(--font-family)" }}
        >
          Зберегти
        </p>
      </div>
    </div>
  );
}
