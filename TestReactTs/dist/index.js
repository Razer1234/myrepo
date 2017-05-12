"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require("react");
var ReactDOM = require("react-dom");
var hello_1 = require("./components/hello");
ReactDOM.render(React.createElement(hello_1.Hello, {compiler: "test", framework: "test"}), document.getElementById("example"));
//# sourceMappingURL=index.js.map