import { Duck } from '../abstracts/duck';
import { FlyNoWay } from '../fly-behaviors/fly-no-way';
import { Squeak } from '../quack-behaviors/squeak';

export class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("I'am a real Mallard Duck");
  }
}
