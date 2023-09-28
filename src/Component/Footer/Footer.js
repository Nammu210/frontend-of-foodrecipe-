import React from "react";
import './footer.css'
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer_sub">
       
        <div className="footer_cnt1">
          <div className="footer_1st_div">
         
          <div className="footer_img_cntnr">
          <div  id="facebook">
            <i class="fab fa-facebook"></i>
          </div>
          <div id="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div id="pinterest">
          <i class="fab fa-pinterest"></i>
          </div>
          <div id="Twitter">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div id="pinterest">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div  id="Mail">
            <i class="fas fa-envelope" color="white"></i>
          </div>

        </div> 
           

          <div className="scrollArrow" onClick={scrollToTop}>
          <i class="fa fa-arrow-up" aria-hidden="true" color="white"></i>
          </div>
          <div className="scrollText" onClick={scrollToTop}>
            Back to Top
          </div>
        </div>
        <ul className="footer_2nd_div">
          <li>All Categories</li>
          <li>Site Map</li>
          <li>About Us</li>
          <li>Help</li>
        </ul>

        </div>

        <div className="footer_cnt2">
          <div className="footer_cnt3">

          <div className="dis">The Discovery Family of Networks <button>^</button></div>
<div class="foot2">© 2022 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates All rights reserved.</div>


          </div>
          <div className="footer_cnt4">
            <ul className="footer_advetise">

          <li>Advertise</li>
<li>AdChoices</li>
<li>Privacy Notice</li>
<li>Visitor Agreement</li>
            </ul>
            <div className="california">California Privacy Notice   Do Not Sell or Share My Personal Information</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
