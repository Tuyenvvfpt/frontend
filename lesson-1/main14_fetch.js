/*
- fetch: gọi lên api lấy ra nội dung ở phía backend
và fe nhận nội dung đó và render ra browser
- API (url) -> Application programing interface
(cổng giao tiếp giữa các phần mềm)

Backend -> API -> Fetch -> JSON/ XML

JSON.parse -> Javascript types
-> Render ra giao diện với HTML
*/

var postAPI = "https://jsonplaceholder.typicode.com/posts";
//stream
fetch(postAPI)
    .then(function (response) {
        return response.json();
        //JSON.parse: JSON -> Javascript types
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2> ${post.title} </h2> 
                <h2> ${post.body} </h2> 
                </li>`;
        });

        var html = htmls.join("");
        document.getElementById("post-block").
            innerHTML = html;
    })
    .catch(function (error) {
        alert("Có lỗi");
    })
    ;


/* fetch 
- json server: api server (fake)/ mock api
-crud
 + create: tạo mới -> POST
 + read: lấy dữ liệu -> GET
 + update: cập nhật -> PUT / PATCH
 + delete: chỉnh sửa -> DELETE
- postman
*/
var courseApi = "http://localhost:3000/courses";
fetch(courseApi)
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (courses) {
        console.log(courses);
    })
