import { Link } from "react-router-dom";
import StudentCard from "./Pages/StudentCard";
import ProfileLeft from "./Pages/ProfileLeft";
import ProfileRight from "./Pages/ProfileRight";

const Profile = () => {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 pt-5">
        <div className="pb-5">
          <h1 className="text-2xl font-Nunito-font text-primary font-bold mb-4">
            Profile
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
              / Profile
            </li>
          </ul>
        </div>
        <StudentCard />
        <div className="flex flex-col lg:flex-row space-x-5">
          <ProfileLeft />
          <ProfileRight />
        </div>
        <div className="justify-end text-end pr-5 pt-6">
          <button className="px-8 py-3 scale-95 rounded-2xl text-sm font-medium font-Monrope bg-secandari text-white duration-200 hover:bg-[#3a9a3afb] cursor-pointer">
            {" "}
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
