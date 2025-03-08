import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiHandbagThin } from "react-icons/pi";
import { BsDatabase } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LiaUser } from "react-icons/lia";
import { RxTimer } from "react-icons/rx";
import { PiPaperclipLight } from "react-icons/pi";
import { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { TbComponentsOff } from "react-icons/tb";
import { MdOutlineBarChart } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";

const Navbar = () => {
  const [prifile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [board, setBoard] = useState(false);
  return (
    <div className="">
      <nav className="fixed z-40 w-full top-0 bg-white shadow flex justify-between items-center px-4 py-5">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <FiAlignLeft className="cursor-pointer text-lg text-[#35353697] hover:text-secandari" />
            <div className="pl-10">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#9b9fa515] outline-none rounded-lg px-5 py-2.5 text-xs font-normal text-primary font-Opensans"
              />
            </div>
          </div>
          {/* Logo */}
          <h3 className="text-secandari font-Montez text-2xl font-bold">
            PRITOM
          </h3>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div className="relative">
              <MdOutlineGridView
                onClick={() => setBoard(true)}
                className="cursor-pointer text-lg text-[#35353697] hover:text-secandari "
              />
              {board && (
                <div
                  onClick={() => setBoard(false)}
                  className="fixed w-screen h-screen top-0 right-0 bg-[rgba(0,0,0,0)] z-50"
                >
                  <div className=" absolute right-[10%] top-14 mt-2 bg-white shadow-xs rounded-md  px-6 py-5 border border-[#9b9fa5a0] grid grid-cols-2 gap-7">
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <HiAdjustmentsVertical className="text-2xl text-center mx-auto" />
                      <p className="text-center  pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Setting
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <LiaUser className="text-2xl text-center mx-auto" />
                      <p className="text-center  pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Profile
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <TbComponentsOff className="text-2xl text-center mx-auto" />
                      <p className="text-center  pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Components
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <MdOutlineBarChart className="text-2xl text-center mx-auto" />
                      <p className="text-center  pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Profits
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <CiFileOn className="text-2xl text-center mx-auto" />
                      <p className="text-center  pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Surveys
                      </p>
                    </Link>
                    <Link
                      to="/"
                      className="duration-200 text-primary hover:text-secandari"
                    >
                      <BsSuitcaseLg className="text-2xl text-center mx-auto" />
                      <p className="text-center pt-0.5 pb-2 border-brand  text-xs   font-normal font-Nunito-font ">
                        Tasks
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <RiNotification4Line
                onClick={() => setNotification(true)}
                className="cursor-pointer text-lg text-[#35353697] hover:text-secandari "
              />
              {notification && (
                <div
                  onClick={() => setNotification(false)}
                  className="fixed w-screen h-screen top-0 right-0 bg-[rgba(0,0,0,0)] z-50"
                >
                  <div className=" absolute right-[7%] top-14 mt-2 bg-white shadow-xs rounded-md w-48 py-2 border border-[#9b9fa5a0]"></div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setProfile(true)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span className="text-primary text-sm font-normal font-Nunito-font pr-2  hover:text-secandari">
                  Pritom Rabidas
                </span>
                <img
                  src="https://app.creativeitinstitute.com/images/student/pritom-robidas_1690956894.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {prifile && (
                <div
                  onClick={() => setProfile(false)}
                  className="fixed w-screen h-screen top-0 right-0 bg-[rgba(0,0,0,0)] z-50"
                >
                  <div className=" absolute right-3 top-14 mt-2 bg-white shadow-xs rounded-md w-48 py-2 border border-[#9b9fa5a0]">
                    <Link
                      to="profile"
                      onClick={() => setProfile(true)}
                      className="block px-4 py-1.5 text-sm text-primary font-Nunito-font font-medium hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/"
                      onClick={() => setProfile(true)}
                      className="block px-4 py-1.5 text-sm text-primary font-Nunito-font font-medium hover:bg-gray-100"
                    >
                      Change Password
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setProfile(true)}
                      className="block px-4 py-1.5 text-sm text-primary font-Nunito-font font-medium hover:bg-gray-100"
                    >
                      History
                    </Link>
                    <Link
                      to="/"
                      onClick={() => setProfile(true)}
                      className="block px-4 py-1.5 text-sm text-primary font-Nunito-font font-medium hover:bg-gray-100"
                    >
                      Support
                    </Link>
                    <Link
                      to="/"
                      onClick={() => setProfile(true)}
                      className="block px-4 py-1.5 text-sm text-primary font-Nunito-font font-medium hover:bg-gray-100 "
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed shadow-md z-30 h-full w-[8%] left-0 mt-20 pb-24 overflow-x-hidden overflow-y-scroll">
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <MdOutlineSpaceDashboard className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Dashboard
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <PiHandbagThin className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Batch
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <BsDatabase className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Account
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <HiOutlineAcademicCap className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Acedemic
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <LiaUser className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Profile
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <RxTimer className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center border-b pb-3 border-brand  text-sm   font-normal font-Nunito-font ">
            Exams
          </p>
        </Link>
        <Link to="/" className="duration-200 text-primary hover:text-secandari">
          <PiPaperclipLight className="text-4xl text-center mx-auto mt-6" />
          <p className="text-center   text-sm   font-normal font-Nunito-font ">
            Project
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
