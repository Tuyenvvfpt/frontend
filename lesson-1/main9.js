/* câu lệnh rẽ nhánh 
- if else: chỉ vào một nhánh, bỏ qua nhánh còn lại
- switch: sử dụng toán tử so sánh ===, 
          nếu không break, tính từ case đúng 
          vào hết case còn lại

*/

var date = 6;

switch (date) {
    case 1:
        console.log("here 1");
        break;
    case 2:
        console.log("here 2");
        break;
    case 3:
        console.log("here 3");
        break;
    case 4:
        console.log("here 4");
        break;
    default:
        console.log("khong biet");
}

/* toán tử 3 ngôi - 


*/

var course = {
    name: "Java",
    coin: 250
}

if (course.coin > 0) {
    console.log(`${course.coin} coins`); //250 coins
    console.log(course.coin + " coins"); //250 coins
} else {
    console.log("mien phi");
}

var result = course.coin > 0 ? `${course.coin} coins` : "mien phi";