const postsContainerEl = document.querySelector("#posts-container");

function renderPosts() {
    const posts = getPosts();
    for (const post of posts) {

        // Create a new div element
        const postEl = document.createElement("div");

        // Add a class to the div element
        postEl.className = "post";

        // Create a new h2 element
        const usernameEl = document.createElement("h2");

        // Set the text content of the h2 (username) element
        usernameEl.textContent = post.username;

        // Create a new h3 (title) element
        const titleEl = document.createElement("h3");

        // Set the text content of the h3 element
        titleEl.textContent = post.title;

        // Create a new p (content) element
        const contentEl = document.createElement("p");

        // Set the text content of the p element
        contentEl.textContent = post.content;

        // Append the h2 (username) element to the div element
        postEl.appendChild(usernameEl);

        // Append the h3 (title) element to the div element
        postEl.appendChild(titleEl);

        // Append the p (content) element to the div element
        postEl.appendChild(contentEl);

        // Append the div (the form side) element to the posts container element
        postsContainerEl.appendChild(postEl);
    }
}

renderPosts();