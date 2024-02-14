/* Object trong Javascript  */
console.warn("Object")
var emailKey = "emailEdu";
var myInfor = {
    name: "Vu Van Tuyen",
    age: 23,
    address: "Nam Dinh",
    [emailKey]: "tuyenvvhe151078@fpt.edu.vn",
    getName: function () {
        return this.name;
    }
    // myKey : 123.
};
console.log(myInfor);

myInfor.email = "vunhatvinh2006@gmail.com";
myInfor["phoneNumber"] = "0979829073";

console.log(myInfor.name); //Vu Van Tuyen
console.log(myInfor["name"]); //Vu Van Tuyen

var myKey = "address"
console.log(myInfor[myKey]); //Nam Dinh

delete myInfor.email;
console.log(myInfor);

console.log(myInfor.getName()); //Vu Van Tuyen - function

// Function : Phuong thuc / Method
// Others :  Thuoc tinh / Property 
console.warn("check type:...")
console.log(typeof phoneNumber); //(key -) undefined

/* Object Constructor */
console.warn("Object Constructor")
function User1(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var User2 = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new User1("Tuyen", "Vu", "avt1");
var admin = new User1("Nam", "Cao", "avt2");
console.log(author);
console.log(admin);
console.log(author.constructor == User1); //true


author.title = "chia se dao tai F8";
admin.level = "high";
console.log(author);
console.log(admin);

console.log(admin.getName());

/* OBJECT PROTOTYPE - Basic
1. La gi?
2. Su dung khi nao */
console.warn("Object Prototype");

User1.prototype.className = "F8";
console.log(author.className); //F8
console.log(admin.className); //F8

User1.prototype.getClassName = function () {
    return this.className;
}; //trong tag Prototype
console.log(admin.getClassName()); //F8

/* ĐỐI TƯỢNG DATE
Search: Javascript Date Object Mozilla */
console.warn("Date");
var date = new Date();
var date2 = Date();

console.log(typeof date); //object
console.log(typeof date2); //string

console.log("Today is: " + date); 
//Today is: Wed Feb 14 2024 07:20:16 GMT+0700 (Indochina Time)

var year = date.getFullYear();
console.log("Year is: " + year);

var month = date.getMonth();
console.log("Month is: " + month + 1);

var day = date.getDate();
console.log("Day is: " + day);

console.log(`${day}/${month}/${year}`); //14/1/2024


