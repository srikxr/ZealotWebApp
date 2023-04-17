import { useState } from "react";
import Layout from "../../../../components/Layout";
import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Missions() {
    const router = useRouter();
    const [pressSocial, setPressSocial] = useState(false)
    const [pressUGC, setPressUGC] = useState(false)
    const [pressSurvey, setPressSurvey] = useState(false)
    const [showError, setShowError] = useState(false)
    const [chosenMission, setChosenMission] = useState("")

    const socialPressed = () => {
        if (pressSurvey === true || pressUGC === true) {
            setShowError(true)
        } else {
            setPressSocial(!pressSocial)
            setShowError(false)
            setChosenMission("SocialPost")
        }
    }

    const ugcPressed = () => {
        if (pressSocial === true || pressSurvey === true) {
            setShowError(true)
        } else {
            setPressUGC(!pressUGC)
            setShowError(false)
            setChosenMission("SubmitUGC")
        }
    }
    
    const surveyPressed = () => {
        if (pressSocial === true || pressUGC === true) {
            setShowError(true)
        } else {
            setPressSurvey(!pressSurvey)
            setShowError(false)
            setChosenMission("ProductSurvey")
        }
    }

  return (
    
    <>
      <Layout>
      <div className="flex flex-row mt-[5%]">
         <p className="text-gray-700 text-3xl mb-16 font-bold">Create a Mission</p>
         <div className='ml-[10%] md:ml-[60%] lg:ml-[70%]'>
                <Link href="/Brand/Missions/">
                  <button
                        className= {`border-2 border-gradient-to-r from-purple-500 to-rose-400 bg-gray-100 pt-2 pb-2 pl-4 pr-4 rounded-xl text-gray-600 font-bold shadow-2xl hover:cursor-grab  hover:scale-110`}>
                        Go Back
                  </button>
                </Link>
          </div>
        </div>

        <div>
            <p className="text-gray-700 text-xl mb-1 font-bold">Setup Mission</p>
            <p className="text-gray-500 text-md mb-10 font-regular">Choose a mission type for your fans go out and do.</p>

            <p className={`${showError === true ? "text-red-400 mb-[2%]" : "invisible"}`}>You can only select one mission!</p>

        </div>
            
          <div className="grid lg:grid-cols-3 gap-5 mb-16 md:grid-cols-1 grid-cols-1">
            <button onClick={() => {socialPressed()}}>
                <div className={`rounded-xl h-40 shadow-sm border-[3px] border-[#5F40FF] hover:cursor-pointer flex flex-row ${pressSocial === true ? "bg-[#5F40FF]" : "bg-white"}`}>
                    <div className="my-auto ml-[12%]">
                        <img
                            className="w-[55px] h-auto"
                            src={`${pressSocial === true ? "https://zealot.s3.us-west-2.amazonaws.com/Group+17839.png": "https://zealot.s3.us-west-2.amazonaws.com/Group_17838-removebg-preview.png"}`}        
                            alt="company logo"
                        />
                    </div>
                    <div className="flex flex-col my-auto ml-[10%]">
                        <p className={`text-[24px] font-bold text-center ${pressSocial === true ? "text-white" : "text-[#5F40FF]"}`}>Social Post</p>
                        <p className={`text-[13px] font-regular text-center ${pressSocial === true ? "text-white" : "text-gray-500"}`}>Have superfans post a piece of<br/>content on their profile.</p>
                    </div>
                </div>
            </button>

            <button onClick={() => {ugcPressed()}}>
                <div className={`rounded-xl h-40 shadow-sm border-[3px] border-[#5F40FF] hover:cursor-pointer flex flex-row ${pressUGC === true ? "bg-[#5F40FF]" : "bg-white"}`}>
                    <div className="my-auto ml-[12%]">
                        <img
                            className="w-[55px] h-auto"
                            src={`${pressUGC === true ? "https://zealot.s3.us-west-2.amazonaws.com/Vector+(2).png": "https://zealot.s3.us-west-2.amazonaws.com/__icon__camera_-removebg-preview.png" }`}        
                            alt="company logo"
                        />
                    </div>
                    <div className="flex flex-col my-auto ml-[10%]">
                        <p className={`text-[24px] font-bold text-center ${pressUGC === true ? "text-white" : "text-[#5F40FF]"}`}>Submit UGC</p>
                        <p className={`text-[13px] font-regular text-center ${pressUGC === true ? "text-white" : "text-gray-500"}`}>Have superfans submit content for<br/>your social profile or ads.</p>
                    </div>
                </div>
            </button>


            <button onClick={() => {surveyPressed()}}>
                <div className={`rounded-xl h-40 shadow-sm border-[3px] border-[#5F40FF] hover:cursor-pointer flex flex-row ${pressSurvey === true ? "bg-[#5F40FF]" : "bg-white"}`}>
                    <div className="my-auto ml-[12%]">
                        <img
                            className="w-[55px] h-auto"
                            src={`${pressSurvey === true ? "https://zealot.s3.us-west-2.amazonaws.com/Vector+(1).png": "https://zealot.s3.us-west-2.amazonaws.com/wpf_survey+(1).png"  }`}        
                            alt="company logo"
                        />
                    </div>
                    <div className="flex flex-col my-auto ml-[10%]">
                        <p className={`text-[24px] font-bold text-center ${pressSurvey === true ? "text-white" : "text-[#5F40FF]"}`}>Product Survey</p>
                        <p className={`text-[13px] font-regular text-center ${pressSurvey === true ? "text-white" : "text-gray-500"}`}>Get real-time product insights and<br/>feedback from your superfans.</p>
                    </div>
                </div>
            </button>
          </div>

          <div className='flex flex-row'>
                <Link href="/Brand/Missions/ProvideDetails">
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
