'use client'
import Image from 'next/image'

const BoardMembersCarousels = () => {
    return (
        <section>
            <h2 className='text-center font-bold text-4xl mb-8'>Our Board Members</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='flex flex-col items-center gap-4'>
                    <Image className='rounded-full' src={"/bm1.jpg"} width={200} height={200} alt='Board Members Images' />
                    <div>
                        <h3 className='text-xl font-bold'>Hangsam Nembang</h3>
                        <p className='text-slate-800 dark:text-slate-300'>Founder and President</p>
                    </div>
                </div>
                
                <div className='flex flex-col items-center gap-4'>
                    <Image className='rounded-full' src={"/bm1.jpg"} width={200} height={200} alt='Board Members Images' />
                    <div>
                        <h3 className='text-xl font-bold'>Hangsam Nembang</h3>
                        <p className='text-slate-800 dark:text-slate-300'>Founder and President</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <Image className='rounded-full' src={"/bm1.jpg"} width={200} height={200} alt='Board Members Images' />
                    <div>
                        <h3 className='text-xl font-bold'>Hangsam Nembang</h3>
                        <p className='text-slate-800 dark:text-slate-300'>Founder and President</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <Image className='rounded-full' src={"/bm1.jpg"} width={200} height={200} alt='Board Members Images' />
                    <div>
                        <h3 className='text-xl font-bold'>Hangsam Nembang</h3>
                        <p className='text-slate-800 dark:text-slate-300'>Founder and President</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <Image className='rounded-full' src={"/bm1.jpg"} width={200} height={200} alt='Board Members Images' />
                    <div>
                        <h3 className='text-xl font-bold'>Hangsam Nembang</h3>
                        <p className='text-slate-800 dark:text-slate-300'>Founder and President</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoardMembersCarousels
