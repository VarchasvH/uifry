import Image from "next/image";
import React from "react";
import phone from "../../../public/assets/phone-feature-2.svg";
import bell from "../../../public/assets/bell.svg";
import eclipses from "../../../public/assets/eclipses.svg";
import blur from "../../../public/assets/blur.svg";

const WhyUs = () => {
  return (
    <div
      className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 grid-cols-1 mt-[-300px]'
      id='features'
    >
      <div className=' flex justify-center items-center md:ml-52 ml-20 md:mt-[-300px] mt-32 '>
        <div>
          <h2 className='text-orange-500 font-mono tracking-wide text-xl'>
            ADVANTAGES
          </h2>
          <p className='font-extrabold md:text-5xl text-3xl font-sans'>
            Why Choose Uifry?
          </p>
          <div className='flex  gap-5'>
            <Image src={bell} alt='featureStar' className='w-9 h-9 mt-9' />
            <p className='font-extrabold text-xl font-sans mt-10'>
              Clever Notifications
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
      <div></div>
    </div>
  );
};

export default WhyUs;
