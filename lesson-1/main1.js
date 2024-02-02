// alert("hello javascript");

var fullName = "Vu Van Tuyen";
var age = 23;
var address = "Nam Dinh";
var a = 1;
var b = 2;
var c = 3;
/* h. Logical
&& - and        || - or         ! - not

Với toán tử hoặc (||), 
nếu xuất hiện ít nhất 1 vế bằng true 
thì kết quả trả về sẽ là true.

Còn với toán tử và (&&), 
nếu xuất hiện ít nhất 1 vế bằng false 
thì kết quả trả về sẽ là false
*/
if (a > 0 && b > 0) {
    console.log("dieu kien dung");
}

/* g. if - else */
// if (a < b) {
//     console.log("dieu kien dung");
// } else {
//     console.log("dieu kien sai");
// }
/*
với biểu thức điều kiện, jvs tự chuyển đổi qua kiểu boolean:
We have: (Falsy) 
0 -> false
false
"" -> false
undefined -> false
NaN -> false
null -> false


We have: (Truthy)
object rỗng, mảng rỗng, chuỗi
*/
// if (fullName) {
//     console.log("dieu kien dung");
// } else {
//     console.log("dieu kien sai");
// }

/* f. Boolean */
var isSuccess = true;

// console.log(isSuccess);
// console.log(a > b);

/* e. Toán tử chuỗi - String operator */
var firstName = "Tuyen"
var lastName = "Vu";
// nếu 1 trong 2 là chuỗi nó sẽ thành toán tử nối chuỗi
// console.log(firstName + " " + lastName);

// fullName = fullName + " Nam Dinh";
// console.log(fullName);

/* d. Toán tử gán:
toán tử         ví dụ           tương đương
=               x = y               x = y
+=              x += y              x = x + y
/=              x /= y              x = x / y
**=             x **= y             x = x ** y

x++ tăng giá trị biến lên 1 và trả về giá trị TRƯỚC khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị SAU khi tăng
*/

/* c. Toán tử số học:
cộng +
trừ -
nhân *
lũy thừa **
chia /
chia lấy số dư %
tăng 1 giá trị số ++
giảm 1 giá trị số --
*/

// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);

// a++;
// console.log(a);

/* b. giới thiệu về toàn tử:
1. toán tử số học - arithmatic
2. toán tử gán - assignment
3. toán tử so sánh - comparison
4. toán tử logic - logical
*/
// var a = 1 * 2;
// console.log(a);

// var a = 1;
// var b = 2;

// if (a < b) {
//     //code
//     console.log(a + " nho hon " + b);
// }

// var c = 3; var d = 4;
// if (c > 0 && d > 0) {
//     console.log(c + " va " + d + " lon hon 0");
// }
// alert chỉ hiển thị lần lượt từng cái
// alert(fullName);
// alert(age);

/* a. giới thiệu một số hàm build-in:
1. alert
2. console
3. confirm
4. prompt
5. set timeout
6. set interval
*/

/* in ra log trong F12 Console */
// console.log(fullName);
// console.warn(age);
// console.error(address);

/* confirm */
// confirm("Xac nhan ban du tuoi?")

/* prompt */
// prompt("Xac nhan va dien so tuoi cua ban: ");

/* set timeout: nếu bạn muốn hàm của mình thực thi bao nhiêu mili giây kể từ khi gọi method setTimeout() */
// setTimeout(function () {
//     alert("Thong bao timeout");
// }, 5000)

/* set interval: thiết lập độ trễ cho các hàm sẽ được thực hiện lặp lại như là hiệu ứng */
// setInterval(function () {
//     console.log("Thong bao interval: " + Math.random());
// }, 3000)
