export const filtersData = {
    'Від популярного': { type: 'checkbox', options: ['Від найдешевшого', 'Від найдорожчого', 'Від найбільш відповідного', 'За рейтингом'] },
    'Розмір': { type: 'checkbox', options: ['S', 'XS', 'XXS', 'L', 'XL', 'XXL'] },
    'Колір': { type: 'color', options: [
      { name: 'Сірий', color: '#C0C0C0' },
      { name: 'Білий', color: '#FFFFFF' },
      { name: 'Чорний', color: '#000000' },
      { name: 'Бежевий', color: '#F5F5DC' },
      { name: 'Зелений', color: '#008000' },
      { name: 'Червоний', color: '#FF0000' }
    ]},
    'Ціна': { type: 'range', min_price: 549, max_price: 1450 },
    'Тканина': { type: 'checkbox', options: ['Полиэстер (90%), эластан (10%)', 'Полиэстер (95%), эластан (5%)', 'Микродайвинг', 'Микродайвинг на флисе', 'Бавовна', 'Вовна', 'Джинс'] },
    'Сезонність': { type: 'checkbox', options: ['Літо', 'Зима', 'Весна/Осінь'] },
    'Стиль': { type: 'checkbox', options: ['Казуал', 'Елегантний', 'Спорт'] },
    'Акцiя': { type: 'checkbox', options: [] },
    'Технологiя': { type: 'checkbox', options: [] },
    'Виробник': { type: 'checkbox', options: [] },
    'Тип крою': { type: 'checkbox', options: [] },
    'Показати всі фільтри': { type: 'none', options: [] },
  };