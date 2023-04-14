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
                <Link href="/Brand/Missions/">
                  <button
                        className='border-2 border-gradient-to-r from-purple-500 to-rose-400 bg-gray-100 pt-2 pb-2 pl-4 pr-4 rounded-xl text-gray-600 font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                        Go Back
                  </button>
                </Link>
          </div>
        </div>

        <div>
            <p className="text-gray-700 text-xl mb-16 font-bold">Setup Mission</p>

        </div>
            
          <div className="grid lg:grid-cols-3 gap-5 mb-16 grid-cols-1">
            <div className="rounded-xl bg-white h-40 shadow-sm border-[3px] border-[#5F40FF] flex flex-row">
                <div className="my-auto ml-[12%]">
                    <img
                        className="w-[55px] h-auto"
                        src="https://zealot.s3.us-west-2.amazonaws.com/Group_17838-removebg-preview.png"            
                        alt="company logo"
                    />
                </div>
                <div className="flex flex-col my-auto">
                    <p className="text-gray-700 text-[24px] font-bold">Setup Mission</p>
                    <p className="text-gray-700 text-xl font-bold">Setup Mission</p>

                </div>
                
            </div>

            <div className="rounded bg-white h-40 shadow-sm"></div>
            <div className="rounded bg-white h-40 shadow-sm"></div>
          </div>
      </Layout>
    </>
  );
}
