"use strict";
exports.__esModule = true;
var postToDo_js_1 = require("./postToDo.js");
var deleteAllBtn = document.querySelector('.deleteBtn');
deleteAllBtn.addEventListener('click', allDelete);
function allDelete() {
    var liItems = document.querySelectorAll('.checkBoxToDo');
    liItems.forEach(function (item) {
        if (item.checked) {
            (0, postToDo_js_1.sendRequest)('DELETE', "todos/".concat(item.id))
                .then(function () {
                var _a;
                (_a = item === null || item === void 0 ? void 0 : item.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            });
        }
    });
}
