let posts = [
  { title: "post 1", body: "this is the post one" },
  { title: "post 2", body: "this is the post two" },
];
let getposts = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000);
};

let createpost = (newpost) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newpost);
      const error = false;
      if (!error) {
        resolve("this is a success");
      } else {
        reject("somethng went worng");
      }
    }, 2000);
  });
};

Promise.all([
  createpost({ title: "post 3", body: "this is the body of post 3" }),
  createpost({ title: "post 4", body: "this is the body of post 3" }),
  createpost({ title: "post 5", body: "this is the body of post 3" }),
])
  .then((msg) => {
    getposts();
  })
  .catch((err) => {
    console.log(err);
  });

createpost({ title: "post 3", body: "this is the body of post 3" })
  .then((msg) => {
    getposts();
  })
  .catch((err) => console.log(err));
