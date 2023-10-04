import ChevronRight from '../assets/Images/ChevronRight.svg';
import ChevronLeft from '../assets/Images/ChevronLeft.svg';
import shop1 from '../assets/Images/shop1.svg';
import carouselIndicator from '../assets/Images/carouselIndicator.svg';
const MiddleBanner = () => {
  return (
    <>
      <section className="middle-banner">
        <div className="middle-carousel">
          <div className="middle-content">
            <img className="left-arrow" src={ChevronLeft} alt="Right click" />
            <img className="right-arrow" src={ChevronRight} alt="Left" />
            <div className="middle-content">
              <div className="middle-text">
                <h5 className="middle-summer">SUMMER 2020</h5>
                <h1 className="middle-collection">Vita Classic Product</h1>
                <h4 className="middle-advert-text">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </h4>
                <div className="middle-button">
                  <span className="middle-price">$16.8</span>

                  <button className="middle-banner-button">ADD TO CART</button>
                </div>
              </div>

              <div>
                <img src={shop1} alt="shop1" />
              </div>
            </div>
            <a classname="carousel-indicator" href="#">
              <img src={carouselIndicator} alt="carouselIndicator" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default MiddleBanner;
