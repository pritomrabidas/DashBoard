import { Link } from "react-router-dom";
import ProgressBar from "./Pages/ProgressBar";
import StatCard from "./Pages/StatCard";

const Batch = () => {
  return (
    <section className="pt-20 ">
      <div className="container mx-auto sm:px-5 pt-5">
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
              / Batch
            </li>
          </ul>
        </div>
        <div className="w-full border-b border-brand pt-2">
          <button className=" text-primary text-sm font-normal font-Popins px-2">
            U FDR 2302
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-7">
          <div className="bg-white shadow p-6 rounded-lg">
            <h5 className="font-semibold font-Nunito-font text-lg text-primary mb-4 border-b border-brand pb-5">
              My Service
            </h5>
            <ul>
              <li className="flex justify-between p-2 text-sm text-primary font-Monrope font-normal cursor-pointer">
                <b>24/7 Online Support</b>
                <div>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    0 Hours
                  </span>
                  <span className="bg-secandari text-xs text-white px-2 py-1 ml-2 rounded">
                    8 Hours
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow p-6 rounded-lg ">
              <div className=" top-2 right-2 justify-between items-center flex pb-7">
                <h5 className="font-semibold font-Nunito-font text-lg text-primary">
                  U FDR 2302
                </h5>
                <div className=" space-x-2">
                  <span className="bg-secandari text-xs font-Popins text-white px-2 py-1 rounded">
                    Active
                  </span>
                  <span className="bg-secandari text-xs font-Popins text-white px-2 py-1 rounded">
                    Regular
                  </span>
                </div>
              </div>

              <ProgressBar label="Complete Module Class" percentage={100} />
              <ProgressBar label="Total Present Class" percentage={91} />
              <ProgressBar
                label="Total Absent Class"
                percentage={9}
                color="red"
              />
              <ProgressBar label="Total Home Work Submit" percentage={77} />
            </div>

            <div className="grid grid-cols-2 gap-4 shadow p-6 rounded-lg">
              {[
                { label: "Module Class", value: "64/64" },
                { label: "Extra Class", value: "0" },
                { label: "Review Class", value: "0/0" },
                { label: "Present Class", value: "58/64" },
                { label: "Home Work", value: "49/64" },
                { label: "Absent Class", value: "6/64" },
              ].map((item, index) => (
                <StatCard key={index} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batch;
