import { notFound } from "next/navigation";

/*

usnig notFound(): to avoid set up each route in nginx

    location /articles/ {
        try_files $uri $uri/ /404.html;
        autoindex off;  # تعطيل الفهرسة هنا أيضًا
    }
*/

export default async function Page() {
  notFound();
}
