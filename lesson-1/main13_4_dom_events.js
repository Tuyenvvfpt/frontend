/* dom events
1. input/ select
2. key up/ down
*/
var inputValue;

var inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);

// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// };

inputElement.oninput = function (e) {
    // console.log(e.target.value);
    inputValue = e.target.value;
};

var inputCheckbox = document.querySelector('input[type="checkbox"]');

inputCheckbox.onchange = function (e) {
    console.log(e.target.checked);
};

var inputSelect = document.querySelector('select');
inputSelect.onchange = function (e) {
    console.log(e.target.value);
};

/* key up - key down : nhấn - thả phím 
 key press: NHẤN VÀ GIỮ */

var inputKeydown = document.querySelector('input[type="text"]');
inputKeydown.onkeydown = function (e) {
    // console.log(e.target.value);
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log("Exit!");
            break;
    }
};

//C2:
document.onkeydown = function (e) {
    switch (e.which) {
        case 27:
            console.log("EXIT");
            break;
        case 13:
            console.log("SEND CHAT");
            break;
    }
}