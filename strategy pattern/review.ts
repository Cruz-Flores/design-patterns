export abstract class Duck {
  abstract display(): void;

  fly(): void {
    console.log('Quack');
  }

  quack(): void {
    console.log("I'm flying!!!");
  }

  swim(): void {
    console.log('All ducks float, even decoys!');
  }
}

export class RubberDuck extends Duck {
  display(): void {
    console.log("I'am a real Mallard Duck");
  }

  quack(): void {
    console.log('Squeak');
  }
}
