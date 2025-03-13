import { PiPhoneThin } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const StudentCard = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-7 mb-5 relative flex flex-col md:flex-row items-center">
      <div className="relative w-48 h-48 ">
        <button className="absolute top-1 right-1 bg-secandari text-white p-2 rounded-full cursor-pointer text-sm">
          ✏
        </button>
        <img
          src="https://app.creativeitinstitute.com/images/student/pritom-robidas_1690956894.png"
          alt="Profile"
          className="w-full h-full rounded-t-md"
        />
      </div>

      <div className="md:w-2/3 lg:w-4/5 text-center md:text-left mt-4 md:mt-0 md:ml-6">
        <h3 className="text-xl font-semibold font-Popins text-primary">
          Pritom Rabidas
        </h3>
        <p className="text-gray-600 text-base font-medium font-Monrope flex items-center justify-center md:justify-start gap-2">
          <PiPhoneThin /> 01929712201
        </p>
        <p className="text-gray-600 text-base font-medium font-Monrope flex items-center justify-center md:justify-start gap-2">
          <FaRegEnvelope /> pritomrabidas102@gmail.com
        </p>

        <div className="flex justify-center items-center md:justify-start space-x-4 mt-3">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl hover:text-blue-800"
          >
            <FaLinkedinIn className="text-base" />
          </Link>
          <button className="border-dotted  border-dotted-gray-400 text-gray-600 p-2 rounded-sm cursor-pointer">
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
