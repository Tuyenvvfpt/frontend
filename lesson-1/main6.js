/*
SỐ (NUMBER)

1. tạo giá trị number
- các cách tạo
- dùng cách nào/ tại sao?
- kiểm tra data type
2. làm việc với number
- toFixed
- toString
*/
Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

var age = 9;
var PI = 3.143633;

var result = 20 / "abc";
console.log("result = " + result);
console.log("have type is: " + typeof result);
console.log("and isNaN: " + isNaN(result));

console.log(PI.toFixed(3)); //0.5





function isNumber(value) {
    return typeof value === 'number' && !isNaN(value)
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false