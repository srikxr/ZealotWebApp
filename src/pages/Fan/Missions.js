// pages/BrandFan.js
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import axios from "axios";

const getUserType = async (userId) => {
  const res = await axios.get(`/api/getUserType?id=${userId}`);
  return res.data.user_type;
};

const Missions = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const router = useRouter();

  
  return (
    <div className=' w-screen h-full bg-black'>
       <h1 className='text-white'>Hello, this is missions</h1>
    </div>
  )
}


export default Missions;
