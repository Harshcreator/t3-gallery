import { db } from "~/server/db/index";

const mockUrls = [
  "https://utfs.io/f/hlxLC0QhMXo0eUYbDF4CjUBEPpI1YuAFWK3V9wZ52dicxyqg",
  "https://utfs.io/f/hlxLC0QhMXo0JnKYNjflijwCn9ZHY8XGUeqc0RoatWyJ7v64",
  "https://utfs.io/f/hlxLC0QhMXo0PsgoMsufJwi273ZqRrMQnjWD68aPmHLxF0Ah",
  "https://utfs.io/f/hlxLC0QhMXo0O5aWn8Nbghdftoc78KYxALWyICJP29HamDR0",
  "https://utfs.io/f/hlxLC0QhMXo0Zf8JO8gPhsBJbloUXjke3Dp461MGT2YcI0wu",
  "https://utfs.io/f/hlxLC0QhMXo0uQbvIVQlqi1Jr8IgdVzY7Tl3ZsQ6yeALwNE0",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className = "flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="mock" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
