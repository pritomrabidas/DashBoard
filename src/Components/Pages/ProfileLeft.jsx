import Line3 from "../Profile/Line3";
import LocationForm from "../Profile/LocationForm";
import FormComponents from "../Profile/FormComponents";
import AddressForm from "../Profile/AddressForm";
import AddressForm2 from "../Profile/AddressForm2";

const ProfileLeft = () => {
  return (
    <div className="lg:w-[60%] w-full py-20">
      <div className="shadow bg-gray-50 p-6 rounded-md w-full">
        <div className="w-full flex flex-col sm:flex-row xl:space-x-6 space-x-3  space-y-2">
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row xl:space-x-6 space-x-2 space-y-2">
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
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
              className="xl:w-48 lg:w-44 md:w-48 sm:w-44 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            />
          </div>
        </div>
        <Line3 />
        <div className="flex sm:flex-row flex-col">
          <LocationForm />
          <AddressForm />
        </div>
        <div className="flex sm:flex-row flex-col">
          <FormComponents />
          <AddressForm2 />
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
