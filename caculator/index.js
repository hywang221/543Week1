const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let resultDisplayed = false;

// 数字按钮
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    if (resultDisplayed) { // 如果上次显示了结果，点击数字重置
      left.textContent = '';
      middle.textContent = '';
      right.textContent = '';
      firstNumber = '';
      operator = '';
      secondNumber = '';
      resultDisplayed = false;
    }

    if (!operator) {
      firstNumber += button.textContent;
      left.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      right.textContent = secondNumber;
    }
  });
});

// 操作符按钮
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (!firstNumber) return; // 先选第一个数字
    operator = button.getAttribute('data-op');
    middle.textContent = operator;
  });
});

// 等号按钮
document.querySelector('.equal').addEventListener('click', () => {
  if (!firstNumber || !operator || !secondNumber) return;
  let num1 = parseInt(firstNumber);
  let num2 = parseInt(secondNumber);
  let result;
  if (operator === '+') result = num1 + num2;
  else if (operator === '-') result = num1 - num2;

  left.textContent = '';
  middle.textContent = '';
  right.textContent = result;
  resultDisplayed = true;

  // 重置内部状态方便下一次计算
  firstNumber = '';
  operator = '';
  secondNumber = '';
});

// 清除按钮
document.querySelector('.clear').addEventListener('click', () => {
  left.textContent = '';
  middle.textContent = '';
  right.textContent = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
  resultDisplayed = false;
});