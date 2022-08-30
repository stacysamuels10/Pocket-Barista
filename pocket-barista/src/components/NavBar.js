import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/addnewbrew")}>New Brew</button>
      <button onClick={() => navigate("/brewguides")}>Guides</button>
      <button onClick={() => navigate("/data")}>Data</button>
    </div>
  );
};

export default NavBar;
