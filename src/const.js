const data = [
  {
    id: 1,
    question: 'Кого Колобок встретил вторым?',
    answer: [
      {
        title: 'Медведь',
        status: false,
      },
      { title: 'Заяц', status: false },
      { title: 'Лиса', status: false },
      { title: 'Волк', status: true },
    ],
  },
  {
    id: 2,
    question: 'Что измеряется в м/с²?',
    answer: [
      {
        title: 'Угловая скорость',
        status: false,
      },
      { title: 'Ускорение', status: true },
      { title: 'Скорость света', status: false },
      { title: 'Сила', status: false },
    ],
  },
  {
    id: 3,
    question: 'Какой ракеты нет на вооружении России?',
    answer: [
      {
        title: 'Тополь',
        status: false,
      },
      { title: 'Багульник', status: false },
      { title: 'Верба', status: false },
      { title: 'Баобаб', status: true },
    ],
  },
  {
    id: 4,
    question: 'Можно ли вам поставить автомобиль на стоянку за путепроводом?',
    answer: [
      {
        title: 'Можно',
        status: false,
      },
      { title: 'Можно не ближе 5 м от опоры путепровода', status: false },
      { title: 'Нельзя', status: true },
    ],
  },
  {
    id: 5,
    question: 'Вы молодЕц?',
    answer: [
      {
        title: 'Да',
        status: true,
      },
      { title: 'нет', status: false },
      { title: 'скорее да', status: false },
    ],
  },
]

export { data }
