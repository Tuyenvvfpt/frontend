/*
Code thuần: var
Babel: const, let
- Khi định nghĩa biến và ko cần gán lại: const
- Khi cần gán lại giá trị cho biến: let

*/

/* Scope: var / let - const*/
{
    var course = "Java basic!";
    {
        {

        }
    }
}
console.log(course); //ben ngoài block vẫn truy câp được //HTML

{
    const course = "Java basic!";
    {
        {
            const course = "HTML";
            {
                console.log(course); //HTML
            }
        }

    }
}

/* Hosting: đưa lên đầu: var / let - const */
var a;
a = 1;

const b = 2;
console.log(a);
console.log(b);

/* Assignment: const / var - let */
var c = 9;
c = 10
console.log(c); //10

const d = 90;
// d = 100;
console.log(d); //90


/*
Template literals
*/
const courseName = "Javascript";
const description = "Course name: " + courseName;
console.log(description);

const des = `Course name: ${courseName}`;
console.log(des);

const back = `Test truong hop \${}`;
console.log(back);

const line = "Line 1 \nLine 2";
console.log(line);

const lines = "Line 1 \n" +
    "Line 2";
console.log(lines);

const linez = `Line 1 
Line 2`;
console.log(linez);

/* Arrow function */
function logger1() {
    console.log(log);
};

const logger = function (log) {
    console.log(log);
};
logger("Message...");

//Arrow function
const logg = (log) => {
    console.log(log);
};
logg("Mess...");

const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 1));

const total = (a, b) => a + b;
console.log(total(2, 3));

const obj = (a, b) => ({
    a: a, b: b
})
console.log(obj(2, 1))

const lo = log => console.log(log);
lo("mess");

const object = {
    name: "Javascript",
    getName: function () {
        return this; //context
    }
}
console.log(object.getName());

const Course = function (name, price) {
    this.name = name;
    this.price = price;
}
const jsCourse = new Course("java", 10000);
console.log(jsCourse);

/* Classes */
function Subject(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function () {
        return this.name;
    }

    const isSuccess = true;
}
const javaCourse = new Subject("Java", 10000);
console.log(javaCourse);

class KoaHac {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
    run() {

    }
}
const phpCourse = new Subject("PHP", 11111);
console.log(phpCourse);

/* default parameter values: định nghĩa hàm và hàm có tham số
không bắt buộc phải nhập */
function defaultValue(log = "Gia tri mac dinh") {
    console.log(log);
};
defaultValue(undefined);

function warning(log, isAlert = false) {
    if (isAlert) {
        return alert(log);
    }
    console.log(log);
};
defaultValue('Mess........', true);

function alerting(log, type = "log") {

    console[type](log);
};
alerting('alerting.....', "warn");

/*
enhanced object literals: 
_ định nghĩa key, value cho object
_ định nghĩa method cho object
_ định nghĩa key cho object dưới dạng biến

*/
var ten = "Jvs";
var gia = 5000;
var courseNew = {
    // ten: ten,
    // gia: gia
    ten, gia,
    // inTen: function(){
    //     return ten;
    // }
    inTen() {
        return ten;
    }
};
console.log(courseNew);
console.log(courseNew.inTen());

var fieldName = "nameeeee";
var fieldPrice = "priceeee";
const monHoc = {
    [fieldName]: "Javavavavavava", //nameeeee
    [fieldPrice]: 101010101010101, //priceeee
};
console.log(monHoc);

/* destructuring : object and array*/
var array = ["javascript", "php", "ruby"];
var aa = array[0];
var bb = array[1];
var cc = array[2];
console.log(aa, bb, cc);
var [aaa, , ccc] = array;
console.log(aaa, ccc); //javascript ruby

/* rest */
var [a, ...rest] = array;
console.log(rest); //php ruby

var courseCo = {
    nameCo: "Javajajajajaja",
    priceCo: 10101010111111,
    children: {
        nameCo: "React"
    }
};
var { nameCo: parentName, priceCo, children: { nameCo: childrenName } } = courseCo;
// console.log(nameCo, priceCo); //Javajajajajaja 10101010111111
console.log(parentName, priceCo, childrenName); //Javajajajajaja 10101010111111
var { priceCo, mota = "default description" } = courseCo;
console.log(mota); //default description

/* */
function loccer(...params) {
    console.log(params); //[1,2,3,4,5,6,7,8]
}
console.log(loccer(1, 2, 3, 4, 5, 6, 7, 8)); //undefined

/* */
function loccerrrr(a, b, ...paramssss) {
    console.log(paramssss); //[1,2,3,4,5,6,7,8]
}
console.log(loccerrrr(1, 2, 3, 4, 5, 6, 7, 8)); //undefined

/* */
function objjj(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.descrip);
}
objjj({
    name: "hello",
    age: 19,
    descrip: "handsome"
})
/* */
function obbb({ name, age, descrip }) {
    console.log(name);
    console.log(age);
    console.log(descrip);
}
obbb({
    name: "hellooo",
    age: 1999,
    descrip: "handsomeee"
})
/* */
function arrayyy([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
arrayyy([9, 8, 7, 6, 5, 4, 3, 2, 1]);

/* spread */
var spreadArrayOne = ['co1', 'co2', 'co3', 'co4'];
var spreadArrayTwo = ['to1', 'to2', 'to3', 'to4'];
var spreadArraySum = [...spreadArrayOne, ...spreadArrayTwo];
console.log(spreadArraySum);


var o1 = ({
    name: "hellooo"
});
var o2 = ({
    age: 1999
});
var o3 = ({
    descrip: "handsomeee"
})
var objectFinal = { ...o1, ...o2, ...o3 };
console.log(objectFinal);

var defaultConfig = {
    api: "https://domain-trang-khoa-hoc",
    apiVersion: "v1",
    other: "other",
    //
    //
    //
}
var exerciseConfig = {
    ...defaultConfig,
    api: "https://domain-trang-bai-tap",
}
console.log(exerciseConfig);


//rest and spread
//
var arrayDemo = ['ok1', 'ok2', 'ok3', 'ok4'];
function arrayLogger(...rest) { //kết hợp destructuring và định nghĩa tham số
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
};
arrayLogger(...arrayDemo); //spread và truyền đối số và giải trong array/ object khác

/* tagged template literals */
