
const StatCard = ({ label, value }) => {
  return (
    <div className="bg-secandari p-10 rounded-lg items-center justify-between text-center shadow-md w-fit h-fit">
      <p className="text-sm text-white font-Monrope font-normal">{label}</p>
      <p className="text-lg font-semibold font-Monrope text-white">{value}</p>
    </div>
  );
};

export default StatCard
