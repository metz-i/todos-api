"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// URL of API
var url = 'https://jsonplaceholder.typicode.com/todos';
// Fetching JSON data from API
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
