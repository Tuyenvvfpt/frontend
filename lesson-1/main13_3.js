/*innerHTML - lấy tất cả thẻ bên trong*/
console.warn("innerHTML");
var boxElement = document.querySelector(".box");

boxElement.innerText = "<h1> h1111 </h1>";
//them innerHTML thi cung them innerText
boxElement.innerHTML = "<h1> Day la the h1</h1>"; //thêm vào HTML
//khi them innerHTML kh co the tag
//=> === them innerText
console.log(document.querySelector("h1").innerText); //Day la the h1

console.log(boxElement.innerHTML);


/*outerHTML - lấy tất cả thẻ bên trong + thẻ ngoài*/
console.warn("outerHTML")
var outerElement = document.querySelector(".boxx");
console.log(outerElement.innerHTML);

outerElement.outerHTML = "<span> Test outter </span>"; //F12 Dev Tool - thêm vào
// outerElement.outerHTML = "<span> Test outerHTML </span>"; //F12 Dev Tool - thay thế
console.log(outerElement.innerHTML); //vẫn hiện nhưng
//thực tế không còn tồn tại, chỉ được lưu trong bộ nhớ
console.log(outerElement.outerHTML);


/*Node properties */
console.warn("Node properties");
var nodeProperties = document.querySelector(".boxxx");

console.log(nodeProperties); // <div> </div>
console.log(typeof nodeProperties); //object
console.log([nodeProperties]); //[div.boxx]

//clientHeight & clientWidth

//attributes: giống array có index và length

/* DOM CSS */
console.warn("DOM CSS");
var domCSS = document.querySelector(".boxxxx");
console.log(domCSS.style); //CSSStyleDeclaration
//background-position
//backgroundPosition
domCSS.style.height = "200px";
domCSS.style.width = "100px";
domCSS.style.backgroundColor = "red";

//after
Object.assign(domCSS.style, {
    width: "200px",
    height: "100px",
    backgroundColor: "green",
});
console.log(domCSS.style.backgroundColor); //green

/* class property
-add: thêm class vào element
- contains: kiểm tra class có trong element 
- remove: xóa bỏ class khỏi element
- toggle: có class ở element => xóa bỏ/// kh có => thêm
*/
console.warn("class property");
var classProperty = document.querySelector(".boxxxx");
console.log(classProperty.classList); //DOMTokenList

console.log(classProperty.classList.length); //2
console.log(classProperty.classList.value);
//chuỗi trong class
classProperty.classList.add("red");
console.log(classProperty.
    classList.contains("red")); //yes

setTimeout(() => {
    classProperty.classList.remove("red");
}, 5000);

setInterval(() => {
    classProperty.classList.toggle("red");
}, 1000);

/* dom events 
- ATTRIBUTE EVENTS
- ASSIGN EVENT USING THE ELEMENT NODE
*/
console.warn("dom events");
var h6Element = document.querySelector("h6");
h6Element.onclick = function () {
    //code here
    console.log(Math.random());
};
h6Element.onclick = function (e) {
    //code here
    console.log(e.target);
}

var h6Elements = document.querySelectorAll("h6");
for (var i = 0; i < h6Elements.length; i++) {
    h6Elements[i].onclick = function (e) {
        //code here
        // console.log(h6Elements[i]);
        console.log(e.target);
    }
};

console.log(i);
