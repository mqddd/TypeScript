"use strict";
/* let a = "1 3 5\n2 4 6";
let b: string[] = a.split('\n');
let c: number[][] = [[]];
b.forEach((element, index) => {
    c[index] = element.split(' ').map(tooo);
});
let d: number[][] = [[]];
for (let i = 0; i < 3; i++) {
    d[i] = new Array(2);
    for (let index = 0; index < 2; index++) {
        d[i][index] = c[index][i];
    }
}
c.forEach((row: number[], index: number) => {
    row.forEach((element: number, i: number) => {
        d[i][index] = element;
    });
});
function tooo(num: string): number{
    return +num;
}
console.log(c[0].length); */
exports.__esModule = true;
var Matrix = /** @class */ (function () {
    function Matrix(matrix) {
        this.matrix = matrix.split('\n');
        this._rows = [[]];
        this._columns = [[]];
        this.makeRows();
        this.makeColumns();
    }
    Matrix.prototype.makeRows = function () {
        var _this = this;
        this.matrix.forEach(function (row, index) {
            _this._rows[index] = row.split(' ').map(_this.parseStringToNumber);
        });
    };
    Matrix.prototype.makeColumns = function () {
        for (var index = 0; index < this._rows[0].length / 2; index++) {
            this._columns[index] = new Array(this._rows.length);
            for (var i = 0; i < this._rows.length; i++) {
                this._columns[index][i] = this._rows[i][index];
            }
        }
    };
    Matrix.prototype.parseStringToNumber = function (str) {
        return +str;
    };
    Object.defineProperty(Matrix.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    return Matrix;
}());
exports["default"] = Matrix;
