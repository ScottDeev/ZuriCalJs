alert("Welcome, click Ok to continue");
const option = prompt("Pick an option(+,/, *, -)");
const firstNum = Number(prompt("Enter first number"));
const secondNum = Number(prompt("Enter second number"));


if (option === "+") {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Wrong input')
  } else{
    alert(`Your answer is ${firstNum + secondNum}`);
  }
} else if (option === "/") {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Wrong input')
  } else{
    alert(`Your answer is ${firstNum / secondNum}`);
  }
} else if (option === "*") {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Wrong input')
  } else{
    alert(`Your answer is ${firstNum * secondNum}`);
  }
} else if (option === "-") {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Wrong input')
  } else{
    alert(`Your answer is ${firstNum - secondNum}`);
  }
} else {
  alert("Invalid Selection");
}
alert("Thank you for using my calculator");
