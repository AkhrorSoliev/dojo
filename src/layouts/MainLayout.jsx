import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../App.css";

function MainLayout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
