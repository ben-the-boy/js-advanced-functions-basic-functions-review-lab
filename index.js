// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(input = "*") {
  return function(adj = "special") {
    return `You are ${input}${adj}${input}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
}

function actionApplyer(int, arr) {
  let base = int
  for (let i = 0; i < arr.length; i++) {
    base = arr[i](base);
  }
  return base
}
