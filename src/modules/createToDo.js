"use strict";
exports.__esModule = true;
exports.createLi = void 0;
var controlCheckBox_1 = require("./controlCheckBox");
var deleteOneToDo_1 = require("./deleteOneToDo");
function controlChecked(completed) {
    if (completed) {
        return "checked";
    }
}
function createLi(title, id, completed, userId) {
    var li = document.createElement('li');
    var ul = document.querySelector('.toDos');
    li.innerHTML = "<input id=\"".concat(id, "\" class=\"checkBoxToDo\" type=\"checkbox\" ").concat(controlChecked(completed), "><label class=\"firstStyle ").concat(controlChecked(completed), "\" for=\"").concat(id, "\">").concat(title, "</label><div id=").concat(id, " class=\"deleteImg\"></div>");
    ul.prepend(li);
    (0, controlCheckBox_1.controlCheckBox)();
    (0, deleteOneToDo_1.controlImgDelete)();
}
exports.createLi = createLi;
