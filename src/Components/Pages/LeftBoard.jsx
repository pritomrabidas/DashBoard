import { Link } from "react-router-dom";

const LeftBoard = () => {
  return (
    <div className="w-[60%] p-5 mb-9">
      {/* Profile Section */}
      <div className="flex flex-col items-center md:flex-row  bg-secandari shadow px-10 pt-16 rounded-t-lg">
        <div className="relative w-48 h-48">
          <button className="absolute top-1 right-1 bg-secandari text-white p-2 rounded-full cursor-pointer">
            ✏
          </button>
          <img
            src="https://app.creativeitinstitute.com/images/student/pritom-robidas_1690956894.png"
            alt="Profile"
            className="w-full h-full rounded-t-md"
          />
        </div>
        <div className="ml-7 ">
          <h1 className="text-2xl font-Nunito-font font-normal text-[#edececfd]">
            Pritom Rabidas
          </h1>
          <p className="text-lg font-Nunito-font font-normal text-[#edececfd]">
            <strong>Mobile:</strong> 01929712201
          </p>
          <p className="text-base font-Nunito-font font-normal text-[#edececfd]">
            <strong>Email:</strong> pritomrabidas102@gmail.com
          </p>
          <div className="pt-2">
            <Link
              to="profile"
              className="bg-green-500 text-[#edececfd] py-2 px-4 rounded-lg text-sm font-normal font-Nunito-font"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="bg-white shadow-sm p-7 rounded-b-lg">
        <h2 className="text-xl font-medium text-primary font-Monrope mb-3">
          Personal Details
        </h2>
        <table className="w-[60%] border-collapse text-sm font-normal text-primary font-Monrope">
          <tbody>
            {[
              ["Father's Name", "Ganesh Rabidas"],
              ["Mother's Name", "Asha Rabidas"],
              ["Guardian Phone", "01795935001"],
              ["NID No.", "1960374930"],
              ["Birth ID", "20033318657004680"],
              ["Date Of Birth", "2nd September 2003"],
              ["Gender", "Male"],
              ["Blood Group", "B+"],
              ["Occupation", "Unemployed"],
            ].map(([label, value], index) => (
              <tr key={index} className="">
                <td className="py-2 px-4 font-medium">{label}</td>
                <td className="py-2 px-4">: {value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-sm p-5 mt-5 rounded-lg">
        <h2 className="text-xl font-normal font-Monrope text-primary mb-3">
          Educational Background
        </h2>
        <div className="p-5 rounded-md bg-[#edf1f863]">
          <h3 className="font-medium font-Nunito-font text-2xl text-secandari">
            HSC
          </h3>
          <p className="font-normal font-Monrope text-[#858282] text-base">
            <span>GPA/CGPA :</span> 3.92
          </p>
          <p className="font-normal font-Monrope text-[#858282] text-base">
            <span>Passing Year :</span> 2022
          </p>
          <p className="font-normal font-Monrope text-[#858282] text-base">
            <span>Board :</span> Dhaka
          </p>
        </div>
      </div>
      <div className="text-center bg-white shadow-sm p-6 rounded-lg mt-4">
        <h2 className="text-2xl font-semibold font-Opensans text-secandari">
          Frontend Development With React <br />
          PRE-ASSESSMENT RESULT
        </h2>

        <span className="text-red-500 text-4xl mt-2">
          <i className="fas fa-sad-tear"></i>
        </span>

        <h4 className="text-lg text-primary font-Popins font-medium mt-3">
          You’ve Achieved
        </h4>
        <h3 className="text-2xl font-Nunito-font font-bold text-red-600">
          Grade D
        </h3>

        <div className="p-4 mt-4 bg-[#f3f4f66e] rounded-md flex flex-col sm:flex-row justify-between items-center">
          <h5 className="text-base text-primary font-Monrope font-semibold">
            Prerequisite Course 1
          </h5>
          <div className="text-sm font-medium text-primary font-Monrope">
            <b>Coupon:</b> cit-web
          </div>
          <Link
            to=""
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-4 py-2 bg-secandari text-white rounded-md hover:bg-green-700 duration-200 transition text-xs font-medium font-Monrope"
          >
            Go To Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBoard;
