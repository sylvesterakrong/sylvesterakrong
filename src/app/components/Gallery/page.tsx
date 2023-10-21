import Image from 'next/image'
import React from 'react'

const gallery = () => {
  return (
    <section className='shadow-lg p-4 rounded-xl my-10'>
        <div className='text-left text-teal-600 text-2xl font-medium'>
          <h3> Sneek peak</h3>
        </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  
      '>

        
          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic1.jpeg" alt="logo" width={100} height={100} className="relative object-cover w-50 h-60" layout='responsive'/>
          </div>
          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic2.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src="/assets/Websitegallery/pic3.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
        

        
          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic4.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic7.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src="/assets/Websitegallery/pic6.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>

          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic5.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
          <div className='basis-1/4 flex-1'>
            <Image src="/assets/Websitegallery/pic9.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src="/assets/Websitegallery/pic8.jpg" alt="logo" width={100} height={100} className="relative object-cover" layout='responsive'/>
          </div>

      </div>
    </section>
  )
}

export default gallery