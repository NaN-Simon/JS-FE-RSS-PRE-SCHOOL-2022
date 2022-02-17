const OPEN_BRACKETS = ["(", "{", "[", "1", "3", "5"];
const BRACKETS_PAIR = {
  ")": "(",
  "}": "{",
  "]": "[",
  2: "1",
  4: "3",
  6: "5",
};
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    //console.log(symb)
    if (
      OPEN_BRACKETS.includes(symb) ||
      ((symb === "|" || symb === "7" || symb === "8") && !stack.includes(symb))
    ) {
      stack.push(symb);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const topEl = stack[stack.length - 1];
      if (
        BRACKETS_PAIR[symb] === topEl ||
        symb === "|" ||
        symb === "7" ||
        symb === "8"
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
