import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projectsdone = () => {
  return (
    <section className='pt-20'>
      <div>
        <h3 className='text-2xl font-medium text-teal-600'>Some Projects I have built</h3>
      </div>
      <div className='lg:flex gap-10 justify-center items-center'>
        <Link href={'https://elegantbuildersltd.vercel.app/'}>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={"/assets/projects/web1.jpg"} width='100' height='100' alt="logo" objectFit='cover' className='mix-blend-multiply items-center justify-center'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Elegant Builders LImited</h3>
            <p className='py-2'>
              This was a website for Elegant Builders Limited
            </p>
            <h4 className='py-4 text-teal-600'>Tools i used</h4>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Next JS</p>
            <p className='text-gray-800 py-1'>vercel</p>
          </div>
        </Link>

        <Link href={'https://blogtree.vercel.app/'}>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={"/assets/projects/web2.jpg"} width='100' height='100' alt="logo" objectFit='cover' className='mix-blend-multiply items-center justify-center'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>BlogTREE</h3>
            <p className='py-2'>
              This was a website for blogs and blog content
            </p>
            <h4 className='py-4 text-teal-600'>Tools i used</h4>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Next JS</p>
            <p className='text-gray-800 py-1'>vercel</p>
          </div>
        </Link>


        <Link href={'https://github.com/sylvesterakrong/Malici-Chrome-extension'}>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={"/assets/projects/web3.jpg"} width='100' height='100' alt="logo" objectFit='cover' className='mix-blend-multiply items-center justify-center'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Malici-Chrome Extension</h3>
            <p className='py-2'>
              An extension made to detect malicious URLs <br></br>easily when typed into the extension
            </p>
            <h4 className='py-4 text-teal-600'>Tools i used</h4>
            <p className='text-gray-800 py-1'>Html</p>
            <p className='text-gray-800 py-1'>CSS & Javascript</p>
            <p className='text-gray-800 py-1'>Manifest.Json</p>
          </div>
        </Link>
       
      </div>
    </section>
  )
}

export default projectsdone