jest.unmock('../src/actions');

import axios from 'axios';
import * as actions from '../src/actions';
// import store from '../src/store';

describe('Actions', () => {
  // afterEach(() => {
  //   axios.get.mock.calls = [];
  //   store.dispatch.mock.calls = [];
  // });

  it('getUsers should send one get request', () => {
    actions.getUsers();

    expect(axios.get.mock.calls.length).toBe(1); // eslint-disable-line
  });

  // it('getUsers should dispatch an users:get action on success', (done) => {
  //   actions.getUsers()
  //     .then(() => {
  //       expect(store.dispatch.mock.calls.length).toBe(1); // eslint-disable-line
  //       expect(store.dispatch.mock.calls.length).toBeCalledWith({
  //         type: 'users:get',
  //         data: jasmine.any(Array)
  //       });
  //       done();
  //     });
  // });
});
