import callIcon from '../../assets/Images/call.svg';
import emailIcon from '../../assets/Images/email.svg';
import igIcon from '../../assets/Images/instagramTop.svg';
import youTubeIcon from '../../assets/Images/youTubeTop.svg';
import fBookIcon from '../../assets/Images/fBookTop.svg';
import twitterIcon from '../../assets/Images/twitterTop.svg';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="contact-container">
        <img src={callIcon} alt="call icon" />
        <span className = 'contact'>(225) 555-0118</span>
        <img src={emailIcon} alt="email icon" />
        <span>michell.rivera@example.com</span>
      </div>
      <div className="promo-container">
        Follow us and get a chance to win 80% off
      </div>
      <div className="social-container">
        <span>Follow us:</span>

        <span className="image-wrapper">
          <img src={igIcon} alt="ig icon" />
        </span>
        <span className="image-wrapper">
          <img src={youTubeIcon} alt="youTube icon" />
        </span>
        <span className="image-wrapper">
          <img src={fBookIcon} alt="facebook icon" />
        </span>
        <span className="image-wrapper">
          <img src={twitterIcon} alt="twitter icon" />
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
