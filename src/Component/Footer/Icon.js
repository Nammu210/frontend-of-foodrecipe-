import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Icon = () => {
  return (
    <div className="icons_bar">
      <FaFacebook className="icon_fb" />
      <FaInstagram className="icon_insta" />
      <FaTwitter className="icon_twit" />
      <FaYoutube className="icon_youtube" />
    </div>
  );
};

export default Icon;
