"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    projectRoot: "./src",
    projectName: "scully-snipcart",
    outDir: './dist/static',
    routes: {
        "/user/:userId": {
            type: 'json',
            userId: {
                url: 'https://jsonplaceholder.typicode.com/users',
                property: 'id',
            }
        }
    }
};
