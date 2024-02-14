/* for loop */
console.warn("for loop");

var i = 1;
for (; i < 20; i++) {
    // console.log("i = " + i);
}

var myArray = ["a", "b", "c", "d"];
var arrayLength = myArray.length;
for (var i = 0; i <= arrayLength - 1; i++) {
    console.log(myArray[i]);
}

/* for in */
console.warn("for in");

var myInfor = {
    name: "TV",
    age: 18,
    address: "HN",
}
for (var key in myInfor) {
    console.log(myInfor[key]);
}

var myLanguage = "Javascript";
for (var key in myLanguage) {
    console.log(myLanguage[key]); //khac nhau o day
}

/* for/of loop */

console.warn("for of");

var myLang = "Javascript";
for (var key of myLanguage) {
    console.log(key); //khac nhau o day
}

var myIf = {
    name: "TV",
    age: 18,
    address: "HN",
}
console.error("Object.keys")
for (var key of Object.keys(myIf)) {
    console.log(key);
}
console.error("Object.values")
for (var value of Object.values(myIf)) {
    console.log(value);
}

/* while loop */

console.warn("while loop");

var myArr = ["a", "b", "c", "d"];
var index = 0;
while (index < myArr.length) {
    console.log(myArr[index]);
    index++;
}

/* do while */
console.warn("do while");

var ind = 0;
var isSuccess = false;

do {
    // console.log(ind);
    ind++;

    console.log("nap the lan: " + ind);
    //thanh cong
    if (true) {
        isSuccess = true;
    }
} while (!isSuccess && ind <= 3); //kiểm tra điều kiện ở lần lặp thứ 2
//nếu không thành công thì lặp lại

/* break & continue */
console.warn("break and continue")
for (var a = 0; a < 10; a++) {
    if (a % 2== 0) continue;
    // if (a = 8) break;
    console.log(a);
    a++;
}

/* nested loop - vong lap long nhau */
console.warn("nested loop")
var myA = [[1, 2], [3, 4], [5, 6]];

for (var i = 0; i < myA.length; i++) {
    for (var j = 0; i < myA[i].length; j++) {
        console.log(myA[i][j]);
    }
}