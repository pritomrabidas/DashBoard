const ProgressBar = ({ label, percentage, color = "green" }) => {
  return (
    <div className="mb-4">
      <p className="mb-2 font-semibold text-primary text-sm font-Nunito-font">{label}</p>
      <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
        <div
          className={`h-full bg-${color}-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 font-normal font-Monrope">{percentage}%</p>
    </div>
  );
};
export default ProgressBar