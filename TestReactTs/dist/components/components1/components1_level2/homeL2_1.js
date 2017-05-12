"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_level3_1 = require("./components1_level3");
var HomeL2_1 = (function (_super) {
    __extends(HomeL2_1, _super);
    function HomeL2_1() {
        _super.apply(this, arguments);
    }
    HomeL2_1.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home Level2_1"), 
            React.createElement(components1_level3_1.HomeL3, null)));
    };
    return HomeL2_1;
}(React.Component));
exports.HomeL2_1 = HomeL2_1;
//# sourceMappingURL=homeL2_1.js.map