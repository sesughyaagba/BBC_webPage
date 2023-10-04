import TopHeader from "./TopHeader"
import BottomHeader from "./BottomHeader"
import ChevronRight from "../../assets/Images/ChevronRight.svg";
import ChevronLeft from "../../assets/Images/ChevronLeft.svg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <TopHeader />
        <BottomHeader />
      </div>
      <section className="banner">
        <div className="carousel">
          <div className="carousel-content">
            <img className="left-arrow" src={ChevronLeft} alt="Right click" />
            <img className="right-arrow" src={ChevronRight} alt="Left" />
            <div className="text-content">
              <h5 className="summer">SUMMER 2020</h5>
              <h1 className="collection">NEW COLLECTION</h1>
              <h4 className="advert-text">
                We know how large objects will act, but things on a small scale.
              </h4>
              <button className="banner-button">SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;