import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-container padding-container gap-20 py-7 pb-15 md:gap-28 lg:py-20 xl:flex-row'>


    <div className="image-container justify-center items-center flex h-96 w-30 ">

        <Image src="/assets/banner/hero.png" alt="logo" width='500' height='500' className='object-fill h-[430px] w-[410px] pt-10'/>
        
    </div>

    <div className='text-center p-8 text-yellow-600 font-semibold'>
        <h3> and </h3>
        <p>You are welcome to my space</p>
    </div>
    
    </section>
  )
}

export default Hero