"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_level3_1 = require("./components1_level3");
var HomeL2 = (function (_super) {
    __extends(HomeL2, _super);
    function HomeL2() {
        _super.apply(this, arguments);
    }
    HomeL2.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home Level2"), 
            React.createElement(components1_level3_1.HomeL3, null)));
    };
    return HomeL2;
}(React.Component));
exports.HomeL2 = HomeL2;
//# sourceMappingURL=homeL2.js.map