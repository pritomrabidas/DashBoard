import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Exam = () => {
  const [condition, setCondition] = useState(false);
  return (
    <section className="pt-20">
      <div className="container mx-auto px-2 pt-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-Nunito-font text-primary font-bold mb-4">
              Exam List
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
                / Exam List
              </li>
            </ul>
          </div>
          <div onClick={() => setCondition(!condition)}>
            <button className="px-4 py-2.5 cursor-pointer bg-secandari rounded-xl text-sm text-primary font-Nunito-font font-normal">
              Exam Turm condition
            </button>
          </div>
          {condition && (
            <div className="fixed top-0 right-0 inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.35)] bg-opacity-50 z-50">
              <div className="bg-white w-96 rounded-lg shadow-lg">
                <div className="p-4 border-b border-brand justify-between flex items-center">
                  <h2 className="text-lg font-medium text-primary font-Nunito-font">
                    Terms and Conditions
                  </h2>
                  <RxCross2 onClick={()=>setCondition(false)} className="cursor-pointer text-primary text-base duration-200 hover:text-red-400" />
                </div>
                <div className="p-4 space-y-2 text-sm text-primary font-Nunito-font font-normal">
                  <h5 className="font-bold pt-2">Exam Dos’ and Don’ts</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Don’t open any other browser while you are giving exams
                      otherwise, you will be logged out.
                    </li>
                    <li>Don’t open any new tab or click on another tab.</li>
                    <li>Don’t minimize Exam Browser.</li>
                    <li>Don’t click any kind of Notifications.</li>
                    <li>You can’t Inspect elements on the browser.</li>
                    <li>Don’t open VPN on Exam Time on the same device.</li>
                    <li>
                      If you agree with the above conditions, click the Enroll
                      Exam button and your exam starts now.
                    </li>
                  </ul>
                </div>
                <div className="p-4 flex justify-end border-t border-brand">
                  <button
                    onClick={() => setCondition(false)}
                    className="px-4 py-2 mr-2 text-gray-600 hover:bg-[#358d3597] duration-200 cursor-pointer rounded text-sm font-normal font-Opensans"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setCondition(false)}
                    className="px-4 py-2 bg-secandari hover:bg-[#358d35] text-white rounded cursor-pointer duration-200 text-sm font-normal font-Opensans"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card-body p-4 bg-gray-50 rounded-lg shadow-md mt-9">
          <div className="overflow-x-auto">
            <table className="table-auto w-full  min-w-max">
              <thead>
                <tr className="bg-gray-100 text-primary text-sm font-Nunito-font font-bold">
                  <th className="text-center px-4 py-2 ">SL</th>
                  <th className="px-4 py-2 ">Exam Name</th>
                  <th className="text-center px-4 py-2 ">Mark</th>
                  <th className="text-center px-4 py-2 ">Duration</th>
                  <th className="px-4 py-2 ">Exam Date &amp; Time</th>
                  <th className="text-center px-4 py-2 ">Attendance</th>
                  <th className="text-center px-4 py-2 ">Status</th>
                  <th className="text-center px-4 py-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>{/* Add table rows dynamically here */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exam;
