import React, { useState } from "react";

const ProfileRight = () => {
  const [formData, setFormData] = useState({
    occupation: "",
    extracurricular_activities: "",
    know_about_us: "",
    interest_club: "",
    is_tribal: "No",
    is_disability: "No",
    education_degree_id: "HSC",
    education_board_id: "Dhaka",
    institute: "",
    group: "",
    year_of_passing: "",
    education_status: "Running",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="lg:w-[40%] w-full pt-0 lg:pt-20">
      <div className="p-6 bg-gray-50 shadow-sm rounded-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              placeholder="Enter Student Occupation"
            />
          </div>

          <div>
            <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
              Extracurricular Activities
            </label>
            <textarea
              name="extracurricular_activities"
              value={formData.extracurricular_activities}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              placeholder="Enter Student Extracurricular Activities"
            />
          </div>

          <div>
            <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
              Know About Us
            </label>
            <select
              name="know_about_us"
              value={formData.know_about_us}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            >
              <option value="Facebook">Facebook</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Online Searching">Online Searching</option>
              <option value="Media">Media</option>
              <option value="Friend">Friend</option>
              <option value="CIT Employee">CIT Employee</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
              Which Club Would You Like to Join?
            </label>
            <select
              name="interest_club"
              value={formData.interest_club}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
            >
              <option value="Creative Sports Club">Creative Sports Club</option>
              <option value="Creative Cultural Club">
                Creative Cultural Club
              </option>
              <option value="Creative Film & Photography Club">
                Creative Film & Photography Club
              </option>
              <option value="Creative English Club">
                Creative English Club
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Tribal / Indigenous Community?
              </label>
              <select
                name="is_tribal"
                value={formData.is_tribal}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Disability / Impairment?
              </label>
              <select
                name="is_disability"
                value={formData.is_disability}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Select Last Education Degree
              </label>
              <select
                name="education_degree_id"
                value={formData.education_degree_id}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              >
                <option value="SSC">SSC</option>
                <option value="O LEVEL">O LEVEL</option>
                <option value="HSC">HSC</option>
                <option value="A LEVEL">A LEVEL</option>
                <option value="DIPLOMA">DIPLOMA</option>
                <option value="GRADUATION">GRADUATION</option>
                <option value="POST GRADUATION">POST GRADUATION</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Select Last Education Board
              </label>
              <select
                name="education_board_id"
                value={formData.education_board_id}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
              Last Education Institute Name
            </label>
            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              placeholder="Enter Institute Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Group Name
              </label>
              <input
                type="text"
                name="group"
                value={formData.group}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
                placeholder="Enter Group Name"
              />
            </div>
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Year of Passing
              </label>
              <input
                type="text"
                name="year_of_passing"
                value={formData.year_of_passing}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
                placeholder="Year of Passing"
              />
            </div>
            <div>
              <label className="block text-sm font-Nunito-font font-medium text-gray-700 pb-1">
                Select Status
              </label>
              <select
                name="education_status"
                value={formData.education_status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-secandari outline-none text-xs text-primary font-Nunito-font font-normal duration-200"
              >
                <option value="Running">Running</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileRight;
