import { Link } from "react-router-dom";
import AdmissionList from "./Pages/AdmissionList";
import DashboardStats from "./Pages/DashboardStats";

const Account = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-5 pt-5">
        <div>
          <h1 className="text-2xl font-Nunito-font text-primary font-bold mb-4">
            Batch & Report
          </h1>
          <ul className="flex space-x-2 text-gray-500 items-center pb-2">
            <li>
              <Link
                to="/"
                className="text-secandari text-sm font-normal font-Popins cursor-pointer"
              >
                Dashboard
              </Link>
            </li>
            <li className="text-sm font-normal font-Popins text-primary">
              / Account
            </li>
          </ul>
        </div>
        <div className="">
          <AdmissionList />
          <DashboardStats />
        </div>
      </div>
    </section>
  );
};

export default Account;
