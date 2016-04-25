import { createStore } from 'redux';
import reducers from './reducers';

/**
 * The root reducer is calling different reducers depending on the action's type
 * @param {Object} state - The existing state of the store
 * @param {{ type: string }} action - The recieved action object
 * @returns {Object} - Returning the new state
 */
const rootReducer = (state, action) => {
  const actionType = action.type;
  let newState = state;

  if (reducers[action.type]) {
    newState = reducers[actionType](state, action);
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
