//includes method

console.log(Array.prototype.includes);

var title = "Responsive web design";
console.log(title.includes("Res", 5)); //false

var courses = ['java', 'php', 'dart'];
console.log(courses.includes("php", -2)); //true with length + (-2)