
function getPosts() {
    const localStoragePosts = localStorage.getItem('posts');
    if (localStoragePosts) {
        return JSON.parse(localStoragePosts);
    }
    return [];
}
function newPost(newPost) {
    const posts = getPosts();
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
}


function applyTheme() {
    const dark = localStorage.getItem("dark");
    if (dark === "true") {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function switchTheme() {
    const dark = localStorage.getItem('dark');
    if (dark === "true") {
        localStorage.setItem('dark', "false");
    } else {
        localStorage.setItem('dark', "true");
    }
    applyTheme();
}
applyTheme();

const changeThemeButtonEl = document.querySelector('#change-theme');
changeThemeButtonEl.addEventListener('click', switchTheme);