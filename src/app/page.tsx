import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db/index";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc}) => desc(model.id),
  });
  return (
  <div className = "flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="mock" />
            <div>{image.name}</div>
          </div>
        ))
      }
  </div>
)}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Gallery</h1>
          <p>Sign in to see the images</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
