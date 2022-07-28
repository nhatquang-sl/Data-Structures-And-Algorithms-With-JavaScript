export default class Stack {
  length = 0;
  private storage: any[] = [];

  push = function (value: any) {
    this.storage.push(value);
    this.length = this.storage.length;
  };

  pop = function () {
    if (this.length === 0) return undefined;

    this.length = this.storage.length - 1;
    return this.storage.pop();
  };

  peak = function () {
    return this.storage[this.length - 1];
  };

  clear = function () {
    this.storage = [];
    this.length = 0;
  };
}
