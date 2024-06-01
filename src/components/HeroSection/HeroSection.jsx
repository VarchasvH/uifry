import Image from "next/image";
import phone1 from "../../../public/assets/phone1.svg";
import phone2 from "../../../public/assets/phone2.svg";
import eclipses from "../../../public/assets/eclipses.svg";
import ribbon from "../../../public/assets/ribbon.svg";
import watchVideo from "../../../public/assets/watch-video.svg";
import blur from "../../../public/assets/blur.svg";

const HeroSection = () => {
  return (
    <div className='grid md:grid-cols-2'>
      {/* Left Part */}
      <div className='relative flex flex-col justify-center items-center'>
        {/* Title */}
        <h1 className='flex justify-center items-center font-extrabold md:text-6xl text-4xl md:pl-36 px-10 z-10 md:mt-16'>
          Make The Best Financial Decisions
        </h1>
        {/* Description */}
        <p className='flex justify-center items-center md:pl-36 px-10 mt-5 z-10 md:text-base text-sm'>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        {/* Buttons */}
        <div className='flex justify-center items-center md:mr-28 md:space-x-5 space-x-20 z-10'>
          <button className='bg-black text-white md:py-3 md:px-8 py-3 px-8 mt-5 rounded-xl hover:bg-gray-900'>
            Get Started
          </button>
          <div className='flex justify-center items-center gap-2 md:py-3 md:px-8 mt-5 rounded-xl'>
            <Image src={watchVideo} className='w-[20px] h-[20px]' alt='play' />
            <button>Watch Video</button>
          </div>
        </div>
        {/* Ribbon */}
        <Image
          src={ribbon}
          alt='ribbon'
          className='w-[500px] h-[500px] hidden md:block'
        />
      </div>
      {/* Right Part */}
      <div className='relative flex justify-center items-center md:mr-44 mr-20'>
        <div className='relative w-[300px] h-[300px] md:w-[550px] md:h-[500px]'>
          <Image
            alt=''
            src={phone1}
            className='absolute top-0 left-0 z-40 md:top-[-200px] md:left-0 md:w-full'
          />
          <Image
            alt=''
            src={phone2}
            className='absolute top-10 left-16 z-30 md:top-[-170px] md:left-24 md:w-full'
          />
          <Image
            alt=''
            src={phone1}
            className='absolute top-20 left-32 z-20 md:top-[-140px] md:left-48 md:w-full'
          />
          <Image
            alt=''
            src={eclipses}
            className='absolute top-0 left-20 z-10 md:top-[-200px] md:left-32 md:w-full'
          />
          <Image
            alt=''
            src={blur}
            className='absolute top-44 left-12 z-0 md:top-[60px] md:left-12 w-full md:z-0 rotate-180'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
