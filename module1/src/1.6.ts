{
  function add(number1: number, number2: number = 20): number {
    return number1 + number2;
  }

  add(2, 7);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  const arr: number[] = [1, 4, 6];

  const newArr: number[] = arr.map((elem: number): number => elem * elem);
}
