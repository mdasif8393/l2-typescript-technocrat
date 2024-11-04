{
  //
  // mapped types
  const arrOfNumbers: number[] = [1, 4, 5];
  const arrOfStrings: string[] = ["1", "4", "5"];

  const arrOfStrings1 = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  // height type is number called look up type
  type Height = AreaNumber["height"];

  // T => {height:string;width:number}
  // key => T["width"]
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
