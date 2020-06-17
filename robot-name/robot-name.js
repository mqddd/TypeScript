"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RobotName = /** @class */ (function () {
    function RobotName() {
        this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._name = this.makeName();
        RobotName.names = new Array();
    }
    RobotName.prototype.makeName = function () {
        var tempName = "";
        for (var index = 0; index < 2; index++) {
            var char = this.chars.charAt(Math.random() * this.chars.length);
            tempName.concat(char);
        }
        for (var index = 0; index < 3; index++) {
            var digit = Math.random() * 10;
            tempName.concat(digit.toString());
        }
        if (this.isDuplicate(tempName)) {
            return "";
        }
        RobotName.names.push(tempName);
        return tempName;
    };
    RobotName.prototype.isDuplicate = function (tempName) {
        RobotName.names.forEach(function (name) {
            if (tempName.localeCompare(name) === 0) {
                return true;
            }
        });
        return false;
    };
    RobotName.prototype.resetName = function () {
        this._name = this.makeName();
    };
    Object.defineProperty(RobotName.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return RobotName;
}());
exports.default = RobotName;
