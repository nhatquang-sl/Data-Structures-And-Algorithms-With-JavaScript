import Stack from './index';

const multipleBase = (num: number, base: number) => {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }

  let converted = '';
  while (stack.length > 0) {
    converted += stack.pop();
  }

  return Number.parseInt(converted);
};

export default multipleBase;
