// Importing the images as file paths
import men from '../assets/Images/men.svg';
import Women from '../assets/Images/Women.svg';
import Acessories from '../assets/Images/Acessories.svg';
import Kids from '../assets/Images/Kids.svg';
// import {v4 as uuidv4} from 'uuid'
// const picks = [
//   {
//     id: uuidv4(),
//     imageSrc: men,
//     altText: 'largeIname',
//     btn: 'MEN',
//   },
//   {
//     id: uuidv4(),
//     imageSrc: Women,
//     altText: 'Women Img',
//     btn: 'WOMEN',
//   },
//   {
//     id: uuidv4(),
//     imageSrc: Acessories,
//     altText: 'Accessories Img',
//     btn: 'ACCESSORIES',
//   },
//   {
//     id: uuidv4(),
//     imageSrc: Kids,
//     altText: largeImg,
//     btn: 'KIDS',
//   },
// ];
const EditorPick = () => {
  return (
    <section className="editor-pick">
      <header className="editor-heading">
        <h3 className="editor-title">EDITOR'S PICK</h3>
        <p className="editor-statement">
          Problems trying to resolve the conflict between
        </p>
      </header>
      <div className="editor-imgs">
      
        <div className="large-img">
            <img className="image-response" src={men} alt="men" />
            <button className="men-btn">MEN</button>
          </div><div className="grid-imgs">
              <div className="women-wears">
                <img className="image-response" src={Women} alt="women" />
                <button className="women-btn">WOMEN</button>
              </div>
              <div>
                <div className="accessories">
                  <img
                    className="image-response"
                    src={Acessories}
                    alt="accessories" />
                  <button className="accessories-btn">ACCESSORIES</button>
                </div>
                <div className="kids-wears">
                  <img className="image-response" src={Kids} alt="kids" />
                  <button className="kids-btn">KIDS</button>
                </div>
              </div>
            </div>
      
      </div>
    </section>
  );
};

export default EditorPick;

