import LoadMore from "./loadmorebtn";

interface Post {
  id: string;
  title: string;
  body: string;
}
export default async function Page() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${0}&_limit=5`
  );
  const newPosts: Post[] = await res.json();

  return (
    <div>
      <h1>load more button</h1>
      <h3>init data</h3>
      <br />
      {newPosts.map((post, i) => (
        <div key={post.id + i}>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      <br />
      <br />
      <LoadMore />
    </div>
  );
}
