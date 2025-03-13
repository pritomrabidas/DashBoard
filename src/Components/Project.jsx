import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 pt-5">
        <div>
          <h1 className="text-2xl font-Nunito-font text-primary font-bold mb-4">
            Project & Practical List
          </h1>
          <ul className="flex space-x-2 text-gray-500 items-center pb-2">
            <li>
              <Link
                to="/"
                className="text-secandari text-sm font-normal font-Popins cursor-pointer"
              >
                Dashboard
              </Link>
            </li>
            <li className="text-sm font-normal font-Popins text-primary">
              / Project & Practical List
            </li>
          </ul>
        </div>
        <div className=" p-6 bg-white rounded shadow-md">
          <div className="overflow-x-auto pb-5">
            <table className=" w-full  min-w-max pb-5">
              <thead>
                <tr className="bg-gray-50 text-sm text-primary font-bold font-Nunito-font ">
                  <th className="text-center px-4 py-2 ">SL</th>
                  <th className="px-4 py-2 ">Exam Name</th>
                  <th className="text-center px-4 py-2 ">Exam Type</th>
                  <th className="text-center px-4 py-2 ">Mark</th>
                  <th className="text-center px-4 py-2 ">Duration</th>
                  <th className="text-center px-4 py-2 ">Start Time</th>
                  <th className="text-center px-4 py-2 ">End Time</th>
                  <th className="text-center px-4 py-2 ">Attendance</th>
                  <th className="text-center px-4 py-2 ">Status</th>
                  <th className="text-center px-4 py-2 ">Result</th>
                  <th className="text-center px-4 py-2 ">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-primary font-Nunito-font text-sm font-normal ">
                  <td className="text-center px-4 py-2 ">1</td>
                  <td className="px-4 py-2 ">
                    Frontend Development With React Exam 1
                  </td>
                  <td className="text-center px-4 py-2 ">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      Project
                    </span>
                  </td>
                  <td className="text-center px-4 py-2  ">5</td>
                  <td className="text-center px-4 py-2  ">90 Minutes</td>
                  <td className="text-center px-4 py-2 ">
                    7th December 2023, 12:00 AM
                  </td>
                  <td className="text-center px-4 py-2 ">
                    7th December 2023, 1:30 AM
                  </td>
                  <td className="text-center px-4 py-2 ">
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 cursor-pointer">
                      Absent
                    </span>
                  </td>
                  <td className="text-center px-4 py-2 ">Exam Ended!</td>
                  <td className="text-center px-4 py-2 ">0</td>
                  <td className="text-center px-4 py-2 ">
                    <button className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 cursor-pointer">
                      Request For Reassessment
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
