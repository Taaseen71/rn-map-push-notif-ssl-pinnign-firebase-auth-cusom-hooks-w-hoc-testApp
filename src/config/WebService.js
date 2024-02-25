export const kApiUrl = 'http://localhost:3000/api'; //'https://jsonplaceholder.typicode.com';
export const kApiGetItems = '/items';
export const kApiSignup = '/Users';
export const kApiLogin = '/Users/login';
export const kApiLogOut = '/Users/logout'

export const ERROR_NETWORK_NOT_AVAILABLE = {
  title: 'Oops!',
  message:
    'Slow or no internet connection. Please check your internet settings',
};
export const ERROR_WRONG_CREDENTIALS = {
  title: 'Oops!',
  message:
    'Credentials doesnt match. Please try again with correct credentials',
};