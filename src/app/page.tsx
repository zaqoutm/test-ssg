import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/helper";

export default function Home() {
  return (
    <div>
      <h1>Test SSG</h1>
      <p>Articles count: {articles.length}</p>

      <div className="articlesContainer">
        {articles.map((a) => (
          <Link href={`articles/${a.id}`} className="card" key={a.id}>
            <span>{a.id}</span>
            <h1>{a.title}</h1>
            <p>{a.content}</p>
            <Image
              src={a.avatar}
              alt={"photo alt text"}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
