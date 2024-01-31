/*
Chuỗi

1. Tạo chuỗi
- các cách tạo chuỗi
- nên dùng cách nào?
- kiểm tra datatype
2. một số case sử dụng backslash (\)
3. xem độ dài chuỗi
4. chú ý độ dài khi viết code
5. templae string ES6
*/
console.warn("Chuỗi");
var name = "Tuyen \'Cris\' Vu";
var fullName = new String("Son Dang");
console.log(name);
console.log(typeof name);
console.log(typeof fullName);

//backslash in javascript
var vidu = "day la dau \\";
console.log(vidu);

console.log("do dai cua Son Dang: ", fullName.length);

console.log(`Toi la ${fullName} ${vidu}`)

/*
LÀM VIỆC VỚI CHUỖI
KEYWORD: JAVASCRIPT STRING METHODS
*/
console.warn("Làm việc với chuỗi");
var myString = "Hoc JS tai F8 JS!";
//1. length
//2. find index
console.log(myString.indexOf("JS"));
console.log(myString.indexOf("JS", 5)); //bat dau tim tu index = 5
console.log(myString.lastIndexOf("JS"));

console.log(myString.search("JS")); //KO thể chỉ định vị trí bắt đầu
//hỗ trợ biểu thức chính quy

//3. cut string
console.log(myString.slice(4, 6));
console.log(myString.slice(-6, -4));
console.log(myString.slice(-3));

//4. replace
console.warn("replace. Học biểu thức chính quy");
console.log(myString.replace(/JS/g, "Javascript"));

//5. uppercase
console.log(myString.toUpperCase());
//6. lowercase

//7. trim
console.warn("trim");
var string = "   Vu Tuyen  ";
console.log(string.length);
console.log(string.trim().length);

//8. split
var languages = "php, ok, ruby";
console.log(languages.split(", "));

//9. get character by index
const myStr = "Son Dang";
console.log(myStr.charAt(2));

console.log(myStr[10]); //undefined
console.log(myStr.charAt(10)); //empty string
