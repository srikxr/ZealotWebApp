import { useState } from "react";
import Layout from "../../../../components/Layout";
import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();

  return (
    
    <>
      <Layout>
        <div className="flex flex-row mt-[5%]">
         <p className="text-gray-700 text-3xl mb-16 font-bold">Active Missions</p>
         <div className='ml-[10%] md:ml-[60%] lg:ml-[70%]'>
                <Link href="/Brand/Missions/setupMission">
                  <button
                        className='border-2 border-gradient-to-r from-purple-500 to-rose-400 bg-[#6447D7] pt-2 pb-2 pl-4 pr-4 rounded-xl text-white font-bold shadow-2xl hover:cursor-grab  hover:scale-110 '>
                        Create a Mission +
                  </button>
                </Link>
          </div>
        </div>



        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      </Layout>
    </>
  );
}
