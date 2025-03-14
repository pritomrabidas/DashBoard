import { Link } from "react-router-dom";
import StudentCard from "./Pages/StudentCard";
import ProfileLeft from "./Pages/ProfileLeft";

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
        <div className="">
          <ProfileLeft/>
        </div>
      </div>
    </section>
  );
};

export default Profile;
