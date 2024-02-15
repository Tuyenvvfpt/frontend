/*
Callback

là hàm được truyền qua đối số khi gọi hàm khác
1. là hàm
2. được truyền qua đối số
*/

function myFunction(param) {
    // console.log(param);
    // console.log(typeof param);
    param("Hoc lap trinh");
};
// myFunction("hoc Javascript");
//-----
function myCallback(value) {
    console.log("value: ", value);
};
// myCallback(123);

myFunction(myCallback);