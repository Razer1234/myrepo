"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_1 = require('../components1');
var HomeC2L1 = (function (_super) {
    __extends(HomeC2L1, _super);
    function HomeC2L1() {
        _super.apply(this, arguments);
    }
    HomeC2L1.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h2", null, "this is home component2 Level1"), 
            React.createElement(components1_1.HomeL3, null)));
    };
    return HomeC2L1;
}(React.Component));
exports.HomeC2L1 = HomeC2L1;
//# sourceMappingURL=homeC2L1.js.map