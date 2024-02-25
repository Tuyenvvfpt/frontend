
var courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(function (courses) {
        renderCourses.log(courses);
    });
}

start();

//functions
function getCourses() {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}
function renderCourses() {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(function (course) {
        return `<li> 
    <h4> ${course.name} </h4>
    <h4> ${course.description} </h4>

    </li>`
    });
    listCoursesBlock.innerHTML = htmls.join("");
}