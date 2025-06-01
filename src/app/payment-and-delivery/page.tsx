import Image from "next/image";

export default function PaymentAndDelivery() {
  return (
    <div className="container mx-auto mt-[36px] px-0 sm:px-[16px]">
      <p className="text-[18px] font-bold uppercase mb-[36px] text-center md:text-left">
        Оплата та доставка
      </p>
      <div className="bg-transparent md:bg-[#F9F9F9] p-[10px] sm:p-[24px] md:p-[48px]">
        <div className="flex flex-col mb-[36px]">
          <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[18px]">
            Карткою на сайті
          </p>
          <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[60%] leading-6">
            <p>
              Оплата замовлення онлайн банківською карткою Visa або MasterCard.
              Доставка товару можлива лише після підтвердження платежу.
            </p>
            <p>
              Оплата за допомогою платіжних карток здійснюється наступним
              способом: <br />
              При оформленні замовлення на сайті Вам буде запропоновано зробити
              вибір способу оплати. У графі &quot;Оплата&quot; вам потрібно
              вибрати &quot;Оплата карткою на сайті&quot;. Після цього Ви
              переадресуєте на сторінку системи безпечних платежів банку, де Вам
              необхідно буде підтвердити оплату.
            </p>
            <p>
              Будь ласка, зверніть увагу, отримати товар, сплачений платіжною
              карткою, може тільки той клієнт, чиї ПІБ були вказані на сайті при
              оформленні заявки, тому при отриманні замовлення обов&apos;язково
              потрібно мати при собі паспорт.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-[36px]">
          <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[18px]">
            Післяплата на пошті
          </p>
          <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[80%] leading-6">
            <p>
              Замовляєте без предоплати і оплачуєте у відділенні пошти після
              огляду товару. До замовлень з післяплатою додається +25грн,
              враховуйте це при замовленні.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-[36px]">
          <div className="flex gap-[24px] mb-[24px]">
            <Image
              src="/assets/nova-posta.png"
              alt="Nova Poshta"
              width={57}
              height={57}
            />
            <p className="text-[18px] font-bold uppercase pt-[8px]">
              Нова пошта
            </p>
          </div>
          <div className="flex flex-col mb-[36px]">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Вартість доставки
            </p>
            <div className="flex flex-col gap-[4px] text-[14px] font-normal leading-6">
              <p>- Доставка у відділення Нової Пошти - від 50 грн</p>
              <p>- Доставка кур&apos;єром Нової Пошти на адресу - від 85 грн</p>
              <p>- ​​​​Доставка в поштомати Нової Пошти  - від 50 грн </p>
            </div>
          </div>
          <div className="flex flex-col mb-[36px]">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Терміни доставки до відділення «Нова пошта» 1 - 3 дні.
            </p>
            <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[80%] leading-6">
              <p>
                Після відправки замовлення ви отримаєте SMS-повідомлення з
                номером експрес-накладної.Уточнити конкретну дату отримання
                вашого замовлення ви можете на сайті компанії Нова пошта.
              </p>
              <p>
                Доставка до Відділення «Нова пошта» здійснюється за тарифами
                Нової пошти, оплата вартості доставки здійснюється на відділенні
                при отриманні товару.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-[36px]">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Важливо!
            </p>
            <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[60%] leading-6">
              <p>
                Перед відправкою весь товар перевіряється і страхується за
                повною вартістю. При отриманні відправлення вам необхідно
                перевірити товар безпосередньо у відділенні компанії &quot;Нова
                пошта&quot; в присутності співробітника. У разі неповного
                комплекту, недостачі товару або відсутності документів (чек,
                гарантійний талон і т.д.), необхідно скласти акт
                невідповідності. Якщо упаковка пошкоджена, або на товарі
                виявлені механічні пошкодження вам необхідно відмовитися від
                відправлення або пред&apos;явити претензії компанії &quot;Нова
                пошта&quot;. Компанія &quot;Нова пошта&quot; відшкодовує завдані
                збитки, якщо їх було завдано з вини компанії.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Що можна відправити в поштомат?
            </p>
            <div className="flex flex-col gap-[4px] text-[14px] font-normal w-full md:w-[80%] leading-6">
              <p>
                • Документи, а також посилки до 20 кг фактичної ваги та розміром
                не більше 42х24х58 см.
              </p>
              <p>
                • Лише повністю передплачені посилки (зручно оплатити послугу
                доставки ви можете в мобільному додатку «Нова Пошта»).
              </p>
              <p>• Товари з оголошеною вартістю не більше, ніж 6000 грн</p>
            </div>
          </div>
        </div>

        <hr className="my-[36px] border-[#D9D9D9] w-full md:w-[80%]" />

        <div className="flex flex-col">
          <div className="flex gap-[24px] mb-[24px]">
            <Image
              src="/assets/ukr-posta.png"
              alt="Ukr Posta"
              width={57}
              height={57}
            />
            <p className="text-[18px] font-bold uppercase pt-[8px]">Укрпошта</p>
          </div>
          <div className="flex flex-col mb-[36px]">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Вартість доставки
            </p>
            <div className="flex flex-col gap-[4px] text-[14px] font-normal">
              <p>- Доставка у відділення Укрпошти - від 50 грн </p>
              <p>- Доставка кур&apos;єром на адресу - від 85 грн </p>
              <p>- Доставка в поштомати - від 50 грн  </p>
            </div>
          </div>
          <div className="flex flex-col mb-[36px]">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Терміни доставки до відділення «Укрпошти» 3 - 5 днів.
            </p>
            <div className="flex flex-col gap-[24px] text-[14px] font-normal w-full md:w-[80%]">
              <p>
                Після відправки замовлення ви отримаєте SMS-повідомлення з
                номером експрес-накладної.Уточнити конкретну дату отримання
                вашого замовлення ви можете на сайті компанії Укрпошта.
              </p>
              <p>
                Доставка до Відділення «Укрпошта» здійснюється за тарифами
                Укрпошти, оплата вартості доставки здійснюється на відділенні
                при отриманні товару.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-bold uppercase border-l-3 border-l-[#D13030] pl-[12px] mb-[12px]">
              Доставка в точку видачі GOU
            </p>
            <p className="text-[14px] font-normal">
              вулиця Олександра Невського 99, смт. Врадіївка, Одеська область,
              56300  - (19 грн) 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
