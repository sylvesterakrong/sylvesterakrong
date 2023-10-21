import React from 'react'
import { footerLinks } from '../../../../constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' 
    flex flex-col text-black-100 mt-5 
    bg-hero bg-cover bg-center mix-blend-exclusion px-15 pr-20 pl-18' >
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start intems-start gap-6'>

          <h2 className='font-bold text-xl  text-gray-300 '>sylvester</h2>
          <p className='text-base text-gray-600'>
            All rights reserved &copy;
          </p>
        </div>

          <div className="footer__links">
            {footerLinks.map((link) => (
              <div key={link.title}className='footer__link pb-5 mb-5'>
                <h3 className='font-bold text-gray-300'>
                  {link.title}
                </h3>
                {link.links.map((item) => (
                  <Link
                  key={item.title}
                  href={item.url}className='text-gray-400'>
                    {item.title}
                 </Link>
                ))}
              </div>
            ))}

          </div>
          </div>
          <div className='flex justify-between items-center flex-wrap mt-4 px-6 py-10'>

            <p className='text-gray-500'>@2023 Sylvester. All Rights Reserved</p>
              <div className='footer__copyrights-link'>
                <Link href="/" className='text-gray-500'>
                    Built by me with NextJS ,
                </Link>
                <Link href="/" className='text-gray-500'>
                    Designed with Figma , 
                </Link>
                <Link href="/" className='text-gray-500'>
                    Hosted on Vercel
                </Link>

              </div>
          </div>
    </footer>
  )
}

export default Footer