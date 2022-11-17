import { Duck } from '../abstracts/duck';
import { FlyWithWings } from '../fly-behaviors/fly-with-wings';
import { Quack } from '../quack-behaviors/quack';

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'am a real Mallard Duck");
  }
}
