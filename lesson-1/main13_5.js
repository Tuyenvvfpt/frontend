/* DOM events:
- preventDefault

- stopPropagation: ngăn chặn hành vi nổi bọt
*/
// var aELements = document.anchors;
// console.log(aELements);

var aELements1 = document.links;
console.log(aELements1);

for (var i = 0; i < aELements1.length; ++i) {
    aELements1[i].onclick = function (e) {
        if (
            !e.target.href.startsWith("https://f8.edu.vn")) {
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
    console.log(e.target);
}

/* stopPropagation */
document.querySelector("div").onclick = 
function () {
    console.log("div");
}

document.querySelector("button").onclick = 
function (e) {
    e.stopPropagation();
    console.log("click me");
}
