jest.unmock('../src/actions');

import axios from 'axios';
import * as actions from '../src/actions';
import store from '../src/store';

describe('Actions', () => {
  afterEach(() => {
    axios.get.mockClear();
    store.dispatch.mockClear();
  });

  it('getUsers should send one get request', (done) => {
    actions.getUsers()
      .then(() => {
        expect(axios.get.mock.calls.length).toBe(1); // eslint-disable-line
        done();
      });
  });

  it('getUsers should dispatch an users:get action on success', (done) => {
    actions.getUsers()
      .then(() => {
        expect(store.dispatch.mock.calls.length).toBe(1); // eslint-disable-line
        expect(store.dispatch).toBeCalledWith({
          type: 'users:get',
          data: jasmine.any(Array)
        });
        done();
      });

  });
});
