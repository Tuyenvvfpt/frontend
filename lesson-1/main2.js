var fullName = "Vu Van Tuyen";
var age = 23;
var address = "Nam Dinh";
var a = 1;
var b = 2;
var c = 3;

/*a.Kieu du lieu trong Javascript:
1. Du lieu nguyen thuy - Primitive Data
- number
- string
- boolean
- undefined
- null
- symbol
=> dữ liệu được tạo ra
=> lưu vào vùng nhớ/ không thể sửa
2. Du lieu phuc tap - Complex data
- function
- object
*/

//number type
var d = 1.5;

console.log(typeof d);
//string type
var my_name = 'Tuyen "Vu';
console.log(my_name);
//boolean
var isSuccess = true;
var isFail = false;
//undefined type
var phoneNumber;
console.log(phoneNumber);
//null
var isNull = null;
console.log(isNull);
//symbol 
var id1 = Symbol('id'); //unique
var id2 = Symbol('id');
console.log(id1 == id2); //false


//function 
var myFunctionTest = function () {
    alert("Xin chao cac ban");
}

myFunctionTest();

//object types
var myObject = {
    name: "Tuyen Van Vu",
    age: 23,
    country: " Ha Noi",
    myFunction: function () {
        console.log("hello world");
    }
};

console.log("myObject: ", myObject);

var myArray = ['javascript', 'php', 'ruby'];
console.log(myArray);


console.log(typeof (b));


//NOTE: typeof null is object
/*Chú ý: Kết quả trả về của typeof sẽ luôn là 1 chuỗi,
vậy nên typeof của d sẽ là 'string'.
*/