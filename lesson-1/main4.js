/* 1. hàm?
- một khối mã
- làm một việc cụ thể
2. loại hàm:
- built- in
- tự định nghĩa
3. tính chất:
- không thực thi khi định nghĩa
- sẽ thực thi khi dược gọi
- có thể nhận tham số
- có thể trả về một giá trị
4. tạo hàm đầu tiên
*/

// function showDialog() {
//     alert("hello world");
// }

// showDialog();

/*
1. tham số?
- định nghĩa
- kiểu dữ liệu
- tính private //hoạt động trong hàm
- một tham số
- nhiều tham số
2. truyền tham số
- một tham số
- nhiều tham số
3. arguments?
- đối tượng arguments
- giới thiệu vòng for
*/
//1
// function writeLog(message) {
//     console.log(message);
// }
// writeLog("hello");

// function writeType(message) {
//     console.log(typeof message);
// }
// writeType(["array1, array2"]);

//2
// function writeJob(message1, mess2) {
//     console.log(message1);
//     console.log(mess2); //undefined
// }
// writeJob("tester");

//3
// function writeArguments() {
//     console.log(arguments);
// }
// writeArguments("q", "w", "e", "r", "t", "y");

//4 IMPORTANT
function writeArray() {
    var myString = "";
    for (var param of arguments) {
        // console.log(param);
        myString += `${param} - `
    }
    console.log(myString);
}
writeArray("q", "w", "e", "r", "t", "y", 1, 2, 3);

/*Return 
*/
// console.warn("Return trong hàm")
// var isConfirm = confirm("Message?");
// console.log(isConfirm);

// function add(a, b) {
//     return a + b; //nếu không có return sẽ là undefined
// }
// var addResult = add(1, 2);
// console.log(addResult);


// console.warn("Demo nối chuỗi")
// function addDemo(a, b) {
//     return "1" + "và"; 
// }
// var demo = addDemo(1, 2);
// console.log(demo);

/* 
Các loại function
1. declare function
HOSTING: có thể gọi trước khi được định nghĩa
2. expression function
3. arrow function
*/
// 1. declare function
function declareFunction() {

}

// 2. expression function
var expressionFunction = function testName() {

}

setTimeout(function autoLogout() {

}, 2000);

var myObject = {
    myFunction1: function () {

    }
}

// DEMO
test1();

function test1() {
    console.log("test hosting");
}