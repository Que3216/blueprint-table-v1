/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as classNames from "classnames";
import * as React from "react";
import { Classes as CoreClasses, ContextMenuTarget, Utils as CoreUtils } from "@blueprintjs/core";
import * as Classes from "../common/classes";
var HeaderCell = (function (_super) {
    tslib_1.__extends(HeaderCell, _super);
    function HeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        return _this;
    }
    HeaderCell.prototype.shouldComponentUpdate = function (nextProps) {
        return (!CoreUtils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !CoreUtils.deepCompareKeys(this.props, nextProps, ["style"]));
    };
    HeaderCell.prototype.renderContextMenu = function (_event) {
        var renderMenu = this.props.renderMenu;
        if (CoreUtils.isFunction(renderMenu)) {
            // the preferred way (a consistent function instance that won't cause as many re-renders)
            return renderMenu(this.props.index);
        }
        else {
            // the deprecated way (leads to lots of unnecessary re-renders because of menu-item
            // callbacks needing access to the index of the right-clicked cell, which demands that
            // new callback functions and JSX elements be recreated on each render of the parent)
            return this.props.menu;
        }
    };
    HeaderCell.prototype.render = function () {
        var classes = classNames(Classes.TABLE_HEADER, (_a = {},
            _a[Classes.TABLE_HEADER_ACTIVE] = this.props.isActive || this.state.isActive,
            _a[Classes.TABLE_HEADER_SELECTED] = this.props.isSelected,
            _a[CoreClasses.LOADING] = this.props.loading,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, style: this.props.style }, this.props.children));
        var _a;
    };
    HeaderCell = tslib_1.__decorate([
        ContextMenuTarget
    ], HeaderCell);
    return HeaderCell;
}(React.Component));
export { HeaderCell };
