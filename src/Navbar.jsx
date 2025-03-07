import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";
import { RiNotification4Line } from "react-icons/ri";

const Navbar = () => {
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
            <MdOutlineGridView className="cursor-pointer text-xl text-[#35353697] duration-200 hover:text-secandari" />
            <RiNotification4Line className="cursor-pointer text-lg text-[#35353697] hover:text-secandari" />

            {/* User Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 cursor-pointer">
                <span className="text-primary text-sm font-normal font-Nunito-font pr-2  hover:text-secandari">
                  Pritom Rabidas
                </span>
                <img
                  src="https://app.creativeitinstitute.com/images/student/pritom-robidas_1690956894.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {/* <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-48">
            <a
              href="/student/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="/student/password/change"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Change Password
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              History
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Support
            </a>
            <a
              href="https://app.creativeitinstitute.com/student/logout"
              className="block px-4 py-2 hover:bg-red-100 text-red-500"
            >
              Sign out
            </a>
          </div> */}
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed shadow-md z-30 h-full w-[8%] left-0 pt-20 overflow-x-hidden overflow-y-scroll">
hello mr
      </nav>
    </div>
  );
};

export default Navbar;
