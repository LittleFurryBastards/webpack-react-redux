const actions = {
  add(state, payload) {
    return [
      ...state,
      payload
    ];
  }
};

const people = (state, action, payload) => actions[action](state, payload);

export default people;
