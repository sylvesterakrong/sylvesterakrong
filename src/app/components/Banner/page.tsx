import Image from "next/image"
import Link from "next/link"

const Banner = () => {
  return (
    <nav className='py-5 flex justify-between px-12 bg-hero bg-cover bg-center mix-blend-exclusion relative pr-10 pl-10'>
      
      <Link href="/" className="flex item-inline">
        <Image src="/assets/Websitegallery/katana.jpg" alt="logo" width={30} height={40} className="relative rounded-full"/>

        <Image src="/assets/icons/Sly.png" alt="logo" width={60} height={40} className="relative "/>
      </Link>
                  
      <ul className=" flex items-center relative border-b">
          <Link href="https://github.com/sylvesterakrong" className="pr-2  "> 
            <Image src="/assets/icons/Github.png" alt="logo" width={40} height={30}/>
          </Link>

          <Link href="https://x.com/sen__sly" className="pr-2"> 
            <Image src="/assets/icons/Twitter.png" alt="logo" width={28} height={30}/>
          </Link>

          <Link href="https://www.instagram.com/sen__sly/"> 
            <Image src="/assets/icons/Instagram.png" alt="logo" width={30} height={30}/>
          </Link>
      </ul>



      
    </nav>
)
}

export default Banner