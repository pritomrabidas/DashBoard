import React from 'react'

const Dropdown = ({ label, options, selected, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
        {label}
      </label>
      <select
        className="xl:w-36 lg:w-32 md:w-36 sm:w-32 w-full flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown 
