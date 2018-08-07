/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import { AbstractComponent, Utils as CoreUtils } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";
import * as Classes from "../common/classes";
import * as Errors from "../common/errors";
export var QuadrantType;
(function (QuadrantType) {
    /**
     * The main quadrant beneath any frozen rows or columns.
     */
    QuadrantType[QuadrantType["MAIN"] = 0] = "MAIN";
    /**
     * The top quadrant, containing column headers and frozen rows.
     */
    QuadrantType[QuadrantType["TOP"] = 1] = "TOP";
    /**
     * The left quadrant, containing row headers and frozen columns.
     */
    QuadrantType[QuadrantType["LEFT"] = 2] = "LEFT";
    /**
     * The top-left quadrant, containing the headers and cells common to both the frozen columns and
     * frozen rows.
     */
    QuadrantType[QuadrantType["TOP_LEFT"] = 3] = "TOP_LEFT";
})(QuadrantType || (QuadrantType = {}));
var TableQuadrant = (function (_super) {
    tslib_1.__extends(TableQuadrant, _super);
    function TableQuadrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableQuadrant.prototype.render = function () {
        var _a = this.props, grid = _a.grid, isRowHeaderShown = _a.isRowHeaderShown, quadrantType = _a.quadrantType, renderBody = _a.renderBody;
        var showFrozenRowsOnly = quadrantType === QuadrantType.TOP || quadrantType === QuadrantType.TOP_LEFT;
        var showFrozenColumnsOnly = quadrantType === QuadrantType.LEFT || quadrantType === QuadrantType.TOP_LEFT;
        var className = classNames(Classes.TABLE_QUADRANT, this.getQuadrantCssClass(), this.props.className);
        var maybeMenu = isRowHeaderShown && CoreUtils.safeInvoke(this.props.renderMenu);
        var maybeRowHeader = isRowHeaderShown && CoreUtils.safeInvoke(this.props.renderRowHeader, showFrozenRowsOnly);
        var maybeColumnHeader = CoreUtils.safeInvoke(this.props.renderColumnHeader, showFrozenColumnsOnly);
        var body = quadrantType != null ? renderBody(quadrantType, showFrozenRowsOnly, showFrozenColumnsOnly) : renderBody();
        // need to set bottom container size to prevent overlay clipping on scroll
        var bottomContainerStyle = {
            height: grid.getHeight(),
            width: grid.getWidth(),
        };
        return (React.createElement("div", { className: className, style: this.props.style, ref: this.props.quadrantRef },
            React.createElement("div", { className: Classes.TABLE_QUADRANT_SCROLL_CONTAINER, ref: this.props.scrollContainerRef, onScroll: this.props.onScroll, onWheel: this.props.onWheel },
                React.createElement("div", { className: Classes.TABLE_TOP_CONTAINER },
                    maybeMenu,
                    maybeColumnHeader),
                React.createElement("div", { className: Classes.TABLE_BOTTOM_CONTAINER, style: bottomContainerStyle },
                    maybeRowHeader,
                    React.createElement("div", { className: Classes.TABLE_QUADRANT_BODY_CONTAINER, ref: this.props.bodyRef }, body)))));
    };
    TableQuadrant.prototype.validateProps = function (nextProps) {
        var quadrantType = nextProps.quadrantType;
        if (nextProps.onScroll != null && quadrantType != null && quadrantType !== QuadrantType.MAIN) {
            console.warn(Errors.QUADRANT_ON_SCROLL_UNNECESSARILY_DEFINED);
        }
    };
    TableQuadrant.prototype.getQuadrantCssClass = function () {
        switch (this.props.quadrantType) {
            case QuadrantType.MAIN:
                return Classes.TABLE_QUADRANT_MAIN;
            case QuadrantType.TOP:
                return Classes.TABLE_QUADRANT_TOP;
            case QuadrantType.LEFT:
                return Classes.TABLE_QUADRANT_LEFT;
            case QuadrantType.TOP_LEFT:
                return Classes.TABLE_QUADRANT_TOP_LEFT;
            default:
                return undefined;
        }
    };
    // we want the user to explicitly pass a quadrantType. define defaultProps as a Partial to avoid
    // declaring that and other required props here.
    TableQuadrant.defaultProps = {
        isRowHeaderShown: true,
    };
    return TableQuadrant;
}(AbstractComponent));
export { TableQuadrant };
