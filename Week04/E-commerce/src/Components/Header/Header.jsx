import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import MobileHeader from './MobileHeader';
import ChevronRight from '../../assets/Images/ChevronRight.svg';
import ChevronLeft from '../../assets/Images/ChevronLeft.svg';

const Header = () => {
  return (
    <header className="header">
      <div>
        <TopHeader />
        <BottomHeader />
        <MobileHeader />
      </div>
      <section className="banner">
        <div className="carousel">
          <div className="carousel-content">
            <img className="left-arrow" src={ChevronLeft} alt="Right click" />
            <img className="right-arrow" src={ChevronRight} alt="Left" />
            <div className="carousel-text-content">
              <div>
                <h5 className="summer">SUMMER 2020</h5>
              </div>
              <div>
                <h1 className="collection">NEW COLLECTION</h1>
              </div>
              <div>
                <h4 className="advert-text">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
              </div>
              <div>
                <button className="banner-button">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
