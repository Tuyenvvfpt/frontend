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
Number.parseFloat('238,21') // 238 - được hiểu như một số nguyên, không có phần thập phân
//trong JavaScript, dấu phẩy không được coi là dấu phân cách thập phân,
// mà nó được hiểu là phân tách giữa phần ngàn và phần thập phân. 
//Vì vậy, chuỗi '238,21' được hiểu là một số nguyên, không có phần thập phân, và kết quả là 238.

Number.parseFloat('237.22') // 237.22 - được hiểu là một số thực với phần thập phân là 22.
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

var age = 9;
var PI = 3.143633;

var result = 20 / "abc";
console.log("result = " + result); //NaN
console.log("have type is: " + typeof result); //number
console.log("and isNaN: " + isNaN(result)); //true

console.log(PI.toFixed(3)); //0.5 - làm tròn



//TYPE OF NaN is NUMBER

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value)
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false