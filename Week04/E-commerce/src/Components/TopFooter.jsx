import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
const TopFooter = () => {
  return (
    <div >
      <nav className="top-footer-nav">
        <div className='top-footer-text'>
          <h3>Bandage</h3>
        </div>
        <div className='top-footer-link'>
          <a href="#">
            <BiLogoFacebookCircle className="primary-color" />
          </a>
          <a href="#">
            <AiOutlineInstagram className="primary-color" />
          </a>
          <a href="#">
            <AiOutlineTwitter className="primary-color" />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default TopFooter;
