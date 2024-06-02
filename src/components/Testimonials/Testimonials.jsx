import Image from "next/image";
import testimonials from "../../../public/assets/people.svg";
import avatar from "../../../public/assets/avatars.svg";
import eclipses from "../../../public/assets/eclipses.svg";
import blur from "../../../public/assets/blur.svg";

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[-100px] md:mt-0'>
      <p className='font-mono md:text-xl'>TESTIMONIAL</p>
      <p className='font-extrabold md:text-5xl text-xl px-5   '>
        What Our Users
      </p>
      <p className='font-extrabold md:text-5xl text-xl px-5   '>
        Say About Us?
      </p>
      <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 grid-cols-1 '>
        <div className='relative flex justify-center items-center md:mr-44 mr-32'>
          <div className='relative w-[300px] h-[300px] md:w-[750px] md:h-[500px]'>
            <Image
              alt=''
              src={testimonials}
              className='absolute top-12 left-24 z-40 md:top-20 md:left-52 md:w-[100%]'
            />

            <Image
              alt=''
              src={eclipses}
              className='absolute top-0 left-12 z-10 md:top-0 md:left-32 md:w-full'
            />
            <Image
              alt=''
              src={blur}
              className='absolute top-12 left-10 z-0 md:top-0 md:left-12 w-full md:z-0 rotate-180'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='md:text-3xl text-lg font-bold font-sans  md:mr-28 mx-20'>
            &quot;The Best Financial Accounting App Ever!&quot;
          </p>
          <p className='md:text-lg text-sm mt-5 md:ml-24 md:mr-32 mx-20'>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image alt='' src={avatar} className='md:mr-80 w-[250px] mt-5' />
          <p className='md:mr-80  w-[250px] mt-5 font-bold text-lg'>
            Nick Jonas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
