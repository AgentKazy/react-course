const heroes = ['Kazy', 'Kalethyr', 'Mythwind'];
const blog = { title: 'New and Improved', author: 'Korgash' };

// console.log(...heroes);

const idBlog = { ...blog, id: 1 };

console.log(idBlog);
