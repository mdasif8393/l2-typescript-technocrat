// 3-1: Class and object
{
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} sound as ${this.sound}`);
    }
  }

  const dog = new Animal("German", "Dog", "Ghew Ghew");

  console.log(dog.makeSound());
}
