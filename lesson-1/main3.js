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

console.warn("&&")
var result = "A" && "B" && "C";
console.log(result); //C
var conclusion = null && "B" && "C";
console.log(conclusion); //null
if (conclusion) {
    console.log("dieu kien dung");
} else {
    console.log("dieu kien sai"); //dkien sai
}

console.warn("||")
var result2 = "A" || "B" || "C";
console.log(result2); //A
var conclusion2 = null || "B" || "C";
console.log(conclusion2) //B
if (conclusion2) {
    console.log("dieu kien dung"); //dkien dung
} else {
    console.log("dieu kien sai");
}
