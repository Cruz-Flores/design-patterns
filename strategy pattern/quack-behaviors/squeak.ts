import { QuackBehavior } from '../interfaces/quack-behavior';

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeak');
  }
}
