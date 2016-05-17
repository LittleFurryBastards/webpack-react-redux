let state = { users: [] };

const storeMock = {
  setUsers(users) {
    state = Object.assign({}, state, {
      users
    });
  },
  dispatch: jest.fn(),
  getState: jest.fn(() => state)
};

export default storeMock;
