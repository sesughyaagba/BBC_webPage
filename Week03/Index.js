// Function to fetch data from the API
function fetchData() {
    fetch('http://localhost:3000/blogPosts')
        .then(response => response.json())
        .then(data => {
            console.log('API Response Data:', data);

            const blogPosts = data; // Variable inside the block

            const blogPostsContainer = document.getElementById('blog-posts');

            // Check if blogPosts is an array before using forEach
            if (Array.isArray(blogPosts)) {
                // Loop through the blog posts and display them
                blogPosts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.innerHTML = `
                                <img src="${post.img}" alt="${post.blogTitle}">
                                <h2>${post.blogTitle}</h2>
                                <p><strong>Author:</strong> ${post.author}</p>
                                <p>${post.article}</p>
                                <p><strong>Likes:</strong> ${post.likes}</p>
                                <p><strong>Comments:</strong> ${post.comments.length}</p>
                            `;
                    blogPostsContainer.appendChild(postDiv);
                });
            } else {
                console.error('API response does not contain blogPosts array.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the fetchData function to retrieve and display the data
fetchData();
