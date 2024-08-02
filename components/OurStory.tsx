import Image from 'next/image'
import { Button } from './ui/button'

const OurStory = () => {
    return (
        <section className="py-10 flex sm:flex-col md:flex-row md:justify-evenly items-center">
            <div className="md:w-1/2 md:px-8 py-12">
                <div className="text-sm mb-2">How we started?</div>
                <div className="text-3xl font-bold mb-4">Our Story</div>
                <p className="mb-6 text-lg">
                    Since the launch of CNI in 2002, there was always a void to be filled in the entrepreneurial space in Nepal. CNIYEF was launched on 15th June 2017 by CNI with the aim of bringing together young business leaders so as to groom them to be the next generation of business leaders for Nepal.
                </p>
                <Button className="text-2xl">Learn  More</Button>
            </div>
            <div className="w-1/2">
                <Image src={"/img4.jpg"} className="rounded-lg" width={700} height={700} alt="About image" />
            </div>
        </section>
    )
}

export default OurStory