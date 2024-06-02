import Image from "next/image";
import React from "react";
import getStarted from "../../../public/assets/get-started.svg";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className='flex flex-col md:mt-40 md:ml-24 mt-10 md:gap-10 gap-0 text-black bg-white'>
      <div className='md:ml-32 ml-16'>
        <h1 className='text-[#ff5555] font-mono md:text-xl text-lg'>FAQ</h1>
        <h2 className='font-extrabold md:text-5xl text-3xl font-sans'>
          Frequently Asked Questions
        </h2>
      </div>
      <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 grid-cols-1 w-[95%] mt-5 mb-0'>
        <div className='bg-[#ff5555] text-white md:ml-32 md:mr-10 rounded-md md:py-4 md:px-2 mx-10 my-2 py-2 px-4'>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl text-base font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base text-xs md:mt-5 md:mr-20'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className='text-black bg-white md:ml-10 md:mr-32 rounded-md md:py-4 md:px-2 md:mx-0 md:my-0 mx-10 my-2 py-2 px-4 mt-5 '>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base md:mt-5 md:mr-12'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 grid-cols-1 w-[95%] mt-5 mb-0'>
        <div className='text-black bg-white md:ml-32 md:mr-10 rounded-md md:py-4 md:px-2 md:mx-0 md:my-0 mx-10 my-2 py-2 px-4 mb-5 '>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base md:mt-5 md:mr-12'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className='bg-[#ff5555] text-white md:ml-10 md:mr-32 rounded-md md:py-4 md:px-2 mx-10 my-2 py-2 px-4'>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl text-base font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base text-xs md:mt-5 md:mr-20'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 grid-cols-1 w-[95%] mt-5 mb-0'>
        <div className='bg-[#ff5555] text-white md:ml-32 md:mr-10 rounded-md md:py-4 md:px-2 mx-10 my-2 py-2 px-4'>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl text-base font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base text-xs md:mt-5 md:mr-20'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
        <div className='text-black bg-white md:ml-10 md:mr-32 rounded-md md:py-4 md:px-2 md:mx-0 md:my-0 mx-10 my-2 py-2 px-4 mt-5 '>
          <div className='flex flex-col'>
            <h1 className='md:text-2xl font-bold md:ml-10 md:mr-20'>
              The Best Financial Accounting App Ever!
            </h1>
            <p className='md:ml-10 md:text-base md:mt-5 md:mr-12'>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:mr-16 ml-10 mr-12 mt-10'>
        <Link href='#'>
          <Image
            src={getStarted}
            alt='getStarted'
            className='md:w-[100%] md:h-[100%] w-[100%] h-[100%]'
          />
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
