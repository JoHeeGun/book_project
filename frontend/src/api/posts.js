import { posts } from './index';

// Fetch Posts API
function fetchPosts() {
  return posts.get('/');
}
// Fetch Post API
function fetchPost(postId) {
  return posts.get(postId);
}

// Create Post API
function createPost(postData) {
  return posts.post('/', postData);
}

// Delete Post API
function deletePost(postId) {
  return posts.delete(postId);
}

// Edit Post API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}
export { fetchPosts, createPost, deletePost, editPost, fetchPost };
