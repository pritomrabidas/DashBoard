import React from 'react'

const AccountStatCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-sm text-base text-primary font-Nunito-font font-medium rounded-lg p-4 text-center">
      <p className="text-gray-700">{title}</p>
      <h5 className="text-lg font-bold">{value}</h5>
    </div>
  );
};

export default AccountStatCard

