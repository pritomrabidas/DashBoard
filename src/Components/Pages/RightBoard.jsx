import { Link } from "react-router-dom";

const RightBoard = () => {
  const courseInfo = [
    { label: "Course Name", value: "Web Development with Python & Django" },
    { label: "Batch Number", value: "ES PD 2403" },
    { label: "Class Day", value: "Fri, Wed" },
    { label: "Class Time", value: "8:00 PM - 10:00 PM" },
  ];
  return (
    <div className="p-6 bg-[#fffffffd] mt-5 shadow-sm rounded-lg">
      {/* Tabs */}
      <ul className="flex border-b border-primary gap-3">
        <button className="px-4 py-2 text-primary text-lg font-Monrope font-medium">
          U FDR 2302
        </button>
      </ul>

      {/* Course & Payment Status */}
      <div className=" sm:p-6 p-2 mt-4 rounded-lg">
        <h1 className="text-xl text-primary font-Nunito-font font-bold">
          Course & Payment Status
        </h1>
        <table className="w-full text-left mt-4">
          <tbody>
            {courseInfo.map((item, index) => (
              <tr key={index} className="">
                <td className="px-4 py-2 font-medium text-primary sm:text-base text-sm font-Opensans">
                  {item.label}
                </td>
                <td className="px-4 py-2 font-medium text-primary text-sm font-Opensans">
                  : {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Status */}
        <div className="my-8">
          {[
            ["Class Status", "RUNNING"],
            ["Batch Status", "ONLINE"],
            ["Admission Status", "ACTIVE"],
            ["Student Status", "REGULAR"],
          ].map(([label, status]) => (
            <div
              key={label}
              className="flex justify-between items-center py-2 px-3.5 shadow-sm rounded-md my-1.5 "
            >
              <p className="text-sm text-primary font-Nunito-font font-medium">
                {label}
              </p>
              <span className="text-xs text-secandari font-Nunito-font font-normal">
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-6 text-center">
          {[
            ["Tuition Fee", "60000/-"],
            ["Additional Fee", "2000/-"],
            ["Add On Fee", "0/-"],
            ["Total Fee", "62000/-"],
            ["Discount", "27000/-"],
            ["Payable Amount", "35000/-"],
          ].map(([label, amount]) => (
            <div key={label} className="bg-secandari scale-95 p-4 rounded-lg">
              <p className="text-sm text-primary font-Monrope font-medium ">
                {label}
              </p>
              <h1 className="text-lg font-semibold text-primary font-Monrope">
                {amount}
              </h1>
            </div>
          ))}
        </div>

        <Link
          href="accounts"
          className="mt-6 block text-center bg-secandari text-white py-2 rounded-lg hover:bg-[#2b642b] duration-300 transition"
        >
          More Details
        </Link>
      </div>

      {/* Student Status Report */}
      <div className=" p-6 mt-6 rounded-lg">
        <h1 className="text-xl font-Nunito-font text-primary font-bold mb-4">
          Student Status
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            ["Module Class", "64/64"],
            ["Extra Class", "0"],
            ["Review Class", "0/0"],
            ["Present Class", "58/64"],
            ["Home Work", "49/64"],
            ["Absent Class", "6/64"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-secandari p-4 rounded-lg text-center shadow"
            >
              <p className="text-sm text-primary font-Monrope font-medium ">
                {label}
              </p>
              <h2 className="text-lg font-semibold text-primary font-Monrope">
                {value}
              </h2>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-6 space-y-4">
          {[
            ["Complete Module Class", 100],
            ["Total Present Class", 91],
            ["Total Absent Class", 9],
            ["Total Home Work Submit", 77],
          ].map(([label, percentage]) => (
            <div key={label}>
              <p className="mb-2 text-primary text-sm font-Opensans font-medium">
                {label}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-secandari to-orange-400 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBoard;
