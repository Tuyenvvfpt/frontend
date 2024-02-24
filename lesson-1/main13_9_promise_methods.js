/*
   1. promise.resolve
   2. promise.reject
   3. promise.call
  */
var promise = new Promise(function (resolve, reject) {
    // resolve("success =)");
    reject("fail :(")
});
promise
    .then(function (result) {
        console.log("ket qua: " + result);
    })
    .catch(function (result) {
        console.log("that bai: " + result);
    });

//-----------------------------------------
//Ví dụ:
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function () {
        console.log("mot"); //mot
        return sleep(1000);
    })
    .then(function () {
        console.log("hai"); //hai
        // return sleep(1000);
        return new Promise(function (resolve, reject) {
            reject("Lỗi rồi"); //
        })
    })
    .then(function () {
        console.log("ba");
        return sleep(1000);
    })
    .then(function () {
        console.log("bon");
        return sleep(1000);
    })
    .then(function () {
        console.log("nam");
        return sleep(1000);
    })
    .catch(function (err) {
        console.log(err); //Loi roi
    })

