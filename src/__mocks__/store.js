let state = {
  users: [],
  currentUser: {}
};

const storeMock = {
  setUsers(users) {
    state = Object.assign({}, state, { users });
  },
  setCurrentUser(currentUser) {
    state = Object.assign({}, state, { currentUser });
  },
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => state)
};

export default storeMock;
