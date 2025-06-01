export interface Subtab {
  id: number;
  name: string;
  path: string;
}

export interface MenuItem {
  id: number;
  name: string;
  path: string;
  subtabs: Subtab[];
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Одяг",
    path: "clothes",
    subtabs: [
      { id: 101, name: "Штани спортивні", path: "sport-pants" },
      { id: 102, name: "Гольфи", path: "golf" },
      { id: 103, name: "Футболки та майки", path: "t-shirts" },
      { id: 104, name: "Худі", path: "hoodies" },
      { id: 105, name: "Спортивні костюми", path: "sport-suits" },
      { id: 106, name: "Шорти", path: "shorts" },
      { id: 107, name: "Термобілизна", path: "thermal-underwear" },
    ],
  },
  {
    id: 2,
    name: "Взуття",
    path: "shoes",
    subtabs: [
      { id: 201, name: "Кросівки", path: "sneakers" },
      { id: 202, name: "Туфлі", path: "dress-shoes" },
      { id: 203, name: "Сандалі", path: "sandals" },
    ],
  },
  {
    id: 3,
    name: "Аксесуари",
    path: "accessories",
    subtabs: [
      { id: 301, name: "Годинники", path: "watches" },
      { id: 302, name: "Сумки", path: "bags" },
      { id: 303, name: "Окуляри", path: "glasses" },
    ],
  },
  {
    id: 4,
    name: "Спорт",
    path: "sport",
    subtabs: [
      { id: 401, name: "Спортивне обладнання", path: "equipment" },
      { id: 402, name: "Фітнес", path: "fitness" },
      { id: 403, name: "Плавання", path: "swimming" },
    ],
  },
];

export const getCategoryName = (slug: string) => {
  if (slug === "men") return "Чоловікам";
  if (slug === "women") return "Жінкам";
  if (slug === "children") return "Дітям";
  if (slug === "home") return "Дім";
  return "Категорія";
};
