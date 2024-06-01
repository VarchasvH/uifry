import Image from "next/image";
import React from "react";
import phone from "../../../public/assets/phone-features-1.svg";
import cumstomizableStar from "../../../public/assets/customizable-star.svg";
import eclipses from "../../../public/assets/eclipses.svg";
import blur from "../../../public/assets/blur.svg";

const Customizable = () => {
  return (
    <div
      className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 grid-cols-1 mt-[-300px]'
      id='features'
    >
      <div className='flex md:hidden justify-center items-center md:ml-52 ml-20 md:mt-[-300px] mt-32 '>
        <div>
          <div className='flex  gap-5'>
            <Image
              src={cumstomizableStar}
              alt='featureStar'
              className='w-9 h-9 mt-9'
            />
            <p className='font-extrabold text-xl font-sans mt-10'>
              Fully Customizable
            </p>
          </div>
          <p className='mt-10 mr-10'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className='relative flex justify-center items-center md:mr-32 mr-20 md:mt-0 mb-64 '>
        <div className='relative w-[250px] h-[250px] md:w-[450px] md:h-[500px]'>
          <Image
            alt=''
            src={phone}
            className='absolute top-0 left-20 z-40 md:top-0 md:left-32 md:w-full'
          />
          <Image
            alt=''
            src={eclipses}
            className='absolute top-0 left-10 md:top-0 md:left-10 w-full  z-10'
          />
          <Image
            alt=''
            src={blur}
            className='absolute top-24 left-12 md:top-12 md:left-0 w-full md:z-0 rotate-180'
          />
        </div>
      </div>
      <div className='hidden md:flex justify-center items-center md:mr-52 mr-20 md:mt-[-300px] mt-32 '>
        <div>
          <div className='flex gap-5'>
            <Image
              src={cumstomizableStar}
              alt='featureStar'
              className='w-9 h-9 mt-9'
            />
            <p className='font-extrabold text-xl font-sans mt-10'>
              Full Customizable
            </p>
          </div>
          <p className='mt-10 mr-10'>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
