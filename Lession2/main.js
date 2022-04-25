//  Importing posts.js file here
import { posts } from "./posts.js";


//  Loop on posts array but inside array there is objects

posts.forEach(post => {
    console.log(post);
});


//   clear() used to clear console.
console.clear();

//   Now filtering element of userId 1 from posts, using filter() function
const filteredPosts = posts.filter((post) =>{
    return post.userId ===5;
});


//    Filtered  result (object data) from array
console.log(filteredPosts);


//  Now filtering id of userId 5 from posts, using map() function
const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});

console.log(mappedPosts);

//  
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});

console.log(reducedPostsValue);
