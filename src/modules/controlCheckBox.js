"use strict";
exports.__esModule = true;
exports.controlCheckBox = void 0;
var postToDo_1 = require("./postToDo");
function controlCheckBox() {
    var label = document.querySelector('.firstStyle');
    var testCheckBox = document.querySelector('.checkBoxToDo');
    testCheckBox.addEventListener('click', function () { return label.classList.toggle('checked'); });
    testCheckBox.addEventListener('change', function () { return patch(label.className.includes('checked'), Number(testCheckBox.id)); });
}
exports.controlCheckBox = controlCheckBox;
function patch(value, id) {
    (0, postToDo_1.sendRequest)('PATCH', "todos/".concat(id), { completed: value });
}
