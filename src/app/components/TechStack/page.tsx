import Image from 'next/image'
import React from 'react'


const techstack = () => {
  return (
    <section className='object-cover mb-10'>
      <div className='text-leftfont-semibold'>
        <h3 className='lg:p-9 text-teal-600 text-xl font-medium'> I use the following Tech stack when developing software</h3>
      </div>

      <div className='flex items-center justify-center'>
        <Image src="/assets/techstack/Next-JS.png" alt="logo" width={100} height={100} className='h-[180px] w-[220px]'/>
      </div>

      <div className='flex flex-col items-center justify-center mix-blend-darken'>
        <div className='flex flex-row '>
          <div>
            <Image src="/assets/techstack/git+github.png" alt="logo" width={100} height={100} className="relative h-[130px] w-[200px] "/>
          </div>
          <div>
            <Image src="/assets/techstack/vercel.png" alt="logo" width={100} height={100} className="relative h-[130px] w-[200px]"/>
          </div>
          <div>
            <Image src="/assets/techstack/tailwindcss.png" alt="logo" width={100} height={100} className="relative h-[130px] w-[200px]"/>
          </div>
        </div>

        <div className='flex flex-row mt-10'>
          <div>
            <Image src="/assets/techstack/restapi.png" alt="logo" width={100} height={100} className="relative h-[130px] w-[170px] "/>
          </div>
          <div>
            <Image src="/assets/techstack/flutter.png" alt="logo" width={100} height={100} className="relative pr-2 h-[130px] w-[170px]"/>
          </div>
          <div>
            <Image src="/assets/techstack/figma.png" alt="logo" width={100} height={100} className="relative h-[130px] w-[190px]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default techstack