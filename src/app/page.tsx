import { Article } from "@/interfaces/Article";
import Image from "next/image";
import { fakerAR as faker } from "@faker-js/faker";

export default async function Home() {
  // const res = await fetch("http://localhost:3000/api/articles", {
  //   cache: "force-cache",
  // });

  async function loadArticles() {
    const articles: Article[] = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      avatar: faker.image.avatar(),
    }));
    return articles;
  }
  const articles: Article[] = await loadArticles();
  // const imageUrl = `https://robohash.org/${Math.random()}?set=set4`;
  const imageUrl = `https://robohash.org/`;

  return (
    <div>
      <h1>Test SSG</h1>
      <h2>Articles count: {articles.length}</h2>

      <div className="articlesContainer">
        {articles.map((a, index) => (
          <div className="card" key={a.id}>
            <span>{a.id}</span>
            <h1>{a.title}</h1>
            <p>{a.content}</p>
            <Image
              src={imageUrl + index}
              alt={"photo alt text"}
              width={100}
              height={100}
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
