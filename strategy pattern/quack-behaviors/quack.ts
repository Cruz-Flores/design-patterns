import { QuackBehavior } from '../interfaces/quack-behavior';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack');
  }
}
