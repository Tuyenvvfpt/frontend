//innerText: ghi nhận những gì cta nhìn thấy
//textContent: những gì thật sự trong textNote

//innerText and textContent: bỏ qua thẻ tag như elementNode

var h4_heading = document.querySelector("h4");
console.log(h4_heading.textContent); //heading text h4

console.warn("innerText");
console.log(h4_heading.innerText); //heading text h4
console.warn("textContent");
console.log(h4_heading.textContent); //heading text h4

h4_heading.innerText = "New heading";
console.log(h4_heading.innerText); //New heading

h4_heading.innerText = "<i> New heading </i>"; //in lên giao diện
console.log(h4_heading);


//inner : Enter === <br>
h4_heading.innerText = `







okkkkkkk1



`;

//textContent: skip Enter
h4_heading.textContent = `







okkkkkkk2



`;
