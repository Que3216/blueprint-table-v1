"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var Classes = require("../common/classes");
var core_1 = require("@blueprintjs/core");
var loadableContent_1 = require("../common/loadableContent");
var jsonFormat_1 = require("./formats/jsonFormat");
var truncatedFormat_1 = require("./formats/truncatedFormat");
exports.emptyCellRenderer = function () { return React.createElement(Cell, null); };
var Cell = (function (_super) {
    tslib_1.__extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.shouldComponentUpdate = function (nextProps) {
        // deeply compare "style," because a new but identical object might have been provided.
        return (!core_1.Utils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !core_1.Utils.deepCompareKeys(this.props.style, nextProps.style));
    };
    Cell.prototype.render = function () {
        var _a = this.props, cellRef = _a.cellRef, tabIndex = _a.tabIndex, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, onKeyPress = _a.onKeyPress, style = _a.style, intent = _a.intent, interactive = _a.interactive, loading = _a.loading, tooltip = _a.tooltip, truncated = _a.truncated, className = _a.className, wrapText = _a.wrapText;
        var classes = classNames(Classes.TABLE_CELL, core_1.Classes.intentClass(intent), (_b = {},
            _b[Classes.TABLE_CELL_INTERACTIVE] = interactive,
            _b[core_1.Classes.LOADING] = loading,
            _b[Classes.TABLE_TRUNCATED_CELL] = truncated,
            _b), className);
        var textClasses = classNames((_c = {},
            _c[Classes.TABLE_TRUNCATED_TEXT] = truncated,
            _c[Classes.TABLE_NO_WRAP_TEXT] = !wrapText,
            _c));
        // add width and height to the children, for use in shouldComponentUpdate in truncatedFormat
        // note: these aren't actually used by truncated format, just in shouldComponentUpdate
        var modifiedChildren = React.Children.map(this.props.children, function (child) {
            if (style != null && React.isValidElement(child)) {
                var childType = child.type;
                // can't get prototype of "string" child, so treat those separately
                if (typeof child === "string" || typeof childType === "string") {
                    return child;
                }
                else {
                    var isTruncatedFormat = childType.prototype === truncatedFormat_1.TruncatedFormat.prototype ||
                        truncatedFormat_1.TruncatedFormat.prototype.isPrototypeOf(childType) ||
                        childType.prototype === jsonFormat_1.JSONFormat.prototype ||
                        jsonFormat_1.JSONFormat.prototype.isPrototypeOf(childType);
                    // only add props if child is truncated format
                    if (isTruncatedFormat) {
                        return React.cloneElement(child, {
                            parentCellHeight: parseInt(style.height, 10),
                            parentCellWidth: parseInt(style.width, 10),
                        });
                    }
                }
            }
            return child;
        });
        var content = React.createElement("div", { className: textClasses }, modifiedChildren);
        return (React.createElement("div", tslib_1.__assign({ className: classes, title: tooltip, ref: cellRef }, { style: style, tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onKeyPress: onKeyPress }),
            React.createElement(loadableContent_1.LoadableContent, { loading: loading, variableLength: true }, content)));
        var _b, _c;
    };
    Cell.defaultProps = {
        truncated: true,
        wrapText: false,
    };
    return Cell;
}(React.Component));
exports.Cell = Cell;
