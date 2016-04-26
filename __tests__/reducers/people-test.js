import people from '../../src/reducers/people';

jest.unmock('../../src/reducers/people');

describe('People reducer', () => {
  it('should add a new person on person:add', () => {
    const state = [];

    const newState = people(state, 'add', { name: 'Test', age: 21 });

    expect(state).toEqual([]);
    expect(newState).toEqual([{ name: 'Test', age: 21 }]);
  });
});
