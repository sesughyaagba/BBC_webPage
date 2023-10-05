import featuredPost1 from '../assets/Images/featuredPost1.svg';
import featuredPost2 from '../assets/Images/featuredPost2.svg';
import featuredPost3 from '../assets/Images/featuredPost3.svg';
import comment from '../assets/Images/comment.svg';
import calendar from '../assets/Images/calendar.svg';
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
    categories: ['Facebook', 'Popular', 'Tech'],
    title: 'Tech Insights: The Future of AI',
    description:
      'Explore the latest advancements in artificial intelligence and its impact on technology.',
    date: {
      text: '15 May 2021',
      imageSrc: calendar,
    },
    comments: {
      text: '5 comments',
      imageSrc: comment,
    },
  },
  {
    id: uuidv4(),
    imageSrc: featuredPost3,
    button: 'New',
    categories: ['Amazon', 'Deals', 'Shopping'],
    title: 'Great Deals on Electronics',
    description:
      'Discover amazing discounts on your favorite electronics products.',
    date: {
      text: '5 June 2021',
      imageSrc: calendar,
    },
    comments: {
      text: '15 comments',
      imageSrc: comment,
    },
  },
];

const FeaturedPostsCard = () => {
  return (
    <section>
      {featuredData.map((post) => (
        <div className="featuredPostsCard-container" key={post.id}>
          <div>
            <img src={post.imageSrc} alt="post1" />
            <button>{post.button}</button>
            <nav className="featuredPostsCard-nav">
              <ul className="list">
                {post.categories.map((category, categoryIndex) => (
                  <li key={categoryIndex}>
                    <a href="#">{category}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <span>
              <a href="#">
                <img src={post.date.imageSrc} alt="date" />
              </a>
              {post.date.text}
            </span>
            <span>
              <a href="#">
                <img src={post.comments.imageSrc} alt="" />
              </a>
              {post.comments.text}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedPostsCard;
