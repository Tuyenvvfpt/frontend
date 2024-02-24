var btn = document.getElementById("btn");
console.log(btn);

/*
1. xử lý nhiều việc khi 1 event xảy ra
2. lắng nghe/ hủy bỏ lắng nghe
*/
////--1
// setTimeout(function () {
//     btn.onclick = function () {
//         //viec 1
//         console.log("viec 1");
//         //viec 2
//         console.log("viec 2");
//         //viec 3
//         alert("viec 3");
//     }
// }, 3000);

////--2
// btn.onclick = function () {
//     //viec 1
//     console.log("viec 1");
//     //viec 2
//     console.log("viec 2");
//     //viec 3
//     alert("viec 3");
// }
// setTimeout(function () {
//     btn.onclick = function () {
//     }
// }, 3000);

////--3
function viec1() {
    console.log("viec 1");
}
function viec4() {
    console.log("viec 4");
}
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec4);

btn.addEventListener("click", function (e) {
    console.log("Loading number 2...");
});
btn.addEventListener("click", function (e) {
    console.log("number 3:" + Math.random());
});

setTimeout(function () {
    btn.removeEventListener("click", viec1);
}, 3000);
setTimeout(function () {
    btn.removeEventListener("click", viec4);
}, 10000);
