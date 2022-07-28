import Stack from './index';

test('push then clear', () => {
  const stack = new Stack();
  stack.push(3);
  expect(stack.length).toBe(1);

  stack.push(3);
  expect(stack.length).toBe(2);

  stack.push(6);
  expect(stack.length).toBe(3);

  stack.push(8);
  expect(stack.length).toBe(4);

  stack.clear();
  expect(stack.length).toBe(0);
  expect(stack.peak()).toBe(undefined);
  expect(stack.pop()).toBe(undefined);
});

test('push then pop', () => {
  const stack = new Stack();
  stack.push(3);
  stack.push(3);
  stack.push(6);
  stack.push(8);

  expect(stack.length).toBe(4);
  expect(stack.pop()).toBe(8);
  expect(stack.length).toBe(3);

  expect(stack.pop()).toBe(6);
  expect(stack.length).toBe(2);

  expect(stack.pop()).toBe(3);
  expect(stack.length).toBe(1);

  expect(stack.pop()).toBe(3);
  expect(stack.length).toBe(0);

  expect(stack.pop()).toBe(undefined);
  expect(stack.length).toBe(0);
});

test('push then peak', () => {
  const stack = new Stack();
  stack.push(3);
  stack.push(3);
  stack.push(6);
  stack.push(8);

  expect(stack.length).toBe(4);
  expect(stack.peak()).toBe(8);
  expect(stack.length).toBe(4);
  expect(stack.peak()).toBe(8);

  expect(stack.pop()).toBe(8);
  expect(stack.peak()).toBe(6);
  expect(stack.length).toBe(3);

  expect(stack.pop()).toBe(6);
  expect(stack.peak()).toBe(3);
  expect(stack.length).toBe(2);

  expect(stack.pop()).toBe(3);
  expect(stack.peak()).toBe(3);
  expect(stack.length).toBe(1);

  expect(stack.peak()).toBe(3);
  expect(stack.pop()).toBe(3);
  expect(stack.peak()).toBe(undefined);
  expect(stack.length).toBe(0);

  expect(stack.pop()).toBe(undefined);
  expect(stack.peak()).toBe(undefined);
  expect(stack.length).toBe(0);
});
