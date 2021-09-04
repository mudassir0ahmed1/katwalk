import React from "react";
import "./styles.css";
import instaIcon from "../../assets/imgs/instagram.svg";

const InstaFeed = () => {
  return (
    <div className="instaFeed">
      <h2>
        <img src={instaIcon} alt="" /> katwalk.sa
      </h2>
      <div className="feed"></div>
      <div className="subscribeInputWrapper">
        <span>Be the first to know what's new in katwalk </span>
        <div>
          <input placeholder="Email" type="text" id="forSubs" name="forSubs" />
          <label htmlFor="forSubs">Enter Your Email</label>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default InstaFeed;
