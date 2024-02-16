var courses = ["javascript", "php", "ruby"];
console.log(courses);
courses.length = 10;
console.log(courses.length);

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
console.warn("for in - chi lap qua phan tu thuc te")
for (var index in courses) {
    console.log(courses[index]); //chỉ lặp qua phần tử thực
}

var newCourse = new Array(15);
console.log("firstlength: ", newCourse.length); //length = 15

var secondCourse = new Array(12, 23, 27, 97);
for (var index in secondCourse) {
    console.log(secondCourse[index]); //chỉ lặp qua phần tử thực
}
console.log("secondlength: ", secondCourse.length); //4



