/* đệ quy */
var array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log(array);
console.log([...(new Set(array))]);

function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);
/////////
var myLang = ["1", "2", "3", "4", "5", "6"];
function loop(start, end, callback) {
    if (start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}

loop(0, array.length, function (index) {
    console.log(array[index]);
});
///////// Giai thua
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1)
    }
    return 1;
}
console.log(giaiThua(3));