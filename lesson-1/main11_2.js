Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1; //currentValue
        result = this[0]; //initial value
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number) => {
    return total + number
})
//kh co initial value thi lan thu nhat callback  duoc goi se lay phan tu dau tien cua mang la initial value
//va phan tu thu 2 la currentValue
// total = 1, number = 2 => 3
//3+3
//6+4
//10+5

console.log(result);

//-------------------------------------------------------

function arrToObj(array) {
    return array.reduce(function (accumulator, currentValue) {
        accumulator[currentValue[0]] = currentValue[1];
        return accumulator;
    }, {})
}


// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
