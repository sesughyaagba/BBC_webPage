import product1 from '../assets/Images/product1.svg';
import product2 from '../assets/Images/product2.svg';
import product3 from '../assets/Images/product3.svg';
import product4 from '../assets/Images/product4.svg';
import product5 from '../assets/Images/product5.svg';
import product6 from '../assets/Images/product6.svg';
import product7 from '../assets/Images/product7.svg';
import product8 from '../assets/Images/product8.svg';

import fill1 from '../assets/Images/fill1.svg';
import fill2 from '../assets/Images/fill2.svg';
import fill3 from '../assets/Images/fill3.svg';
import fill4 from '../assets/Images/fill4.svg';
import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    imageSrc: product1,
    altText: 'product1',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
 
  {
    id: uuidv4(),
    imageSrc: product2,
    altText: 'product2',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product3,
    altText: 'product3',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product4,
    altText: 'product4',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product5,
    altText: 'product5',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product6,
    altText: 'product6',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product7,
    altText: 'product7',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
  {
    id: uuidv4(),
    imageSrc: product8,
    altText: 'product8',
    department: 'Graphic Design',
    departmentLink: 'English Department',
    price: {
      originalPrice: '$16.48',
      discountedPrice: '$6.48',
    },
    fillImages: [fill1, fill2, fill3, fill4],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featuredProducts-container">
      <header className="featuredProducts-header">
        <h4 className="ft-products">Featured Products</h4>
        <h3 className="best-products">BESTSELLER PRODUCTS</h3>
        <p className="ft-statement">
          Problems trying to resolve the conflict between
        </p>
      </header>
      <div className="product-list">
        <div className="product-list-child">
          {products.map((record) => (
            <div className="product-card" key={record.id}>
              <div className="product-img">
                <img src={record.imageSrc} alt={record.altText} />
              </div>
              <div className="product-info">
                <h5 className="dept">{record.department}</h5>
                <a href="#" className='dept-link'>{record.departmentLink}</a>
                <h5 className="price">
                  <span className='price-1'>{record.price.originalPrice}</span>
                  <span className='price-2'>{record.price.discountedPrice}</span>
                </h5>
                <div className="fill-imgs">
                  <a href="#">
                    {record.fillImages.map((imageSrc) => (
                      <img src={imageSrc} alt="fill1" key={uuidv4()} />
                    ))}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
