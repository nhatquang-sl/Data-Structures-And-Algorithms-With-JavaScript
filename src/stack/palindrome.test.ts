import isPalindrome from './palindrome';

test('racecar is palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('dad is palindrome', () => {
  expect(isPalindrome('dad')).toBe(true);
});
