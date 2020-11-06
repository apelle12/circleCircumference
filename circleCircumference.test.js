const { expect } = require('@jest/globals');
const funToTest = require('./circleCircumference');

test('test1: circumference should be close to 62.83 with a radius of 10', () => {
  expect(funToTest(10)).toBeCloseTo(62.83,2);
})

test('test2: circumference should be close to 12.57 with a radius of 2', () => {
  expect(funToTest(2)).toBeCloseTo(12.57,2);
})

test('test3: circumference should be close to 138.23 with a radius of 22', () =>{
  expect(funToTest(22)).toBeCloseTo(138.23,2);

})
