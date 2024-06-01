import Image from "next/image";
import Logo from "../../../public/assets/ulfryLogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className='min-h-[3rem] flex justify-between items-center md:gap-96 p-4 text-black relative bg-white'>
      <div className='flex justify-center items-center space-x-12 md:pl-28'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Logo'
            className='md:w-[100px] md:h-[100px] w-[100px] h-[100px]'
          />
        </Link>
        <div className='md:gap-12 font-bold hidden md:flex'>
          <Link href='#' className='hover:text-[#cf4c4c] text-[#ff5555]'>
            Home
          </Link>
          <Link href='#' className='hover:text-gray-500'>
            About Us
          </Link>
          <Link href='#' className='hover:text-gray-500'>
            Pricing
          </Link>
          <Link href='#features' className='hover:text-gray-500'>
            Features
          </Link>
        </div>
      </div>
      <div className='md:mr-44'>
        <button className='bg-black hover:bg-gray-900 text-white md:py-3 md:px-8 hidden md:block rounded-xl '>
          Download
        </button>
      </div>

      {/* Hamburger Menu for small screens */}
      <label className='block md:hidden'>
        <input className='hidden peer' type='checkbox' />
        <div className='w-9 h-10 cursor-pointer flex flex-col items-center justify-center'>
          <div className='w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]'></div>
          <div className='w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden'></div>
          <div className='w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]'></div>
        </div>
        <div className='hidden peer-checked:flex flex-col items-center gap-4 mt-4 bg-white p-4 absolute top-16 right-0 shadow-lg rounded-md z-50'>
          <Link href='#' className='hover:text-[#cf4c4c] text-[#ff5555]'>
            Home
          </Link>
          <Link href='#' className='hover:text-gray-500'>
            About Us
          </Link>
          <Link href='#' className='hover:text-gray-500'>
            Pricing
          </Link>
          <Link href='#features' className='hover:text-gray-500'>
            Features
          </Link>

          <Link href='#' className='bg-black text-white py-2 px-8 rounded-xl'>
            Download
          </Link>
        </div>
      </label>
    </div>
  );
};

export default Header;
