import { instance } from './index';

// Resgister API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// Login API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
