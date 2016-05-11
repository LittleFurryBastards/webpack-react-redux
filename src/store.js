import { createStore } from 'redux';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'users:get':
      return Object.assign({}, state, {
        users: state.users.concat(action.data)
      });
    case 'users:currentUser':
      return Object.assign({}, state, {
        currentUser: action.data
      });
    default:
      return state;
  }
};

const store = createStore(rootReducer, {
  users: [],
  currentUser: {}
});

export default store;
