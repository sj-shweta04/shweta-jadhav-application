import React from "react";
import Slider from "react-slick";

function News() {
  // Slider settings //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section id="news">
      <div className="news-container">
        <h1>Reports By Mr. Arun</h1>
        <h2>There is more than this!</h2>
        <Slider {...settings} className="slider">
          <article className="news-card">
            <img
              src="https://static01.nyt.com/images/2012/12/17/sports/AVIE_NightSki-slide-87OV/AVIE_NightSki-slide-87OV-custom2.jpg"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>December 2019</span>
              <span>Snow Fall - The Avalanche at Tunnel Creek</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_640.jpg"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>August 2018</span>
              <span>BREAKING THE BLACK BOX - What Facebook Knows About You</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://cdn.thewire.in/wp-content/uploads/2024/01/15173435/Mumbai.jpg"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>March 2024</span>
              <span>Human Development Index: India Ranks 134th, Falls Behind Bangladesh, Sri Lanka, Bhutan and China</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://s3.eu-central-1.amazonaws.com/datajournalismcom/long-reads/best-data-journalism-projects-2022/Captura-de-pantalla-2022-12-14-a-las-14.10.29.png"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>May 2022</span>
              <span>Twitter, Tesla and Copious Emojis: What and When Elon Musk Tweets, The Wall Street Journal</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://assets-global.website-files.com/600865f0dc1db856edc28cd0/62467769093843aa622b8848_Niti-Aayog.jpg"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>August 2023</span>
              <span>How Niti Aayog Hand-Picked SC Rulings To Probe Judicial Activism</span>
            </div>
          </article>
          <article className="news-card">
            <img
              src="https://assets-global.website-files.com/600865f0dc1db856edc28cd0/65e19d7bfaa4f4006dbc27af_Coal%20Rigged%20Correct%20Size.png"
              alt="news"
              style={{ width: "100%" }}
            />
            <div className="news-description">
              <span>March 2024</span>
              <span>Modi gov't illegally barred West Bengal from coal auction, benefiting a corporate</span>
            </div>
          </article>
        </Slider>
      </div>
    </section>
  );
}

export default News;
