// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// HTML collection

// document.write

var heading = document.querySelector("#heading");
console.log(heading);

var h1 = document.getElementsByTagName("h1");
var h11 = document.getElementsByTagName("h1")[0];

console.log(h1);
console.log(h1[0]);
console.log(h11);

var headings = document.querySelectorAll(".heading");
for (var i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

console.log(document.forms[1]);

document.write("đặt đâu in ra ở đó");
//nếu chạy document.write sau khi được tải xong thì
//nó sẽ ghi đè tất cả

/*
DOM Attribute
*/
var h5 = document.querySelector("h5");
console.log(h5);

h5.title = "tag-h5";
h5.id = "id-h5";
h5.className = "className-h5";
h5.setAttribute("data", "data of h5");

var a = document.querySelector("a");
a.href = "href-a"; console.log(a);

console.log(h5.getAttribute("data"));
console.log(h5.id);
console.log(h5.className);
console.log(h5.title);
