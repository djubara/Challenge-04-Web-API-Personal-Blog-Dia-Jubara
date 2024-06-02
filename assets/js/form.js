

const formEl = document.querySelector('form');

const userInputEl = document.querySelector('#username-input');
const titleInputEl = document.querySelector('#title-input');
const contentInputEl = document.querySelector('#content-input');

formEl.addEventListener('submit', (event) => {
    // event.preventDefault();
    formEl.reset();

    const post = {
        username: userInputEl.value,
        title: titleInputEl.value,
        content: contentInputEl.value
    };
    newPost(post);

})
