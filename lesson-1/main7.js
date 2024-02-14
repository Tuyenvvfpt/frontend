/*
Mảng
1. tạo mảng
- cách tạo
- sử dụng cách nào?
- kiểm tra data type
2. truy xuất mảng
- độ dài mảng
- lấy phần tử theo index
*/

var languages1 = ['java', 'js', 'php', 'ruby', null, undefined,
    function () {

    }];
console.log(languages1.length); //7

var languages2 = new Array('java', 'js', 'php', 'ruby', null, undefined,
    function () {

    }
)
console.log(languages2);

console.warn("Kiem tra Array:", Array.isArray({})); //false
console.warn("Kiem tra Array:", Array.isArray([])); //true
console.warn("Kiem tra Array:", Array.isArray(new Array("1", "2"))); //true


console.log(languages2[2]);

/*
Keyword: Javascript array methods
1. to string
2. join
3. pop
4. push
5. shift
6. unshift
7. splicing
8. concat
9. slicing
*/
console.warn("Keyword: Javascript array method");
var languages = ['Javascript', 'PHP', 'Ruby'];

console.log(languages.toString());

console.log(languages.join(' - ')); //java - php - ruby
//java, php, ruby - nếu không có kí tự trong ngoặc === toString();
/* 3. pop: xóa element cuối mảng và trả về phần tử đã xóa */
console.warn("pop method:...");
console.log(languages.pop()); //ruby - nếu mảng trống trả ra kết quả undefined
/* 4. push: thêm một hoặc nhiều element vào cuối mảng và trả về chiều dài mới của mảng */
console.warn("push method:...");
console.log(languages.push("Java Core", "SQL")); //4
/* 5. shift: xóa element đầu mảng và trả về phần tử đã xóa */
console.warn("shift method:...");
console.log(languages.shift()); //javacript - nếu mảng trống trả ra kết quả undefined
/* 6. unshift: thêm một hoặc nhiều element vào đầu mảng và trả về chiều dài mới của mảng */
console.warn("unshift method:...");
console.log(languages.unshift("Java Web", "Android")); //4-1+2=5
console.log(languages);
/* 7. splice: trỏ vị trí bắt đầu xóa và số element muốn xóa */
console.warn("splice method:...");
var classes = ['ks01', 'ks02', 'ks03', 'ks04', 'ks05', 'ks06'];
classes.splice(1, 3); //ks01 ks05 ks06
console.log(classes); 
/*
param 1: vị trí muốn xóa
param 2: số kí tự muốn xóa
param 3: kí tự muốn chèn vào
*/
classes.splice(1, 0, "chèn"); //delete count = 0 thì sẽ không xóa
console.log(classes); //ks01 chen ks05 ks06
/* 8. concat: nối array */
console.warn("concat method:...");
console.log(languages.concat(classes)); //noi 2 array vao nhau
/* 8. slice: trích xuất element trong array */
console.warn("slice method:...");
console.log(classes.slice(1, 3)); //chen ks05
