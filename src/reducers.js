
/**
 * @param {Object} state - The current state of the store
 * @param {Object} action - The recieved action
 * @returns {Object} - The new state
 */
const addPerson = (state, action) => {
  state.people.push(action.payload);

  return state;
};

export default {
  'person.add': addPerson
};
