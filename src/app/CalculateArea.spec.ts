
import { CalcualreArea } from './CalculateArea';
describe('Area culculator', () => {
  it('Area should be 25', () => {
    const calcArea: CalcualreArea = new CalcualreArea();
    const area = calcArea.getArea(5, 5);
    expect(area).toBe(25);
    });
});

describe('Area Perimeter', () => {
  it('perimeter should be less than 100', () => {
    const calcArea: CalcualreArea = new CalcualreArea();
    const area = calcArea.getPerimeter(5, 5);
    expect(area).toBeGreaterThan(10);
    });
});

