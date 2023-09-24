

const blogPost = [
    {
        blogTitle: 'The Jobs of the Future',
        author: 'Sesugh Yaagba',
        article:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates accusantium suscipit omnis obcaecati. Natus, doloribus velit alias aspernatur quaerat beatae minus et harum. Praesentium, veniam! Numquam eum molestiae quis, animi pariatur, ea est ut dicta consequuntur nulla neque ipsa omnis provident quibusdam voluptatem soluta sit quasi adipisci porro reiciendis.'
    },
        
    { blogTitle: 'The Jobs of the Future', author: 'Sesugh Yaagba', article: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates accusantium suscipit omnis obcaecati. Natus, doloribus velit alias aspernatur quaerat beatae minus et harum. Praesentium, veniam! Numquam eum molestiae quis, animi pariatur, ea est ut dicta consequuntur nulla neque ipsa omnis provident quibusdam voluptatem soluta sit quasi adipisci porro reiciendis.' },
    { blogTitle: 'The Jobs of the Future', author: 'Sesugh Yaagba', article: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates accusantium suscipit omnis obcaecati. Natus, doloribus velit alias aspernatur quaerat beatae minus et harum. Praesentium, veniam! Numquam eum molestiae quis, animi pariatur, ea est ut dicta consequuntur nulla neque ipsa omnis provident quibusdam voluptatem soluta sit quasi adipisci porro reiciendis.' },
    { blogTitle: 'The Jobs of the Future', author: 'Sesugh Yaagba', article: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates accusantium suscipit omnis obcaecati. Natus, doloribus velit alias aspernatur quaerat beatae minus et harum. Praesentium, veniam! Numquam eum molestiae quis, animi pariatur, ea est ut dicta consequuntur nulla neque ipsa omnis provident quibusdam voluptatem soluta sit quasi adipisci porro reiciendis.' },

];
let postContainer = document.querySelector('.blogPost');

blogPost.map((element, index) => {
    let card = document.createElement('div');
    card.className = 'blog-card';

    let h2 = document.createElement('h2');
    h2.className = 'blog-title';
    h2.textContent = element.blogTitle;

    let author = document.createElement('p');
    author.className = 'blog-author';
    author.textContent = element.author;


    let article = document.createElement('p');
    article.className = 'blog-article';
    article.textContent = element.article;

    let more = document.createElement('a');
    more.className = 'blog-link';
    more.href = 'https://www.bbc.com/news/entertainment-arts-66838556';
    more.textContent = 'Read more'

    card.appendChild(h2);
    card.appendChild(author);
    card.appendChild(article);
    card.appendChild(more);
    postContainer.appendChild(card);


})