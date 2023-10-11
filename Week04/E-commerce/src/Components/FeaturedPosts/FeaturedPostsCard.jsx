import featuredPost1 from '../../assets/Images/featuredPost1.svg';
import featuredPost2 from '../../assets/Images/featuredPost2.svg';
import featuredPost3 from '../../assets/Images/featuredPost3.svg';
import comment from '../../assets/Images/comment.svg';
import calendar from '../../assets/Images/calendar.svg';
import { BsChevronRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

const featuredData = [
  {
    id: uuidv4(),
    imageSrc: featuredPost1,
    button: 'New',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: {
      text: '22 April 2021',
      imageSrc: calendar,
    },
    comments: {
      text: '10 comments',
      imageSrc: comment,
    },
  },
  {
    id: uuidv4(),
    imageSrc: featuredPost2,
    button: 'New',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: {
      text: '22 April 2021',
      imageSrc: calendar,
    },
    comments: {
      text: '10 comments',
      imageSrc: comment,
    },
  },
  {
    id: uuidv4(),
    imageSrc: featuredPost3,
    button: 'New',
    categories: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: {
      text: '22 April 2021',
      imageSrc: calendar,
    },
    comments: {
      text: '10 comments',
      imageSrc: comment,
    },
  },
];

const FeaturedPostsCard = () => {
  return (
    <div className="featured-post-parent">
      {featuredData.map((post) => (
        <div className="featuredPostsCard-container" key={post.id}>
          <div className="featured-post-child">
            <div className="featured-img">
              <img src={post.imageSrc} alt="post1" />
              <span>NEW</span>
            </div>
            <div className="featured-text-content">
              <nav className="featuredPostsCard-nav">
                <ul className="list">
                  {post.categories.map((category, categoryIndex) => (
                    <li key={categoryIndex}>
                      <a href="#">{category}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <h4 className="featured-title">{post.title}</h4>
              <p className="featured-description">{post.description}</p>
              <span className="date">
                <a href="#">
                  <img src={post.date.imageSrc} alt="date" />
                </a>
                {post.date.text}
              </span>
              <span className="comment">
                <a href="#">
                  <img src={post.comments.imageSrc} alt="comment" />
                </a>
                {post.comments.text}
              </span>
            </div>
          </div>
          <a href="#" className='chev-link'>
            Learn more <BsChevronRight className="chev-right" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPostsCard;
