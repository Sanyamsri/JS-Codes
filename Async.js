let posts = [
  { title: "post 1", body: "this is the post one" },
  { title: "post 2", body: "this is the post two" },
];
let getposts = () => {
  setTimeout(() => {
    console.log("started to fetch posts");
    posts.forEach((post) => {
      console.log(post);
    });
    console.log("completetd to fetch posts");
  }, 1000);
};

let createpost = (newpost) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("started to create posts");
      posts.push(newpost);
      const error = false;
      if (!error) {
        console.log("Completed to create posts");
        resolve("this is a success");
      } else {
        reject("somethng went worng");
      }
    }, 2000);
  });
};

const call = async () => {
  try {
    let msg = await createpost({
      title: "post 3",
      body: "this is the body of post 3",
    });
    console.log(msg);
    getposts();
  } catch (error) {
    console.log(error);
  }
};
call();
/*> "started to create posts"
> "Completed to create posts"
> "this is a success"
> "started to fetch posts"
> Object { title: "post 1", body: "this is the post one" }
> Object { title: "post 2", body: "this is the post two" }
> Object { title: "post 3", body: "this is the body of post 3" }
> "completetd to fetch posts" */
