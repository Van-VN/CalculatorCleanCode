export class Calculator {
  static readonly ADDITION = "+";
  static readonly SUBTRACTION = "-";
  static readonly MULTIPLICATION = "*";
  static readonly DIVISION = "/";
  static readonly ZERO = 0;
  public static calculate(
    firstNumber: number,
    secondNumber: number,
    operator: string
  ) {
    switch (operator) {
      case Calculator.ADDITION:
        return firstNumber + secondNumber;
      case Calculator.SUBTRACTION:
        return firstNumber - secondNumber;
      case Calculator.MULTIPLICATION:
        return firstNumber * secondNumber;
      case Calculator.DIVISION:
        if (secondNumber !== Calculator.ZERO) return firstNumber / secondNumber;
        else console.log("Can not divide by 0");
      default:
        console.log("Unsupported operation");
    }
  }
}
