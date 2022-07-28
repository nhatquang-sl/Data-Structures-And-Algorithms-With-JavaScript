import Stack from './index';
const isPalindrome = (word) => {
  const stack = new Stack();
  for (const c of word) {
    stack.push(c);
  }

  let reWord = '';
  while (stack.length > 0) reWord += stack.pop();

  return word === reWord;
};

export default isPalindrome;
