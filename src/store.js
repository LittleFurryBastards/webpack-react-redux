import { createStore } from 'redux';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'users:get':
      return Object.assign({}, state, {
        users: state.users.concat(action.data)
      });
    default:
      return state;
  }
};

const store = createStore(rootReducer, {
  users: []
});

export default store;
