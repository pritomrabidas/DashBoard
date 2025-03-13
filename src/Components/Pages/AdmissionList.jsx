import { useState } from "react";

const AdmissionList = () => {
  const [admissionData, setAdmissionData] = useState([
    {
      id: 1,
      appId: 1001,
      name: "Pritom Rabidas",
      course: "Web Development",
      fee: 2000,
      due: 500,
      status: "Paid",
    },
    {
      id: 2,
      appId: 1002,
      name: "Jane Smith",
      course: "Data Science",
      fee: 2500,
      due: 1000,
      status: "Pending",
    },
  ]);

  const [installmentData, setInstallmentData] = useState([
    { id: 1, dueDate: "2025-03-15", amount: 250, status: "Pending" },
    { id: 2, dueDate: "2025-04-10", amount: 500, status: "Paid" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key, data, setData) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const Table = ({ data, columns, handleSort, setData }) => (
    <div className="overflow-x-auto w-full font-Nunito-font">
      <table className="min-w-full border-gray-300 text-xs sm:text-sm">
        <thead>
          <tr className="bg-gray-50">
            {columns.map(({ label, key }) => (
              <th
                key={key}
                className="p-2 cursor-pointer text-primary font-normal"
                onClick={() => handleSort(key, data, setData)}
              >
                {label}{" "}
                {sortConfig.key === key
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center font-normal">
              {columns.map(({ key }) => (
                <td
                  key={key}
                  className={`p-2 ${
                    key === "status" &&
                    (item[key] === "Paid" ? "text-green-600" : "text-red-600")
                  }`}
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 font-Popins">
        <h3 className="text-base sm:text-lg font-medium text-primary mb-3 sm:mb-4">
          Admission Details
        </h3>
        <Table
          // className="text-sm "
          data={admissionData}
          columns={[
            { label: "Sl No", key: "id" },
            { label: "Application ID", key: "appId" },
            { label: "Student Name", key: "name" },
            { label: "Course", key: "course" },
            { label: "Total Fee", key: "fee" },
            { label: "Due Amount", key: "due" },
            { label: "Status", key: "status" },
          ]}
          handleSort={handleSort}
          setData={setAdmissionData}
        />
      </div>

      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
          Installment Details
        </h3>
        <Table
          data={installmentData}
          columns={[
            { label: "Sl No", key: "id" },
            { label: "Due Date", key: "dueDate" },
            { label: "Amount", key: "amount" },
            { label: "Status", key: "status" },
          ]}
          handleSort={handleSort}
          setData={setInstallmentData}
        />
      </div>
    </div>
  );
};

export default AdmissionList;
