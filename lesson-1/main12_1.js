/*
callback
1. la ham
2. truyen qua doi so
3. duoc goi lai (trong ham nhan doi so)
*/
Array.prototype.map2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        console.log("results: ", result);
    }
};
var courses = [
    'javascript', 'php', 'ruby'
]
var htmllls = courses.map2(function (course, index) {
    // console.log(index, course);
    return `<h2> ${course} </h2>`
});

// var htmls = courses.map(function (course) {
//     return `<h2> ${course} </h2>`
// })
// console.log(htmls.join(""));