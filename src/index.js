"use strict";
exports.__esModule = true;
require("./main.scss");
var reExport_1 = require("./modules/reExport");
(0, reExport_1.sendRequest)('GET', "todos")
    .then(function (data) {
    console.log(typeof (data));
    var elements = data.slice(0, 10);
    elements.forEach(function (item) {
        console.log(item);
        var completed = item.completed, id = item.id, title = item.title, userId = item.userId;
        (0, reExport_1.createLi)(title, id, completed, userId);
    });
});
