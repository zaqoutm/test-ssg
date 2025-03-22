// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import { Article } from "@/interfaces/Article";
import { articles } from "@/lib/helper";
import Image from "next/image";

// params slugs
// versions of this page will be statically generated

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article: Article = articles.filter((article) => article.id == slug)[0];

  return (
    <div>
      <h1>Article id: {slug}</h1>
      <div className="article-view">
        <h1>{article.title}</h1>
        <p>{article.content}</p>
        <Image
          src={article.avatar}
          alt={"photo alt text"}
          width={100}
          height={100}
          priority={true}
        />
      </div>
    </div>
  );
}
