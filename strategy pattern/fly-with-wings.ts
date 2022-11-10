import { FlyBehavior } from './fly-behavior';

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!!!");
  }
}
