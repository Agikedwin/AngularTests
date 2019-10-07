export class Counter {
 constructor(){

 }
  public counter: number = 0;
  public countries: Array<String> = ['KENYA', 'UGANDA', 'RWANDA'];

  public incrementCounter(): number {
   this.counter++;
   return this.counter;
  }

  public decrementCounter(): number {
    this.counter--;
    return this.counter;
   }

}
