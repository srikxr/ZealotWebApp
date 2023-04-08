// pages/BrandFan.js
import React from 'react';
import Header from '../../../components/Header'
import Link from 'next/link';


const index = () => {
  
  const descriptions = [
    {
      Title: "Unleash Your Creativity",
      Body: "create impactful content that showcases your creativity for your favorite brands."
  
    },
    {
      Title: "Personalized Missions",
      Body: "Join targeted missions tailored to your interests and collaborate with your favorite brands."
  
    },
    {
      Title: "Earn More, Create More",
      Body: "With Zealot, the better your content does online, the more you get paid"
  
    },
  ]
  return (
    <div className=' w-screen h-full bg-white'>
       <header classname=" top-0 p-5 flex flex-row max-w-7xl mx-auto z-20 justify-center items-center align-middle">
        <div className='flex p-5 items-center justify-left md:justify-left ml-[5%] '>
            <img 
              src="https://zealot.s3.us-west-2.amazonaws.com/Screen_Shot_2023-02-24_at_2.30+1+(1).png"
              className='w-[70px] h-[70px] flex'
            />
            
            <h1 className='font-bold font-inter flex text-[20px]'>
                Zealot
            </h1> 
          
            <div className='ml-[70%]'>
                <Link href="/Fan">
                  <button
                        
                        className=' bg-gradient-to-r from-purple-500 to-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                          For Fans
                  </button>
                </Link>
              </div>
              <div className='ml-[1%]'>
                <Link href="/Brand">
                  <button
                        className='border-2 border-gradient-to-r from-purple-500 to-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-xl text-black font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                          For Brands
                  </button>
                </Link>
              </div>
          </div>

         
      </header>

      <div className="w-full h-full align-middle md:mt-[10%]  mt-[30%] flex">
            
            <div className="w-[80%] md:w-[70%] mx-auto align-middle flex flex-col">
              <h1 className="font-bold text-black drop-shadow-lg md:text-[60px] text-[40px] items-center justify-center lg:justify-left md:justify-left justify-left md:text-center text-left flex z-0  content-left md:leading-[65px] leading-[45px]">
              Get Paid to Make Content For Brands You Love. 
              </h1>
              <p className=" mt-[2%]  md:justify-center justify-center lg:text-center md:text-center text-left font-Amiri font-regular md:items-center  lg:text-[20px] md:text-[10px] text-[15px] text-gray-400">
              Collaborate with your favorite brands to co-create authentic content that makes an impact, and get rewarded along the way!              </p>
            <div className='xl:mt-[3%] lg:mt-[5%] md:mt-[5%] mt-[12%] lg:justify-left md:justify-center justify-left lg:text-left md:text-left text-left flex flex-row'>
                <button
                className=' bg-gradient-to-r from-purple-500 to-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                  Signup as a Fan
                </button>
              </div>
              <Link href="/Brand" className='align-middle mx-auto mt-[1%]'>
                <button className=''>
                  <p className=" flex lg:justify-left md:justify-center justify-left lg:text-left md:text-left text-left font-light font-Inter text-[#706D6D] lg:text-[14px] md:text-[13px] text-[9px] lg:mt-[1%] md:mt-[2%] mt-[5%] hover:text-black underline">
                    Not a Fan? Signup as a Brand
                  </p>
                </button>
              </Link>

          <div className='mt-[5%] text-left md:text-center md:items-center md:justify-center '>
            <div className=''>
              <h1 className='text-[25px] text-black font-semibold md:text-[40px] mt-[15%] md:mt-[5%] drop-shadow-xl'>
              Collaborate with Brands You Love and Get Rewarded for Your Creativity.              </h1>
            </div>
            <div className='flex items-left justify-left flex-col md:flex-row mt-[10%] md:mt-[0%] mb-[20%]'>
              {descriptions.map((description, i) => (
                <div key={i} className=" mt-[5%] pl-0 md:ml-2 md:mr-2 bg-gray-200 rounded-xl drop-shadow-xl"> 
                  <h1 className='font-bold p-4 text-black'>{description.Title}</h1>
                  <p className='font-regular text-[13px] pl-3 pr-3 pb-4 text-black'>{description.Body}</p>
                </div>
              ))}
            </div>
          </div>


            </div>
          </div>
    </div>
  )
}


export default index;
