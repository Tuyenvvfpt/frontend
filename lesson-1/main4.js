/* 1. hàm?
- một khối mã
- thực hiện một công việc cụ thể
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

console.warn("paramenter:...")
function writeType(message) {
    console.log(typeof message);
}
writeType(["array1", "array2"]); //array return => object

//2
function writeJob(message1, mess2) {
    console.log(message1);
    console.log(mess2); //undefined
}
writeJob("tester"); //test / undefined
writeJob("tester2", "dev");

//3 //arguments chỉ xuất hiện trong function
function writeArguments() {
    console.log(arguments);
}
writeArguments("q", "w", "e", "r", "t", "y");

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
console.warn("Return trong hàm")

// var isConfirm = confirm("Message?");
// console.log(isConfirm);

/* trong 1 hàm KHÔNG RETURN sẽ trả về UNDEFINED*/
// function add(a, b) {
//     return a + b; //nếu không có return sẽ là undefined
// }
// var addResult = add(1, 2);
// console.log(addResult);

function cong(a, b) {
    a + b; //trả về undefined
    return a + b; //nếu return 2 dòng dưới sẽ không được thực hiện
    console.log("123");
    alert("hello");
}
var rs = cong(1, 2);
console.log(rs);

console.warn("Demo nối chuỗi")
function addDemo1(a, b) {
    return "1" + "và"; 
}
var demo1 = addDemo1(1, 2);
console.log(demo1);

function addDemo2(a, b) {
    return a.toString() + b.toString(); 
}
var demo2 = addDemo2(1, 2);
console.log(demo2);
/* 
Các loại function
1. declare function
HOSTING: có thể gọi trước khi được định nghĩa
2. expression function
3. arrow function
*/

console.warn("FUNCTION")

// 1. declare function: PHẢI ĐẶT TÊN FUNCTION / HOSTING: có thể gọi trước khi định nghĩa
function declareFunction() {

}

// 2. expression function: GÁN CHO MỘT BIẾN và KHÔNG CẦN ĐẶT TÊN FUNCTION
// 2_1
var expressionFunction = function testName() {

}
// 2_2
setTimeout(function autoLogout() {

}, 2000);

// 2_3
var myObject = {
    myFunction1: function () {

    }
}

// DEMO
test1();

function test1() {
    console.log("test hosting");
}