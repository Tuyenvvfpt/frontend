/*
JSON
- là một ĐỊNH DẠNG dữ liệu (chuỗi)
- Javasrcipt Object Notation
- JSON: number/ boolean/ null/ arrray/ object
==> mã hóa và giải mã / encode and decode
===> stringify: js type sang json / parse: json sang js type
*/

var json1 = '["javascript", "html"]';
var json2 = '{"name":"Tuyen Vu", "age":23}';

var a = '1';
console.log(JSON.parse(a));

console.log(JSON.stringify(['javas"cript', 'html']));

console.log(JSON.stringify({
    name: "tuyen",
    age: 18,
    test: function () {

    }
}));