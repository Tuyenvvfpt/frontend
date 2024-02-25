
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/
const obj = {
    name: "Alice",
    cat1: {
        name: "Dinal1",
        cat2: {
            name: "Dinal1",
            cat3: {
                name: "Dinal3"
            }
        }
    }
}
if (
    onj?.cat?.cat2?.cat3
) {
    console.log(obj.cat.cat1.cat2.cat3);
}