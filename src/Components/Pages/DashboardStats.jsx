import AccountStatCard from "./AccountStatCard";

const DashboardStats = () => {
  return (
    <div className="md:w-1/3 p-4">
      <div className="grid grid-cols-2 gap-4">
        <AccountStatCard title="Total Admission" value="2" />
        <AccountStatCard title="Total Payment" value="44900/-" />
        <AccountStatCard title="Total Paid" value="44000/-" />
        <AccountStatCard title="Total Due" value="0/-" />
      </div>
      <div className="bg-white text-primary text-base font-Nunito-font font-medium shadow-base rounded-lg p-4 mt-4">
        <h5 className="font-semibold">Account Notice</h5>
        <h5 className="pt-5">No Notice Found</h5>
      </div>
    </div>
  );
}

export default DashboardStats
