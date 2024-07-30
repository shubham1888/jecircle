import AboutComponent from "@/components/about";
import BoardMembersCarousels from "@/components/BoardMembersCarousels";
import Carousel from "@/components/Carousel";
import OurStory from "@/components/OurStory";

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
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center text-center">
        <Carousel data={DATA} />
      </main>
      <div className="w-[90vw] px-14 py-20">
        <AboutComponent />
        <OurStory />
        <BoardMembersCarousels />
      </div>
    </div>
  );
}
