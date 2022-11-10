import { QuackBehavior } from './quack-behavior';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack');
  }
}
