import { Duck } from './abstracts/duck';
import { FlyRocketPowered } from './fly-behaviors/fly-rocket-powered';
import { MallardDuck } from './ducks/mallard-duck';
import { ModelDuck } from './ducks/model-duck';
import { RubberDuck } from './ducks/rubber-duck';

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
