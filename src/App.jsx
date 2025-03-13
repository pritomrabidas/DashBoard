import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Components/Dashboard";
import Batch from "./Components/Batch";
import Account from "./Components/Account";
import Profile from "./Components/Profile";
import Exam from "./Components/Exam";
import Project from "./Components/Project";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/batch" element={<Batch />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/exam" element={<Exam />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
