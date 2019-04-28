import reducer, { increment, decrement } from './counter'

test('Testing reducer function increment', () => {
  const newState = reducer({ count: 0 }, increment())
  expect(newState.count).toEqual(1)
})

test('Testing reducer function decrement', () => {
  const newState = reducer({ count: 1 }, decrement())
  expect(newState.count).toEqual(0)
})
