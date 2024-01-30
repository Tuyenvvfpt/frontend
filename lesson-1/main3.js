/*
===
!==
*/

var a = 1;
var b = "1";
//only comparison by data
console.log(a == b); //true
console.log(!(a != b)); //true

//comparison by data and dataType
console.log(a === b); //false

/*
logical and if
*/
var c = 2;

// var result = "A" && "B" && "C";
// console.log(result);

// var conclusion = null && "B" && "C";
// if (conclusion) {
//     console.log("dieu kien dung");
// } else {
//     console.log("dieu kien sai");
// }

var result2 = "A" || "B" || "C";
console.log(result2);

var conclusion2 = null || "B" || "C";
if (conclusion2) {
    console.log("dieu kien dung");
} else {
    console.log("dieu kien sai");
}
