/* DOM events:
- preventDefault

- stopPropagation: ngăn chặn hành vi nổi bọt
*/
console.warn("anchors")
var aELements = document.anchors; //lấy thẻ có attribute name
console.log(aELements);

console.warn("links")
var aELements1 = document.links;
console.log(aELements1);

for (var i = 0; i < aELements1.length; ++i) {
    aELements1[i].onclick = function (e) {
        if (
            !e.target.href.
                startsWith("https://mail.google.com/mail/u/1/#inbox")) {
            e.preventDefault();
        }
        console.log(e.target.href);
    }
}
/* preventDefault */
var ulELement = document.querySelector("ul");
ulELement.onmousedown = function (e) {
    e.preventDefault();
}
ulELement.onclick = function (e) {
    console.log(e.target); //<li>...</li>
}

/* stopPropagation */
document.querySelector("div").onclick =
    function () {
        console.log("div");
    }

document.querySelector("button").onclick =
    function (e) {
        e.stopPropagation(); //important
        console.log("click me");
    }
