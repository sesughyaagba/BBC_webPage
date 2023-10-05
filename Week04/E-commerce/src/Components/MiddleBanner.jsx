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
            <img
              className="middle-left-arrow"
              src={ChevronLeft}
              alt="Right click"
            />
            <img className="middle-right-arrow" src={ChevronRight} alt="Left" />
            <div className="middle-content">
              <div className="middle-text">
                <h4 className="middle-summer">SUMMER 2020</h4>
                <h1 className="middle-collection">Vita Classic Product</h1>
                <h4 className="middle-advert-text">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </h4>
                <div className="middle-button">
                  <span className="middle-price">
                    <h3>$16.8</h3>
                  </span>

                  <button className="middle-banner-button">ADD TO CART</button>
                </div>
              </div>

              <div className="middle-img">
                <img src={shop1} alt="shop1" />
              </div>
            </div>
            <a className="carousel-indicator" href="#">
              <img src={carouselIndicator} alt="carouselIndicator" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default MiddleBanner;
