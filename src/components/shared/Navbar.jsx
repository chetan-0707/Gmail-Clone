// import React, { useEffect, useState } from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoSearch } from "react-icons/io5";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { IoSettingsOutline } from "react-icons/io5";
// import { PiDotsNineBold } from "react-icons/pi";
// import Avatar from 'react-avatar';
// import { useDispatch } from 'react-redux';
// import { setSearchText } from '../../redux/appSlice';


// export default function Navbar() {
//   const[input,setInput] = useState("");
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(setSearchText(input));
//   },[input])
//   return (
//     <div className='flex items-center justify-between mx-3 h-16'>

//         <div className='flex items-center gap-10'>
          
//           <div className='flex items-center gap-2'>
//                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
//                <RxHamburgerMenu size={"20px"}/>
//                </div>
//                <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail_logo" />
//                 <h1 className='text-2xl text-gray-500 font medium'>Gmail</h1>
//           </div>
//         </div>

//         <div className='md:block hidden w-[50%] mr-60'>
//             <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
//              <IoSearch size={"24px"} className='text-gray-700'/>
//              <input type='text'
//              value={input}
//              onChange={(e) => setInput(e.target.value)}
//              placeholder='Search Mail'
//              className='rounded-full w-full bg-transparent outline-none px-1'
//              />
//             </div>
//         </div>

//         <div className='md:block hidden'>
//           <div className='flex items-center gap-2'>
//            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
//            <FaRegQuestionCircle size={"20px"}/>
//            </div>

//            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
//            <IoSettingsOutline size={"20px"}/>
//            </div>

//            <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
//            <PiDotsNineBold size={"20px"}/>
//            </div>

//            <div className='cursor-pointer'>
//               <Avatar src='data:image/jpeg;base64,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' size='40' round={true}/>
//            </div>
//           </div>

          

//         </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser,setSearchText } from '../../redux/appSlice';
// import {  setSearchText } from '..';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useSelector(store => store.appSlice);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(setAuthUser(null));
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    dispatch(setSearchText(search));
  }, [search]);


  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RxHamburgerMenu size={'20px'} />
          </div>
          <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
          <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>
      </div>
      <div className='md:block hidden w-[50%] mr-60'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full'>
          <IoIosSearch size="24px" className='text-gray-700' />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Seach mail'
            className='rounded-full w-full bg-transparent outline-none px-1'
          />
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className='relative cursor-pointer'>
            <Avatar onClick={() => setToggle(!toggle)} src={authUser?.photoURL} googleId="118096717852922241760" size="40" round={true} />
            <AnimatePresence>
              {
                toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
