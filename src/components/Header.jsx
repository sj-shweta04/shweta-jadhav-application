import React from "react";
import { Link } from "react-scroll";
import { MdCoffee } from "react-icons/md";
import { GiCoffeeMug } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

function Header() {
  return (
    <section id="home">
      <div className="header">
        <h1>Welcome to Mr. Arun's Journalistic Journey!</h1>
        <p>Are you passionate about uncovering the truth, weaving compelling narratives, and making a real impact with your words? Then you've come to the right place!</p>
        <Link to="course" smooth={true}>
          <div className="btn header-btn">View Course</div>
        </Link>
      </div>
      {/* <div className="header-cards">
        <div className="card">
          <MdCoffee size={100} />
          <span>Great Americano</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <Link to="menu" smooth={true}>
            See Menu
          </Link>
        </div>
        <div className="card">
          <SiBuymeacoffee size={90} />
          <span style={{ marginTop: "0.5rem" }}>Delicious Latte</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <Link to="menu" smooth={true}>
            See Menu
          </Link>
        </div>
        <div className="card">
          <GiCoffeeMug size={100} />
          <span>Best Mocha</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <Link to="menu" smooth={true}>
            See Menu
          </Link>
        </div>
      </div> */}
    </section>
  );
}

export default Header;
