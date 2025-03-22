import { fakerAR as faker } from "@faker-js/faker";
import { Article } from "@/interfaces/Article";

export const articles: Article[] = [
  {
    id: "0ab32045-9aef-440b-ad87-b9e10d5e8c5a",
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  },
  {
    id: "1ab32045-9aef-440b-ad87-b9e10d5e8c5a",
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  },
  {
    id: "2ab32045-9aef-440b-ad87-b9e10d5e8c5a",
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  },
  {
    id: "3ab32045-9aef-440b-ad87-b9e10d5e8c5a",
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  },
];
