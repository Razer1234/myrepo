"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var components2_1 = require("./components2");
var homel3_1 = require("./components1/components1_level2/components1_level3/homel3");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, 
                "Hello from React ", 
                this.props.compiler, 
                " ", 
                this.props.framework), 
            React.createElement(components2_1.HomeC2L1, null), 
            React.createElement(homel3_1.HomeL3, null)));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=hello.js.map