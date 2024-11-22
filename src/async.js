// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve('I have succeeded');
//     }, 1000);
//   } else {
//     reject('I have Failed');
//   }
// });

// myPromise
//   .then((value) => console.log(value))
//   .catch((rejectValue) => console.log(rejectValue));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => error);

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);

    const postsResponse = await fetch(
      'https://jsonplacehor.typicode.com/posts?userId=' + secondUser.id
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log('there was an error');
  }
};

myAsyncFunction();
