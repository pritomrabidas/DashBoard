import React, { useState } from "react";

const countryStatusOptions = ["Yes", "No"];
const divisions = [
  "Chattagram",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Sylhet",
  "Dhaka",
  "Rangpur",
  "Mymensingh",
];
const districts = [
  "Narsingdi",
  "Gazipur",
  "Shariatpur",
  "Narayanganj",
  "Tangail",
  "Kishoreganj",
  "Manikganj",
  "Dhaka",
  "Munshiganj",
  "Rajbari",
  "Madaripur",
  "Gopalganj",
  "Faridpur",
];
const upazilas = [
  "Kaliganj",
  "Kaliakair",
  "Kapasia",
  "Gazipur Sadar",
  "Sreepur",
];

const LocationForm = () => {
  const [selectedCountryStatus, setSelectedCountryStatus] = useState("No");
  const [isCountryStatusOpen, setIsCountryStatusOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(divisions[5]);
  const [isDivisionOpen, setIsDivisionOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[1]);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [selectedUpazila, setSelectedUpazila] = useState(upazilas[4]);
  const [isUpazilaOpen, setIsUpazilaOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 space-x-6">
      {/* Country Status Dropdown */}
      <div className="relative pb-2">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Now Out Of Country?
        </label>
        <button
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsCountryStatusOpen(!isCountryStatusOpen)}
        >
          <span>{selectedCountryStatus}</span>
          <span
            className={`transition-transform ${
              isCountryStatusOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isCountryStatusOpen && (
          <ul className="absolute z-10 w-full bg-white  rounded-md shadow-lg">
            {countryStatusOptions.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelectedCountryStatus(option);
                  setIsCountryStatusOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                  selectedCountryStatus === option ? "bg-gray-300" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Division Dropdown */}
      <div className="relative pb-2">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Present Division
        </label>
        <button
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsDivisionOpen(!isDivisionOpen)}
        >
          <span>{selectedDivision}</span>
          <span
            className={`transition-transform ${
              isDivisionOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isDivisionOpen && (
          <ul className="absolute z-10 w-fit bg-white rounded-md shadow-lg">
            {divisions.map((division) => (
              <li
                key={division}
                onClick={() => {
                  setSelectedDivision(division);
                  setIsDivisionOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                  selectedDivision === division ? "bg-gray-300" : ""
                }`}
              >
                {division}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* District Dropdown */}
      <div className="relative pb-2">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Present District
        </label>
        <button
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsDistrictOpen(!isDistrictOpen)}
        >
          <span>{selectedDistrict}</span>
          <span
            className={`transition-transform ${
              isDistrictOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isDistrictOpen && (
          <ul className="absolute z-10 w-fit bg-white  rounded-md shadow-lg">
            {districts.map((district) => (
              <li
                key={district}
                onClick={() => {
                  setSelectedDistrict(district);
                  setIsDistrictOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                  selectedDistrict === district ? "bg-gray-300" : ""
                }`}
              >
                {district}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Upazila Dropdown */}
      <div className="relative pb-2">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Present Upazila
        </label>
        <button
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          onClick={() => setIsUpazilaOpen(!isUpazilaOpen)}
        >
          <span>{selectedUpazila}</span>
          <span
            className={`transition-transform ${
              isUpazilaOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isUpazilaOpen && (
          <ul className="absolute z-10 w-fit bg-white rounded-md shadow-lg">
            {upazilas.map((upazila) => (
              <li
                key={upazila}
                onClick={() => {
                  setSelectedUpazila(upazila);
                  setIsUpazilaOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                  selectedUpazila === upazila ? "bg-gray-300" : ""
                }`}
              >
                {upazila}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationForm;
