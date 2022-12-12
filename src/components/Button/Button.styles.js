"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var react_1 = require("@emotion/react");
var styled_1 = require("@emotion/styled");
exports.Container = styled_1["default"].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n  border: none;\n  border-radius: 0.2rem;\n  background-color: blue;\n  color: red;\n  ", "\n"], ["\n  transition: all 0.5s ease-in-out;\n  cursor: pointer;\n  border: none;\n  border-radius: 0.2rem;\n  background-color: blue;\n  color: red;\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return size === 'sm'
        ? (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          padding: 0.5rem 1.5rem;\n        "], ["\n          padding: 0.5rem 1.5rem;\n        "]))) : size === 'md'
        ? (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          padding: 0.7rem 2rem;\n        "], ["\n          padding: 0.7rem 2rem;\n        "]))) : (0, react_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          padding: 1rem 2.5rem;\n        "], ["\n          padding: 1rem 2.5rem;\n        "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
