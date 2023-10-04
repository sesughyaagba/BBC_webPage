import dropDown from '../../assets/Images/dropdown.svg';
import search from '../../assets/Images/search.svg';
import cart from '../../assets/Images/cart.svg';
import login from '../../assets/Images/login.svg';
import like from '../../assets/Images/like.svg';

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <div className="logo">
        <h2>Bandage</h2>
      </div>
      <div className="nav">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
            <span>
              <img src={dropDown} alt="dropDown" />
            </span>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Pages</a> <span></span>
          </li>
        </ul>
      </div>
      <div className="login-section">
        <span className="img-container1">
          <a href="#">
            <img className="counter" src={login} alt="login" />
          </a>
          <span className="login-text">Login/Register</span>
        </span>
        <span className="img-container2">
          <a href="#">
            <img src={search} alt="search icon" />
          </a>
        </span>
        <span className="img-container3">
          <a href="#">
            <img className="counter" src={cart} alt="cart" />
          </a>
          <span>1</span>
        </span>
        <span className="img-container4">
          <a href="#">
            <img className="counter" src={like} alt="Like" />
          </a>
          <span>1</span>
        </span>
      </div>
    </div>
  );
};

export default BottomHeader;
