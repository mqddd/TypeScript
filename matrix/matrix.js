"use strict";
exports.__esModule = true;
var a = "1 2 3\n2 5 6";
var b = a.split('\n');
console.log(b[1]);
var Matrix = /** @class */ (function () {
    function Matrix(matrix) {
        this.matrix = matrix.split('');
    }
    Matrix.prototype.makeRows = function () {
        this.rows = this.matrix;
    };
    Matrix.prototype.makeColumns = function () {
    };
    return Matrix;
}());
exports["default"] = Matrix;
