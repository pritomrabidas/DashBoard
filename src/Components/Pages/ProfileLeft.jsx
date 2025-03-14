import Line3 from "../Profile/Line3";

const ProfileLeft = () => {
  return (
    <div className="w-[60%] py-20">
      <div className="shadow bg-gray-50 p-6 rounded-md w-full">
        <div className="w-full flex flex-row space-x-6 space-y-0">
          <div className="mb-4">
            <label
              htmlFor="father_name"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              Father's Name
            </label>
            <input
              id="father_name"
              name="father_name"
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter Student Father's name"
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mather_name"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              Mather's Name
            </label>
            <input
              id="mather_name"
              name="mather_name"
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter Student Father's name"
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guardian's Phone"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              Guardian's Phone
            </label>
            <input
              id="Guardian's Phone"
              name="Guardian's Phone"
              type="number"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter Student Guardian's Phone"
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
        </div>
        <div className="w-full flex flex-row space-x-6 space-y-0">
          <div className="mb-4">
            <label
              htmlFor="Student Alternative Number"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              Student Alternative Number
            </label>
            <input
              id="Student Alternative Number"
              name="Student Alternative Number"
              type="number"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter Student Alternative Number"
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="National ID No"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              National ID No.
            </label>
            <input
              id="National ID No."
              name="National ID No."
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter National ID No."
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Birth Reg ID No"
              className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
            >
              Birth Reg ID No.
            </label>
            <input
              id="Birth Reg ID No."
              name="Birth Reg ID No."
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Birth Reg ID No."
              className="w-48 p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
        </div>
        <Line3 />
      </div>
    </div>
  );
};

export default ProfileLeft;
