import React from "react";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";

function Quality() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="abt">
          <div className="abt1">
          <h2>About Mr. Arun</h2>
          </div>
          <div className="abt-card">
            <div>
              <span>
              Mr. Arun, a seasoned journalist with decades of experience in the field. From covering breaking news to investigative reporting, Mr. Arun has seen it all. His dedication to uncovering the truth and delivering it to the masses has earned him recognition and respect throughout his career. <br/><br/>
              But Mr. Arun's journey doesn't stop there. With a heart full of stories and a desire to inspire the next generation of journalists.
              </span><br />
              <span>
              Join Mr. Arun for a transformative 2-week online course designed to provide you with the skills, tools, and confidence to succeed in the fast-paced world of journalism. Whether you're a budding reporter, a seasoned writer looking to sharpen your skills, or simply someone with a passion for storytelling, this course is for you.
              </span>
            </div>
          </div>
        </div>
        <div className="moments">

        </div>
      </div>
      <div className="quote">
        <p>
          "Journalism can never be silent: that is its greatest virtue and its greatest fault. It must speak, and speak immediately, while the echoes of wonder, the claims of triumph and the signs of horror are still in the air"
        </p>
        <span>Henry Anatole Grunwald</span>
      </div>
    </section>
  );
}

export default Quality;
