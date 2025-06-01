import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto mt-[36px] px-0 sm:px-[16px]">
      <p className="text-[18px] font-bold uppercase mb-[12px] text-center md:text-left">
        ПРО НАС
      </p>
      <Image
        className="w-full mb-[36px]"
        src="/assets/about-us.png"
        alt="about-us"
        width={2000}
        height={400}
      />
      <div className="bg-transparent md:bg-[#F9F9F9] p-[10px] sm:p-[24px] md:p-[48px]">
        <div className="flex flex-col mb-[36px]">
          <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[8px]">
            ЧОМУ САМЕ GOU?
          </p>
          <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[60%] leading-6">
            <p>
              Інтернет магазин GOU створений для того, щоб українці мали
              можливість купувати товари українського виробника, або товари
              різного виду. Ми маємо ідею збільшити парітет купівельної
              спроможності українців за рахунок мінімальних цін на наші товари.
              Наша ціль, максимально збільшувати наш асортимент, щоб Ви все
              більше товарів могли купити у нас, окрім одягу уже працюємо над
              розміщенням доступних продуктів харчування та засобів для дому .
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-[36px]">
          <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[8px]">
            СВОЄ ВИРОБНИЦТВО
          </p>
          <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[60%] leading-6">
            <p>
              Наш основний напрямок це - одяг відшивається на нашому власному
              виробництві. Ми співпрацюємо з великими постачальниками
              українських, турецьких та китайських тканин. Зазвичай наша ціна
              залежить напряму від собівартості продукту, і чим нижча
              собівартість тим дешевше продаємо наші товари. <br />
              GOU надає багато робочих місць і слпачує податки, тому, замовляючи
              в нас Ви підтримуєте українську економіку.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-[36px]">
          <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[8px]">
            Ціноутворення
          </p>
          <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[60%] leading-6">
            <p>
              Ні для кого не секрет, що у вартість всіх товарів закладений
              відсоток на рекламу. Інколи цей відсоток складає більшу частку ніж
              собівартість самого товару. Ми намагаємося значно скоротити
              витрати на рекламу, за рахунок залучення наших покупців до
              рекомендацій серед свого оточення.
            </p>
            <p>
              Адже кому як не вам повірять Ваші друзі та рідні. Можна витратити
              великі суми на те щоб показувати дешевий товар покупцям, але
              тільки Ваші рекомендації зможуть довести, що той товар дійсно
              якісний. Тому чим більше Ви нас рекомендуєте, тим нижчі ціни та
              більший асортимент ми можемо зробити.
            </p>
          </div>
        </div>
        <p className="text-[12px] font-bold uppercase">
          Розширюємо асортимент товарів для вашого комфорту.
        </p>
      </div>
    </div>
  );
}
