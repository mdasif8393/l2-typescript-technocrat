// 2-4: Generic With Interface

interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface SmartWatch {
  brand: string;
  model: string;
  display: string;
}

interface ImilabWatch {
  brand: string;
  model: string;
  display: string;
  batteryLife: number;
}

const poorDeveloper: Developer<SmartWatch> = {
  name: "Percian",
  computer: {
    brand: "Asus",
    model: "X-333",
    releaseYear: 2021,
  },
  smartWatch: {
    brand: "Apple",
    model: "Watch S1",
    display: "6.1-inch",
  },
};

const richDeveloper: Developer<ImilabWatch, string> = {
  name: "Percian",
  computer: {
    brand: "Asus",
    model: "X-333",
    releaseYear: 2021,
  },
  smartWatch: {
    brand: "Apple",
    model: "Watch S1",
    display: "6.1-inch",
    batteryLife: 3000,
  },
  bike: "Trek 1200",
};
