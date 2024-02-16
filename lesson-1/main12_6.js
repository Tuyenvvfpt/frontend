Array.prototype.every2 = function (cb) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: "Javascript",
        coin: 680,
        isFinish: true,
    },
    {
        name: "PHP",
        coin: 860,
        isFinish: false,
    },
    {
        name: "Ruby",
        coin: 980,
        isFinish: true,
    }
];

var result = courses.every2(function (course, index, array) {
    return course.isFinish; //course. isFinish === true
});
console.log(result);