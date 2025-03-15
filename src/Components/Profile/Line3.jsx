import React, { useState } from "react";
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const religions = ["Islam", "Hinduism", "Christianity", "Buddhism", "Others"];
const genders = ["Male", "Female", "Other"];

const Line3 = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("B+");
  const [isOpen, setIsOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [selectedReligion, setSelectedReligion] = useState(religions[0]);
  const [selectedGender, setSelectedGender] = useState(genders[0]);
  const [isReligionOpen, setIsReligionOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  return (
    <div className="w-full flex flex-row space-x-5 space-y-0">
      <div className="relative">
        <div className="mb-4">
          <label
            htmlFor="blood_group"
            className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
          >
            Blood Group
          </label>
          <div className="relative mt-1">
            {/* Button */}
            <button
              type="button"
              className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selectedBloodGroup}</span>
              <span
                className={`transition-transform text-xs ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto transition-all">
                {bloodGroups.map((group) => (
                  <li
                    key={group}
                    onClick={() => {
                      setSelectedBloodGroup(group);
                      setIsOpen(false);
                    }}
                    className={`cursor-pointer select-none px-4 py-2 flex justify-between ${
                      selectedBloodGroup === group
                        ? "bg-blue-100 text-secandari"
                        : "text-gray-700"
                    } hover:bg-blue-50`}
                  >
                    {group}
                    {selectedBloodGroup === group && (
                      <span className="text-blue-500">✔</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="relative">
        <label
          htmlFor="dob"
          className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="religion"
          className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
        >
          Religion
        </label>
        <button
          type="button"
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsReligionOpen(!isReligionOpen)}
        >
          <span>{selectedReligion}</span>
          <span
            className={`transition-transform ${
              isReligionOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isReligionOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto transition-all">
            {religions.map((religion) => (
              <li
                key={religion}
                onClick={() => {
                  setSelectedReligion(religion);
                  setIsReligionOpen(false);
                }}
                className={`cursor-pointer select-none px-4 py-2 flex justify-between ${
                  selectedReligion === religion
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700"
                } hover:bg-blue-50`}
              >
                {religion}
                {selectedReligion === religion && (
                  <span className="text-blue-500">✔</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="gender"
          className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1"
        >
          Gender
        </label>
        <button
          type="button"
          className="w-32 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsGenderOpen(!isGenderOpen)}
        >
          <span>{selectedGender}</span>
          <span
            className={`transition-transform ${
              isGenderOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isGenderOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto transition-all">
            {genders.map((gender) => (
              <li
                key={gender}
                onClick={() => {
                  setSelectedGender(gender);
                  setIsGenderOpen(false);
                }}
                className={`cursor-pointer select-none px-4 py-2 flex justify-between ${
                  selectedGender === gender
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700"
                } hover:bg-blue-50`}
              >
                {gender}
                {selectedGender === gender && (
                  <span className="text-blue-500">✔</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Line3;
