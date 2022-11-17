import { FlyBehavior } from '../interfaces/fly-behavior';

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}
