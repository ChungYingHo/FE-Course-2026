// Please finish the following function:
// operator: "+", "-", "*", "/"
// a, b: numbers
function simpleCalculator(operator, a, b) {
  if(operator === '%'){
    return 'Error: Invalid operator'
  }else if(operator === "/" && b === 0) {
  return "Error: Division by zero"
}
  
  switch(operator){
    case '+' :
      return a + b
    case '-' :
      return a - b
    case '*' :
      return a * b
    case '/' :
      return a / b
}
}

// Expected output:
console.log(simpleCalculator("+", 5, 3)) // 8
console.log(simpleCalculator("-", 5, 3)) // 2
console.log(simpleCalculator("*", 5, 3)) // 15
console.log(simpleCalculator("/", 6, 3)) // 2

// Expected error handling:
console.log(simpleCalculator("%", 5, 3)) // Error: Invalid operator
console.log(simpleCalculator("/", 5, 0)) // Error: Division by zero