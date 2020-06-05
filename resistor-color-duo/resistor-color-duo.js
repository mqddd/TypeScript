"use strict";
exports.__esModule = true;
exports.ResistorColor = void 0;
var ResistorColor = /** @class */ (function () {
    function ResistorColor(colors) {
        this.primaryColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
        this.colors = colors;
    }
    ResistorColor.prototype.value = function () {
        var _a;
        var firstParm;
        var secondParm;
        var a, b;
        _a = this.colors, a = _a[0], b = _a[1];
        this.primaryColors.forEach(function (color, index) {
            if (a === color) {
                firstParm = index;
            }
            if (b === color) {
                secondParm = index;
            }
        });
        return "" + firstParm + secondParm;
    };
    return ResistorColor;
}());
exports.ResistorColor = ResistorColor;
