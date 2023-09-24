const img1 = './Images/The-future.jpeg'
const img2 = "./Images/sports.jpg"
const img3 = "./Images/The-nature-beauty.jpeg"
const img4 = "./Images/Fnance.jpeg"
const img5 = "./Images/Humanity.jpeg"


// Display on successful load
windowonload = function () {
    alert("Welcome to the informative DSY_blog");
}
const blogPost = [
    { img: img1, blogTitle: 'The Jobs of the Future', author: 'Sesugh Yaagba', article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,' },
    { img: img2, blogTitle: 'The Euro Qualifiers', author: 'Sesugh Yaagba', article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,' },
    { img: img3, blogTitle: 'The beauty of Nature', author: 'Sesugh Yaagba', article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,' },
    { img: img4, blogTitle: 'Financial Stability', author: 'Sesugh Yaagba', article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,' },
    { img: img5, blogTitle: "The 'Humanity in Humans'", author: 'Sesugh Yaagba', article: 'The Republic will need to steady the ship in the next few minutes as they look vulnerable at the moment, with France waltzing forward at Lorem ipsum dolor sit amet consectetur,' },
];


// Function to render data into the UI
function renderData() {
    const articleWrapper = document.querySelector('.wrapper')
    // Create an HTML string to represent the data
    const articleHTML = blogPost.map((item) => {
        return `  <article class="post">    
            <div class="card-content">
              <h2><a href="blog-post-1.html">${item.blogTitle}</a></h2>
              <div class="post-img">
                <img src=${item.img} alt=${item.blogTitle} />
              </div>
              <p>
                ${item.article}
              </p>
              <div class="card-footer">
                <a href="./articlePage.html">Read More</a>
              </div>
              <div id="comment-section">
                <div class="comment">
                  <button class="like-button">Like</button>
                  <button class="comment-button">Reply</button>
                </div>
              </div>
            </div>
          </article> `;
    }).join(""); // Join the HTML strings into one
    // console.log('articleHTML', articleHTML);
    // Set the HTML content of the container to display the data
    articleWrapper.innerHTML = articleHTML;
}

// Call the renderData function to render the data on page load
renderData();

// // Create the post card 
// let card = document.createElement('div');
// // create a class name for the card 
// card.className = 'article';

blogPost.forEach((element, index) => {
    let card = document.createElement('div')
    card.className = 'post';

    let h2 = document.createElement('h2');
    h2.className = 'blog-title';
    h2.textContent = 'blogTitle';

    let author = document.createElement('p');
    author.className = 'blog-author';
    author.textContent = 'author';

    let article = document.createElement('p');
    article.className = 'blog-article';
    article.textContent = 'article';

    card.appendChild(h2);
    card.appendChild(author);
    card.appendChild(content),
        container.appendChild(card);

})