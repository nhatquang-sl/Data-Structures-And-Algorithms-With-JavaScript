import multipleBase from './multiple-base';

test('32 converted to base 2 is 100000', () => {
  expect(multipleBase(32, 2)).toEqual(100000);
});

test('125 converted to base 8 is 175', () => {
  expect(multipleBase(125, 8)).toEqual(175);
});
