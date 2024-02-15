/*
Array methods:
- forEach()
- every()
- some()
- find()
- filter()
- map()
- reduce()
*/

var courses = [{
    id: 1,
    name: "Javascript",
    coin: 250, coinText: "gia 1"
},
{
    id: 2,
    name: "HTML, CSS",
    coin: 0, coinText: "gia 2"
},
{
    id: 3,
    name: "Ruby",
    coin: 0, coinText: "gia 3"
},
{
    id: 4,
    name: "PHP",
    coin: 234, coinText: "gia 4"
},
{
    id: 5,
    name: "ReactJS",
    coin: 134, coinText: "gia 5"
},
{
    id: 6,
    name: "Ruby",
    coin: 120, coinText: "gia 6"
}
]

console.warn("forEach");
courses.forEach(function (course, index) {
    console.log(index, course);
});

console.warn("every"); //TAT CA trong mang PHAI THOA MAN dieu kien nao do
//tra ve boolean
var isFree = courses.every(function (course, index) {
    // console.log(index);
    return course.coin === 0; //kiem tra dieu kien roi lap
});
console.log(isFree); //false

console.warn("some"); //chi can 1 THOA MAN => nhanh hon
var areFree = courses.some(function (course, index) {
    // console.log(index);
    return course.coin === 0; //kiem tra dieu kien roi lap
});
console.log(areFree); //true

console.warn("find"); //TIM KIEM 1 ELEMENT DAU TIEN trong array
var isRuby = courses.find(function (course, index) {
    // console.log(index);
    return course.name === "Ruby"; //kiem tra dieu kien roi lap
});
console.log(isRuby); //true

console.warn("filter"); //TIM KIEM TAT CA ELEMENT trong array
var listRuby = courses.filter(function (course, index) {
    // console.log(index);
    return course.name === "Ruby"; //kiem tra dieu kien roi lap
});
console.log(listRuby); //true

console.log("practise");
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr) {
    return arr.filter(function (item) {
        item.like > 5;
    })
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports));
//---------------------------------------------------------------------------------------

console.warn("map");
function courseHandler(course, index, originArray) {
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    };
}
var newCourses = courses.map(courseHandler);
//tao ra Array moi co SO LUONG PHAN TU = SO LUONG PHAN TU ARRAY BAN DAU
console.log(newCourses);


function courseNameHandler(course) {
    return `<h2> ${course.name} </h2>`;
}

var newCoursesName = courses.map(courseNameHandler);
//tao ra Array moi co SO LUONG PHAN TU = SO LUONG PHAN TU ARRAY BAN DAU
console.log(newCoursesName.join(''));
//<h2> Javascript </h2><h2> HTML, CSS 
//</h2><h2> Ruby </h2><h2> PHP </h2><h2> ReactJS </h2><h2> Ruby </h2>


//---------------------------------------------------------------------------------------
console.warn("reduce");
//1. Dễ hiểu:
//2: Ngắn gọn:
//3: Hiệu năng:
var totalCoin = 0; //Biến lưu trữ
for (var course of courses) { //Lặp qua các phần tử
    totalCoin += course.coin; //Thực hiện lưu trữ
}
console.log(totalCoin);
var i = 0;
function sumCoinHandler(accumulator, currentValue, currentIndex, originArray) {
    // i++;
    var total = accumulator + currentValue.coin;
    console.table({
        "luot chay: ": i,
        "bien tich tru: ": accumulator, //0
        "gia khoa hoc: ": currentValue.coin,
        "tich tru duoc: ": totalCoin,
    });
    // console.log(currentValue);
    // console.log(currentIndex);
    // return 100;
    return total;
}
var sumCoin = courses.reduce(sumCoinHandler, 0);
console.log(sumCoin);

var totalCoinOfCourse = courses.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0); //gia tri khoi tao bang 0 - initial value
console.log(totalCoinOfCourse);

var numbers = [100, 200, 220, 200, 480];
var totalNumber = numbers.reduce(function (total, number) {
    return total + number;
}, 0); //khong can initial value vi so dau tien la number
console.log(totalNumber);

//Flat  - "làm phẳng" mảng từ depth array - "mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray)
//Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML - CSS"
            },
            {
                id: 2,
                title: "JVS"
            }
        ]
    }, {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "ruby"
            }
        ]
    },
]

var newCoursesss = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCoursesss);

var htmls = newCoursesss.map(function (course) {
    return `
    <div>   
        <h2> title: ${course.title} </h2>
        <p> id: ${course.id} </p>
    </div>`;
});
console.log(htmls.join(""))

