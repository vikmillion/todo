const outSecond = document.getElementById('outSecond');
const getPostBtn = document.querySelector('.pressSecond');
const amount = document.querySelector('.amount');
const div = document.createElement('div');
const url = `https://jsonplaceholder.typicode.com/todos`;

const state = {
  posts: [],
};

const deletePost = (index) => {
  const delPost = state.posts[index];

  removePost(delPost.id);

  state.posts.splice(index, 1);

  fillPostList(state.posts);
};

const creatTodo = (post, index) => `
<div class="post">
  <div class="posr_wrapper">
    <h3 class="wrapper_title">Id => ${post.id}</h3>
    <div class="wrapper_body">Title => ${post.title}</div>
  </div>
  <div class="post_button">
    <button class="button_delete" onclick="deletePost(${index})">Delete</button>
  </div>
</div>
`;

const fillPostList = (posts) => {
  outSecond.innerHTML = '';
  if (posts.length) {
    posts.forEach(
      (post, index) => (outSecond.innerHTML += creatTodo(post, index))
    );
  }
};

getPostBtn.addEventListener('click', async () => {
  await getPosts();
  fillPostList(state.posts);
});

const getPosts = () => {
  return fetch(`${url}?_limit=${amount.value}`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((posts) => (state.posts = state.posts.concat(posts)));
};

const removePost = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
};
