"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components1_level1_1 = require("../components1_level1");
var HomeC2L2 = (function (_super) {
    __extends(HomeC2L2, _super);
    function HomeC2L2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeC2L2.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "this is home component2 Level2"),
            React.createElement(components1_level1_1.HomeL3, null)));
    };
    return HomeC2L2;
}(React.Component));
exports.HomeC2L2 = HomeC2L2;
//# sourceMappingURL=homeC2L2.js.map