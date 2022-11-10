import { Duck } from './duck';
import { FlyNoWay } from './fly-no-way';
import { Squeak } from './squeak';

export class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("I'am a real Mallard Duck");
  }
}
