//forEach
//Object prototype
//forIn
//hasOwnProperty

var courses = ["javascript", "php", "ruby"];
var courses = new Array(100);
courses.push("a", "b", "c");

Array.prototype.forEach2 = function (cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            // this.hasOwnProperty(index);
            // console.log("index: ", index, this.hasOwnProperty(index)); //duyet qua ca mang proto
            // console.log(index);
            cb(this[index], index, this);
        }
    }
};
Array.prototype.testMethod1 = 1;
// var output = courses.forEach(function (course, index, array) {
//     console.log(course, index, array);
// });
// console.log(output); //undefined

courses.forEach2(function (course, index, array) {
    console.log(course, index, array);
});

//Array constructor được định nghĩa từ prototype/Number/