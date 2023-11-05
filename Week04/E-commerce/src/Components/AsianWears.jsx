import asianMan from '../assets/Images/asianMan.svg';
const AsianWears = () => {
  return (
    <>
      <section className="asianMan-banner">
          <div className="asianMan-content">
            <div className='asianMan-imageBox'>
              <img src={asianMan} alt="Saian man & woman" />
            </div>
            <div className="asianMan-text">
              <h5 className="asianMan-summer">SUMMER 2020</h5>
              <h2 className="asianMan-collection">Part of the Neural Universe</h2>
              <h4 className="asianMan-advert-text">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div className="asianMan-button">
                <button className="asianMan-banner-btn1">BUY NOW</button>
                <button className="asianMan-banner-btn2">READ MORE</button>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};
export default AsianWears;
