//innerHTML - lấy tất cả thẻ bên trong
console.warn("innerHTML");
var boxElement = document.querySelector(".box");

boxElement.innerText = "<h1> h1111 </h1>";
//them innerHTML thi cung them innerText
boxElement.innerHTML = "<h1> Day la the h1 </h1>"; //thêm vào HTML
//khi them innerHTML kh co the tag
//=> === them innerText
console.log(document.querySelector("h1").innerText); //Day la the h1

console.log(boxElement.innerHTML);



console.warn("outerHTML")
//outerHTML - lấy tất cả thẻ bên trong + thẻ ngoài
var outerElement = document.querySelector(".boxx");
console.log(outerElement.innerHTML);

outerElement.innerHTML = "<span> Test innerHTML </span>"; //F12 Dev Tool - thêm vào
outerElement.outerHTML = "<span> Test outerHTML </span>"; //F12 Dev Tool - thay thế
console.log(outerElement.innerHTML); //vẫn hiện nhưng
//thực tế không còn tồn tại, chỉ được lưu trong bộ nhớ



console.warn("Node properties");
//Node properties
console.log(outerElement);
console.log(typeof outerElement);