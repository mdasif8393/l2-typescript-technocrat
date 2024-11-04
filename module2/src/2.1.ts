{
  // type assertion
  let anything: any;
  anything = "Mext Level wqeb dev";

  anything as string;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "number") {
      return value * 1000;
    }
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    }
  };

  const result1 = kgToGram("234") as string;
  console.log(result1);

  // error
  type Error = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as Error).message);
  }
}
