import Main from './Main';

test('name works', () => {
  const person = new Main('John');

  expect(person.name).toEqual('John');
});
