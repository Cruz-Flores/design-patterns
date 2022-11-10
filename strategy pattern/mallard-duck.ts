import { Duck } from './duck';
import { FlyWithWings } from './fly-with-wings';
import { Quack } from './quack';

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'am a real Mallard Duck");
  }
}
