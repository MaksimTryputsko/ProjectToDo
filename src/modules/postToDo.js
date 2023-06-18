"use strict";
exports.__esModule = true;
exports.sendRequest = void 0;
var createToDo_1 = require("./createToDo");
var URL = 'https://jsonplaceholder.typicode.com/';
function sendRequest(method, path, body) {
    var bodyControl = body ? JSON.stringify(body) : undefined;
    return fetch("".concat(URL).concat(path), {
        method: method,
        body: bodyControl,
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
        .then(function (response) { return response.json(); })["catch"](function (err) { return console.log("sorry problem with server, try later."); });
}
exports.sendRequest = sendRequest;
var postBtn = document.querySelector('#postBtn');
postBtn.addEventListener('click', sendToDo);
var id = 11;
function sendToDo() {
    var valuePostElement = document.querySelector('#postInput');
    var valuePost = valuePostElement.value;
    sendToServer(valuePost, id);
    id++;
    return id;
}
var sendToServer = function (valuePost, id) {
    var body = {
        userId: 1,
        completed: false,
        title: valuePost
    };
    sendRequest('POST', 'todos', body)
        .then(function () {
        (0, createToDo_1.createLi)(valuePost, id, false);
    });
};
