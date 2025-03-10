import LeftBoard from "./Pages/LeftBoard";
import RightBoard from "./Pages/RightBoard";

const Dashboard = () => {
  return (
    <section className="pt-20 sm:px-5">
      <div className="container mx-auto px-2">
        <h1 className=" py-5 border-b border-brand text-2xl font-medium font-Nunito-font">
          Dashboard
        </h1>
        <div className="flex flex-col lg:flex-row w-full">
          <LeftBoard />
          <RightBoard />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
