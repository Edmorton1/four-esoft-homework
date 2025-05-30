import type { BookType } from "@/app/context/AppTypes"


const LOREM_DESCRIPTION = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque quo cum asperiores recusandae reiciendis, esse quam deserunt adipisci corrupti laboriosam dicta provident, quod fugiat ipsum perferendis necessitatibus! Omnis, atque?`

const generateISBN = () => {
  const nums = String(Math.floor(Math.random() * 10**13))
  return nums.split('').map((e, i) => {
    if (Math.random() > 0.6 && i !== 0) {
      return `-${e}`
    } else {
      return e
    }
  }).join('')
}

export const BOOKS: BookType[] = [
  {
    id: "1b3e5fa4-67b6-4f6d-94cd-5e2dfdf80125",
    title: "Евгений Онегин",
    author: "Пушкин",
    year: 1823
  },
  {
    id: "5fcb6cf2-2e80-4ec6-8c52-4bc2074e74e6",
    title: "Преступление и наказание",
    author: "Достоевский",
    year: 1866
  },
  {
    id: "0fcbe3cc-3a30-4ec1-91f3-1b7c2a2df7f1",
    title: "Война и мир",
    author: "Толстой",
    year: 1869
  },
  {
    id: "de4f6019-1c9e-45e2-a4cb-ec2b2b4ed328",
    title: "Анна Каренина",
    author: "Толстой",
    year: 1877
  },
  {
    id: "73451a2a-5e38-4e9c-91c5-5d9dc67f84f2",
    title: "Мастер и Маргарита",
    author: "Булгаков",
    year: 1967
  },
  {
    id: "f68d7b52-3976-4026-a56d-ef77289a67c4",
    title: "Отцы и дети",
    author: "Тургенев",
    year: 1862
  },
  {
    id: "57b1f7d4-300c-4993-8a1d-0c0bded117cc",
    title: "Мёртвые души",
    author: "Гоголь",
    year: 1842
  },
  {
    id: "51f84b23-2d7e-4566-b80f-93c9c3d79b4f",
    title: "Дубровский",
    author: "Пушкин",
    year: 1841
  },
  {
    id: "b86f0b0d-e6aa-4239-8591-bfa74d3efb88",
    title: "Идиот",
    author: "Достоевский",
    year: 1869
  },
  {
    id: "adacba8e-2a1f-4b1c-9a71-8e6ed8df2f66",
    title: "Демон",
    author: "Лермонтов",
    year: 1829
  },
  {
    id: "c004e343-e3a6-4c7f-a95c-89b34cb8a73f",
    title: "Герой нашего времени",
    author: "Лермонтов",
    year: 1840
  },
  {
    id: "4cb43e35-6070-44d6-928e-5ae4b42bde94",
    title: "Записки из подполья",
    author: "Достоевский",
    year: 1864
  },
  {
    id: "85f7ff02-8c3f-4cf9-9b3f-6d3c6c3d02db",
    title: "Капитанская дочка",
    author: "Пушкин",
    year: 1836
  },
  {
    id: "3c2a7e39-0f3c-4b90-a06b-d2e020c95751",
    title: "Белая гвардия",
    author: "Булгаков",
    year: 1925
  },
  {
    id: "ef675c64-3c03-4e8a-bf92-e2a4a3a38f31",
    title: "Обломов",
    author: "Гончаров",
    year: 1859
  }
].map(e => {
  e.description = LOREM_DESCRIPTION;
  e.isbn = generateISBN()
  return e})

console.log(generateISBN())