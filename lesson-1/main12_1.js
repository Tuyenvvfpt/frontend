/*
callback
1. la ham
2. truyen qua doi so
3. duoc goi lai (trong ham nhan doi so)
*/
Array.prototype.map2 = function (callback) {
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        // console.log("results: ", result);
        output.push(result);
    }
    return output;
};
var courses = [
    'javascript', 'php', 'ruby'
]
var htmllls = courses.map2(function (course, index) {
    // console.log(index, course);
    return `<h2> ${course} </h2>`
});
console.log(htmllls.join(""));
// var htmls = courses.map(function (course) {
//     return `<h2> ${course} </h2>`
// })
// console.log(htmls.join(""));