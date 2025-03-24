"use client";

import { useState } from "react";

interface Post {
  id: string;
  title: string;
  body: string;
}

export default function LoadMore() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    );
    const newPosts = await res.json();
    setPage(page + 1);
    setPosts((prev) => [...prev, ...newPosts]);
    setLoading(false);
  };

  return (
    <div>
      <h1>page {page}</h1>
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>

      <h1>Posts {posts.length}</h1>
      {posts.map((post, i) => (
        <div key={post.id + i}>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
