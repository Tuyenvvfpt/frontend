/*HTML DOM

Document Object Model
When a web page is loaded, the browser creates
a DOM of the page.
The DOM is a W3C standard
- element: là thẻ tag
- attribute: là thuộc tính trong thẻ tag
- text: là nội dung trong thẻ tag

=> Mỗi hình vuông là một Node - điểm giao 

W3C DOM standard has 3 parts
- Core DOM: for all document types
- XML DOM: for XML documents
- HTML DOM: for HTML documents
------------------------------
HTML DOM vs DOM API

Javascript: Browser / Server (NodeJS)
Browser: HTML -> DOM -> WEB API
-------------------------------
Document Object

Đại diện cho cả website
Nếu muốn truy xuất qua các thành phần nhỏ  
đều phải đi qua document
*/
console.log(document);

document.write("hello guys");

/*
HTML DOM
- element: id, class, tag, css selector, html collection
- attribute
- text
*/
console.warn("getById")
var headingNode = document.getElementById("heading");
console.log({ element: headingNode }); //{element: h1#heading}
console.log([headingNode]);
console.log(typeof headingNode);

console.warn("getByClassName")
var headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes); //HTMLCollection [h1.heading]
console.log(typeof headingNodes);

var tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

var selectorNode = document.querySelector(".heading");
console.log(selectorNode);
var selectorNode2 = document.querySelector("html .box .heading-2");
console.log(selectorNode2); //có nhiều element giống nên select cái đầu 
var selectorNode3 = document.querySelector(".box .heading-2:first-child");
console.log(selectorNode3);
var selectorNode4 = document.querySelector(".box .heading-2:nth-child(3)");
console.log(selectorNode4);

console.warn('SelectorAll');
var selectorNode5 = document.querySelectorAll("html .box .heading-2");
console.log(selectorNode5); //NodeList[...]
console.log(selectorNode5[3]);

console.warn("document.form");
console.log(document.forms[1]); //    <form action="" id="form-1"></form>
console.log(document.forms["form-2"]);
console.log(document.forms.hello);
console.log(document.anchors); //lấy ra thẻ <a> đã name

//-----------------------------------------------------
var listItemNodes =
    document.querySelector(".box-1 li");

var boxNode = document.querySelector(".box-1");
//công việc 1: sử dụng boxNode
console.log(boxNode);
//công việc 2: sử dụng tới các li elements 
//là con của .box1
console.log(boxNode.getElementsByClassName("li"));
console.log(boxNode.getElementsByClassName("p"));
console.log(boxNode.querySelector("p"));

console.log(listItemNodes);