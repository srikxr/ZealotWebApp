import { useState } from "react";
import Layout from "../../../../components/Layout";
import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Missions() {
    const router = useRouter();

  return (
    
    <>
      <Layout>
      <div className="flex flex-row mt-[5%]">
         <p className="text-gray-700 text-3xl mb-16 font-bold">Create a Mission</p>
         <div className='ml-[10%] md:ml-[60%] lg:ml-[70%]'>
                <Link href="/Brand/Missions/SetupMission">
                  <button
                        className= {`border-2 border-gradient-to-r from-purple-500 to-rose-400 bg-gray-100 pt-2 pb-2 pl-4 pr-4 rounded-xl text-gray-600 font-bold shadow-2xl hover:cursor-grab  hover:scale-110`}>
                        Go Back
                  </button>
                </Link>
          </div>
        </div>

        <div>
            <p className="text-gray-700 text-xl mb-1 font-bold">Provide Details</p>
            <p className="text-gray-500 text-md mb-10 font-regular">Provide more details about your mission.</p>

        </div>

        <div>

        </div>

          <div className='flex flex-row'>
                <Link href="/Brand">
                  <button
                        className='flex flex-row bg-gradient-to-r from-purple-500 to-rose-400 pt-2 pb-2 pl-4 pr-4 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                        Continue 
                        <img
                            className="w-[15px] h-[]] my-auto mx-auto ml-2"
                            src={"https://zealot.s3.us-west-2.amazonaws.com/Line.png"}        
                            alt="company logo"
                        />
                  </button>
                </Link>
              </div>
      </Layout>
    </>
  );
}
