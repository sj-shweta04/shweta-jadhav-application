import React, { useContext } from "react";
import { slide as Course } from "react-burger-menu";
import { Context } from "../context/AddProvider";
import NavLinks from "./NavLinks";

function Navbar() {
  const { menuOpen, setMenuOpen } = useContext(Context);

  return (
    <>
      <div className="full-navbar">
        <NavLinks />
      </div>
      <div className="course-menu-container">
        <Course isOpen={menuOpen} onStateChange={(e) => setMenuOpen(e.isOpen) }>
          <NavLinks />
        </Course>
      </div>
    </>
  );
}

export default Navbar;
