Array.prototype.some2 = function (cb) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                return true;
                // output = true;
                // break;
            }
        }
    }
    return false;
    // output;
}

var courses = [{
    name: "Javascript",
    coin: 680, isFinish: false,
}, {
    name: "PHP",
    coin: 860, isFinish: true,
}, {
    name: "Ruby",
    coin: 980, isFinish: false,
}];

var result = courses.some2(function (course, index, array) {
    return course.isFinish === true;
});
console.log(result);