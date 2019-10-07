
import {Counter} from './Counter';

describe('Validate Counter', () => {
  let valCounter: Counter;

  //  befoEach excutes after evry specs;
  beforeEach(() => {
    valCounter = new Counter();
  });
 // before each excutes only once
  beforeAll(() => {
    valCounter = new Counter();
  });

  it('Check for positive values ', () => {
   // Arrange

   // Act
   const positiveValues = valCounter.incrementCounter();
   // Assert
   expect(positiveValues).toBeGreaterThan(0);

 });

  it('Check for negative values ', () => {
  const positiveValues = valCounter.decrementCounter();
  expect(positiveValues).toBeLessThanOrEqual(0);

});

  it('Check for Kenya  ', () => {
  const positiveValues = valCounter.countries;
  expect(positiveValues).toContain('KENYA');

});
});
