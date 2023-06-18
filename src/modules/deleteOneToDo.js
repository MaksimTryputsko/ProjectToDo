"use strict";
exports.__esModule = true;
exports.controlImgDelete = void 0;
var postToDo_1 = require("./postToDo");
function controlImgDelete() {
    var deleteItem = document.querySelector('.deleteImg');
    deleteItem.addEventListener('click', deleteLi);
}
exports.controlImgDelete = controlImgDelete;
function deleteLi(event) {
    var _this = this;
    (0, postToDo_1.sendRequest)('DELETE', "todos/".concat(event.target.id))
        .then(function () {
        _this.parentNode.remove();
        // (event.target as Element)?.parentNode?.remove()
    });
}
