import Image from "next/image";
import React from "react";
import phone1 from "../../../public/assets/phone-features-1.svg";
import featureStar from "../../../public/assets/feature-star.svg";
import featureCube from "../../../public/assets/feature-cube.svg";
import featureCuboid from "../../../public/assets/feature-cuboid.svg";
import eclipses from "../../../public/assets/eclipses.svg";
import blur from "../../../public/assets/blur.svg";

const Features = () => {
  return (
    <div
      className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 grid-cols-1 mt-0'
      id='features'
    >
      <div className='relative md:hidden flex justify-center items-center  ml-20 mt-40 mb-0'>
        <div className=' md:mr-64 mr-20'>
          <h2 className='text-orange-500 font-mono tracking-wide text-2xl'>
            FEATURES
          </h2>
          <p className='font-extrabold text-4xl font-sans'>Uifry Premium</p>
          <div className='mt-10 space-y-10'>
            <div className='flex flex-col'>
              <div className='flex gap-4 text-xl font-bold font-mono'>
                <Image
                  src={featureStar}
                  alt='featureStar'
                  className='w-6 h-6'
                />
                Budgeting Intervals
              </div>
              <div className='text-sm'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex gap-4 text-xl font-bold font-mono'>
                <Image
                  src={featureCube}
                  alt='featureStar'
                  className='w-6 h-6'
                />
                Budgeting Intervals
              </div>
              <div className='text-sm'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex gap-4 text-xl font-bold font-mono'>
                <Image
                  src={featureCuboid}
                  alt='featureStar'
                  className='w-6 h-6'
                />
                Budgeting Intervals
              </div>
              <div className='text-sm'>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center items-center md:mr-32 mr-20 md:mt-0 mb-64 '>
        <div className='relative w-[250px] h-[250px] md:w-[450px] md:h-[500px]'>
          <Image
            alt=''
            src={phone1}
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
      <div>
        <div className='relative hidden md:flex justify-center items-center md:ml-32 ml-20 md:mt-16 mt-32 md:mr-32 mr-20'>
          <div>
            <h2 className='text-orange-500 font-mono tracking-wide text-xl'>
              FEATURES
            </h2>
            <p className='font-extrabold text-5xl font-sans'>Uifry Premium</p>
            <div className='mt-10 space-y-10'>
              <div className='flex flex-col'>
                <div className='flex gap-4 text-xl font-bold font-mono'>
                  <Image
                    src={featureStar}
                    alt='featureStar'
                    className='w-6 h-6'
                  />
                  Budgeting Intervals
                </div>
                <div className='text-base'>
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex gap-4 text-xl font-bold font-mono'>
                  <Image
                    src={featureCube}
                    alt='featureStar'
                    className='w-6 h-6'
                  />
                  Budgeting Intervals
                </div>
                <div className='text-base'>
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex gap-4 text-xl font-bold font-mono'>
                  <Image
                    src={featureCuboid}
                    alt='featureStar'
                    className='w-6 h-6'
                  />
                  Budgeting Intervals
                </div>
                <div className='text-base'>
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
