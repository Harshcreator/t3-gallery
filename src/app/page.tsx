import Link from "next/link";
import { mock } from "node:test";

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

export default function HomePage() {
  return (
    <main className="">
      <div className = "flex flex-wrap gap-4">{

        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="mock" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
