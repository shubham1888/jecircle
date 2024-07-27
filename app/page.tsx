import Carousel from "@/components/Carousel";

const DATA = [
  { image: '/img1.jpg' },
  { image: '/img2.jpg' },
  { image: '/img3.jpg' },
  { image: '/img4.jpg' },
  { image: '/img5.jpg' },
  { image: '/img6.jpg' },
]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <Carousel data={DATA} />
    </main>
  );
}
