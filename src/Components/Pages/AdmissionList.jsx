import { useState } from "react";

const AdmissionList = () => {
  const [admissionData, setAdmissionData] = useState([
    {
      id: 1,
      appId: 1001,
      name: "John Doe",
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

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

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
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Admission Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b">
                {[
                  { label: "Sl No", key: "id" },
                  { label: "Application ID", key: "appId" },
                  { label: "Student Name", key: "name" },
                  { label: "Course", key: "course" },
                  { label: "Total Fee", key: "fee" },
                  { label: "Due Amount", key: "due" },
                  { label: "Status", key: "status" },
                ].map(({ label, key }) => (
                  <th
                    key={key}
                    className="p-2 border cursor-pointer"
                    onClick={() =>
                      handleSort(key, admissionData, setAdmissionData)
                    }
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
              {admissionData.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="p-2 border">{student.id}</td>
                  <td className="p-2 border">{student.appId}</td>
                  <td className="p-2 border">{student.name}</td>
                  <td className="p-2 border">{student.course}</td>
                  <td className="p-2 border">${student.fee}</td>
                  <td className="p-2 border">${student.due}</td>
                  <td
                    className={`p-2 border ${
                      student.status === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {student.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Installment Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b">
                {[
                  { label: "Sl No", key: "id" },
                  { label: "Due Date", key: "dueDate" },
                  { label: "Amount", key: "amount" },
                  { label: "Status", key: "status" },
                ].map(({ label, key }) => (
                  <th
                    key={key}
                    className="p-2 border cursor-pointer"
                    onClick={() =>
                      handleSort(key, installmentData, setInstallmentData)
                    }
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
              {installmentData.map((installment) => (
                <tr key={installment.id} className="border-b">
                  <td className="p-2 border">{installment.id}</td>
                  <td className="p-2 border">{installment.dueDate}</td>
                  <td className="p-2 border">${installment.amount}</td>
                  <td
                    className={`p-2 border ${
                      installment.status === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {installment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdmissionList;
