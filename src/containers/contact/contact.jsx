import "./contact.scss";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/insta.svg";

const contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-main">
          <div className="contact-main-heading">REACH US AT</div>
          <div className="contact-main-points">
            <div className="contact-main-point">
              <div className="contact-main-point-email">
                support@kicksup.com
              </div>
              <div className="contact-main-point-content">
                for any technical support
              </div>
            </div>
            <div className="contact-main-point">
              <div className="contact-main-point-email">info@kicksup.com</div>
              <div className="contact-main-point-content">
                for more information
              </div>
            </div>
            <div className="contact-main-point">
              <div className="contact-main-point-email">
                feedback@kicksup.com
              </div>
              <div className="contact-main-point-content">
                to send your feedback
              </div>
            </div>
            <div className="contact-main-point">
              <div className="contact-main-point-email">jobs@kicksup.com</div>
              <div className="contact-main-point-content">to work with us</div>
            </div>
          </div>
        </div>
        <div className="contact-links">
          <div className="contact-links-text">stay in touch</div>
          <div className="contact-links-imgs">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="insta" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
