import { Duck } from './duck';
import { FlyRocketPowered } from './fly-rocket-powered';
import { MallardDuck } from './mallard-duck';
import { ModelDuck } from './model-duck';
import { RubberDuck } from './rubber-duck';

export class MiniDuckSimulator {
  static main(): void {
    const mallardDuck: Duck = new MallardDuck();
    const rubberDuck: Duck = new RubberDuck();
    const modelDuck: Duck = new ModelDuck();
    mallardDuck.performQuack();
    mallardDuck.performFly();
    rubberDuck.performFly();
    rubberDuck.performQuack();
    modelDuck.performFly();
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
  }
}

MiniDuckSimulator.main();
