import { useState } from "react";
import Dropdown from "./Dropdown ";

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
const FormComponents = () => {
    const [nationality, setNationality] = useState("");
    const [permanentDivision, setPermanentDivision] = useState("Dhaka");
    const [permanentDistrict, setPermanentDistrict] = useState("Gazipur");
    const [permanentUpazila, setPermanentUpazila] = useState("Sreepur");
  return (
    <div className="grid grid-cols-2 space-x-5">
      {/* Nationality Input */}
      <div className="mb-4">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Nationality
        </label>
        <input
          type="text"
          placeholder="Enter Student Nationality"
          className="w-36 flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </div>

      {/* Permanent Division Dropdown */}
      <Dropdown
        label="Permanent Division"
        options={divisions}
        selected={permanentDivision}
        onChange={setPermanentDivision}
      />

      {/* Permanent District Dropdown */}
      <Dropdown
        label="Permanent District"
        options={districts}
        selected={permanentDistrict}
        onChange={setPermanentDistrict}
      />

      {/* Permanent Upazila Dropdown */}
      <Dropdown
        label="Permanent Upazila"
        options={upazilas}
        selected={permanentUpazila}
        onChange={setPermanentUpazila}
      />
    </div>
  );
};

export default FormComponents;
