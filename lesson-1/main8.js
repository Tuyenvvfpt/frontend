/* Object trong Javascripr  */
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

console.log(myInfor.name);
console.log(myInfor["name"]);

var myKey = "address"
console.log(myInfor[myKey]); //Nam Dinh

delete myInfor.email;
console.log(myInfor);

console.log(myInfor.getName()); //function

// Function : Phuong thuc / Method
// Others :  Thuoc tinh / Property 
console.warn("check type:...")
console.log(typeof phoneNumber); //undefined

/* Object Constructor */


