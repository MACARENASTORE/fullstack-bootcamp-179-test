const isEven = require('../isEven');

test('Should return true for even numbers',()=>{
    expect(isEven(2)).toBe(true);
})

test('Should return false for odd numbers',()=>{
    expect(isEven(5)).toBe(false);
})

