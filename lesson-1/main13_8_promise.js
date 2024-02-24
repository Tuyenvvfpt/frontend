/*
promise
- sync: ĐỒNG BỘ - chạy theo luồng
- async: BẤT ĐỒNG BỘ

ASYNC
- setTimeout/ setInterval/ fetch: gọi yêu cầu qua mạng/ XML HTTP Request/ 
- file reading
- request animation frame

=> callback
*/
/* Phỏng vấn;
- Promise để xử lý những THAO TÁC BẤT ĐỒNG BỘ
- trước khi có promise thì cta sử dụng callback
- callback sẽ xảy ra TH là callback hell, code sâu, khó nhìn
khó hiểu. 
- vì thế promise được sinh ra từ phiên bản ES6
- khắc phục callback hell, code dễ đọc, không bị sâu, dễ hiểu
- để tạo ra promise, chúng ta sự dụng new Promise và 
trong Constructor của nó ta truyền vào một Executor function.
trong Executor function ta nhận 2 tham số dạng hàm là resolve
và reject. resolve gọi khi thao tác xử lý thành công.
khi sử dụng promise, đối tượng promise tạo ra chúng ta sử dụng
qua phương thức .then hoặc .catch. then và catch đều 
nhận callback function và then được thực thi khi promise được
resolve và catch khi promise bị reject
*/
//sleep
setTimeout(function test1() {
    console.log(1);
}, 1000)
console.log(2);

/* callback hell
   pyramid of doom */

setTimeout(function () {
    console.log(11); //viec 1
    setTimeout(function () {
        console.log(22); //viec 1
        setTimeout(function () {
            console.log(33); //viec 1
            setTimeout(function () {
                console.log(44); //viec 1
                setTimeout(function () {
                    console.log(55); //viec 1
                    setTimeout(function () {
                        console.log(66); //viec 1
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);

console.warn("promise");
/*new Promise()
Executor
*/

/* 3 TRẠNG THÁI PROMISE
pending
fulfilled
rejected
*/
var promise = new Promise(
    //Executor
    function (resolve, reject) {
        //logic
        //resolve(): thanh cong
        //reject(): that bai

        //fake call API
        resolve([
            { id: 1, name: "Js" }
        ]);

        // reject("Co loi");
    }
);

promise
    .then(function (idAndName) {
        console.log("successfully!");
        console.log(idAndName);
    }) //resolve được call
    .then(function () {
        return 100;
    }) //resolve được call
    .then(function (data) {
        console.log(data); //100
        return 200;
    }) //resolve được call
    .then(function (data) {
        console.log(data); //200
        return 300;
    }) //resolve được call
    .then(function (data) {
        console.log(data); //300
    }) //resolve được call
    .catch(function () {
        console.log("failure!");
    }) //reject được call
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done!"); //done
    }) //một trong relsove / reject được call


console.warn("promise (chain)")
promise
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 3000);
        }); //kh truyền giá trị cho hàm resolve => kh có giá trị
    }) //nếu không return skip sang then dưới

    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve([1, 2, 3]);
            }, 3000);
        });
    })

    .then(function (data) {
        console.log("chưa được định nghĩa: " + data); //chưa định nghĩa
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("xongggg!"); //xong
    })

//Ví dụ:
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function () {
        console.log("mot");
        return sleep(1000);
    })
    .then(function () {
        console.log("hai");
        // return sleep(1000);
        return new Promise(function (resolve, reject) {
            reject();
        })
    })
    .then(function () {
        console.log("ba");
        return sleep(1000);
    })