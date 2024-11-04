// 2-9: Conditional Types
type a1 = number;
type b1 = number;

type x = a1 extends null ? true : false;
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Sheikh = {
  bike: string;
  car: string;
  ship: string;
  plane: string;
};

// car aase kina / bike / ship / tractor ache kina
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

type HasBike = CheckVehicle<"car">;
