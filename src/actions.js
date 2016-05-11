import axios from 'axios';

import store from './store';

export const getUsers = () => {
  axios.get('http://jsonplaceholder.typicode.com/users')
    .then((response) => store.dispatch({ type: 'users:get', data: response.data }));
};

export const getUserDetails = (id) => {
  axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => store.dispatch({ type: 'users:currentUser', data: response.data }));
};
