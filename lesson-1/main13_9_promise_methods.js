/*
   1. promise.resolve
   2. promise.reject
   3. promise.all: chạy song song

thư viện: output luôn luôn là một promise
  */
var promise = new Promise(function (resolve, reject) {
    // resolve("success =)");
    reject("fail :(")
});

var promise = Promise.resolve("success!");
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

var promiseAll1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1])
    }, 1000);
});
var promiseAll2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([2, 3])
    }, 2000);
});

Promise.all([promiseAll1, promiseAll2])
    .then(function (result) {
        var rs1 = result[0];
        var rs2 = result[1];

        console.log(rs1.concat(rs2));
    })
    .catch(function (error) {
        console.log(error);
    });