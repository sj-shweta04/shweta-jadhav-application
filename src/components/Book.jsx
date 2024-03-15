import React from "react";
import Reservation from "./Reservation";

function Contact() {
  return (
    <section id="contact">
      <h1 className="heading-contact"></h1>
      <div className="contact-container">
        <div className="contact-hours">
          <h1>You Can Contact Us!!</h1>
          <span>Mon - Fri: 10:00 AM - 6:00 PM</span>
        </div>
        <div className="contact-booking">
          <h1>Book Your Course</h1>
          <Reservation />
        </div>
      </div>
    </section>
  );
}

export default Contact;
