import { createStore } from 'redux';
import reducers from './reducers';

/**
 * The root reducer is calling different reducers depending on the action's type
 * @param {Object} state - The existing state of the store
 * @param {{ type: string }} action - The recieved action object
 * @returns {Object} - Returning the new state
 */
const rootReducer = (state, action) => {
  const [reducer, method] = action.type.split(':');
  let newState = state;

  if (reducers[reducer]) {
    newState = reducers[reducer](state, method, action.payload);
  } else {
    console.warn(`There is no reducer for the recieved action! (action type: ${ action.type })`);
  }

  return newState;
};

/**
 * The redux store
 */
const store = createStore(rootReducer, {
  people: [],
  robots: [],
  settings: {
    lang: 'en',
    timezone: 'CEST +0200'
  }
});

export default store;
