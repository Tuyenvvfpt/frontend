//filter
//value types and reference types

Array.prototype.filter2 = function (cb) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [{
    name: "Javascript",
    coin: 680
}, {
    name: "PHP",
    coin: 860
}, {
    name: "Ruby",
    coin: 980
}];
// var courses = new Array(100000);

var filterCourses = courses.filter2(function (course, index, array) {
    console.log(course, index, this);
    return course.coin > 700;
})
console.log(filterCourses);

