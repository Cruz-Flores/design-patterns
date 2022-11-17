import { FlyBehavior } from '../interfaces/fly-behavior';

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!!!");
  }
}
