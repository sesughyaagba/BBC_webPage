// Define the image URLs
const img1 = './Images/The-future.jpeg';
const img2 = "./Images/sports.jpg";
const img3 = "./Images/The-nature-beauty.jpeg";
const img4 = "./Images/Fnance.jpeg";
const img5 = "./Images/Humanity.jpeg";

// Display on successful load
window.onload = function () {
  alert("Welcome to the informative DSY_blog");
}

// Blog post data
const blogPost = [
  {
    img: img1,
    blogTitle: 'The Jobs of the Future',
    author: 'Sesugh Yaagba',
    article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,',
  },
  {
    img: img2,
    blogTitle: 'The Euro Qualifiers',
    author: 'Sesugh Yaagba',
    article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,',
  },
  {
    img: img3,
    blogTitle: 'The beauty of Nature',
    author: 'Sesugh Yaagba',
    article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,',
  },
  {
    img: img4,
    blogTitle: 'Financial Stability',
    author: 'Sesugh Yaagba',
    article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,',
  },
  {
    img: img5,
    blogTitle: "The 'Humanity in Humans'",
    author: 'Sesugh Yaagba',
    article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,',
  },
];

// Function to render data into the UI
function renderData() {
  const articleWrapper = document.querySelector('.wrapper');

  // Create an HTML string to represent the data
  const articleHTML = blogPost.map((item) => {
    return `<article class="post">
            <div class="card-content">
                <h2><a href="blog-post-1.html">${item.blogTitle}</a></h2>
                <div class="post-img">
                    <img src=${item.img} alt=${item.blogTitle} />
                </div>
                <p>${item.article}</p>
                <div class="card-footer">
                    <a href="./articlePage.html">Read More</a>
                </div>
                <div id="comment-section">
                    <div class="comment">
                        <button class="like-button">Like</button>
                        <button class="comment-button">Reply</button>
                    </div>
                    <p class="like-count">0 Likes</p>
                </div>
            </div>
        </article>`;
    // Join the HTML strings into one
  }).join(""); 

  // Set the HTML content of the container to display the data
  articleWrapper.innerHTML = articleHTML;

  // Add event listeners to the "Like" buttons after rendering
  const likeButtons = document.querySelectorAll(".like-button");
  likeButtons.forEach((button, index) => {
    let count = 0;
    button.addEventListener("click", function () {
      count++;
      const likeCount = document.querySelectorAll(".like-count")[index];
      likeCount.textContent = `${count} Like${count !== 1 ? "s" : ""}`;
    });
  });
}

// Call the renderData function to render the data on page load
renderData();
