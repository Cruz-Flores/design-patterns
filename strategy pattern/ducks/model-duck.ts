import { Duck } from '../abstracts/duck';
import { FlyNoWay } from '../fly-behaviors/fly-no-way';
import { Quack } from '../quack-behaviors/quack';

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  display(): void {
    console.log("I'm a model duck");
  }
}
