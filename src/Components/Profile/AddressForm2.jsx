import React, { useState } from 'react'

const AddressForm2 = () => {
    const [permanentAddress, setPermanentAddress] = useState("");
  return (
    <div className="w-1/2">
      {/* Permanent Address Textarea */}
      <div className="mb-4">
        <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
          Permanent Address
        </label>
        <textarea
          placeholder="Enter Student Permanent Address"
          rows="5"
          className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white   focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AddressForm2
