import { fakerAR as faker } from "@faker-js/faker";
import { Article } from "@/interfaces/Article";

export async function GET() {
  const articles: Article[] = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  }));

  return Response.json(articles);
}
