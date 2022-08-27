import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/brewoptions")}>Brews</button>
      <button onClick={() => navigate("/data")}>Data</button>
    </div>
  );
};

export default NavBar;
