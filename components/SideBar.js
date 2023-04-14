import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-[70px] h-auto"
            src="https://zealot.s3.us-west-2.amazonaws.com/Group_17863-removebg-preview.png"            
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/Brand/Dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/Brand/Dashboard"
                ? "bg-[#EFECFA] text-[#5F40FF]"
                : "text-gray-400 hover:bg-[#EFECFA] hover:text-[#5F40FF]"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/Brand/Missions">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/Brand/Missions" ||  router.pathname == "/Brand/Missions/setupMission"

              ? "bg-[#EFECFA] text-[#5F40FF]"
              : "text-gray-400 hover:bg-[#EFECFA] hover:text-[#5F40FF]"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Missions</p>
            </div>
          </div>
        </Link>

        <Link href="/Brand/Discover">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/Brand/Discover"
              ? "bg-[#EFECFA] text-[#5F40FF]"
              : "text-gray-400 hover:bg-[#EFECFA] hover:text-[#5F40FF]"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Discover</p>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
