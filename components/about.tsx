import Image from "next/image"
import { Button } from "./ui/button"

const AboutComponent = () => {
  return (
    <section className="py-10 flex justify-evenly items-center">
      <div className="w-1/2">
        <Image src={"/img4.jpg"} className="rounded-lg" width={700} height={700} alt="About image" />
      </div>
      <div className="w-1/2 px-8 py-12">
        <div className="text-sm mb-6">Know Us Better</div>
        <div className="text-3xl font-bold mb-6">About JEC</div>
        <p className="mb-6 text-lg">
          This strategic initiative was taken by CNI to bring together young business leaders so as to groom them to be the next generation of business leaders for Nepal. The main objective of this Forum is to help its members realize their full potential, so that young entrepreneurs can contribute fresh, effective ideas and feedback for the future of Nepal’s businesses. CNI recognized the need to cultivate a core group of Young Entrepreneurs and CEO’s aged 40 and below to be the next generation of business leaders to steer Nepal ahead in the local and international arena.
        </p>
        <Button className="text-2xl">Learn  More</Button>
      </div>
    </section>
  )
}

export default AboutComponent