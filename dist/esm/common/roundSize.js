/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import * as Classes from "./classes";
/**
 * A React component that measures and rounds the size of its only child. This
 * is necessary due to a Chrome bug that prevents scrolling when the size is
 * changed to a fractional value. See this JSFiddle for a repro of the issue:
 * https://jsfiddle.net/2rmz7p1d/5/
 */
var RoundSize = (function (_super) {
    tslib_1.__extends(RoundSize, _super);
    function RoundSize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setInternalRef = function (ref) { return (_this.internalElement = ref); };
        _this.setContainerRef = function (ref) { return (_this.containerElement = ref); };
        return _this;
    }
    RoundSize.prototype.render = function () {
        return (React.createElement("div", { className: Classes.TABLE_ROUNDED_LAYOUT, ref: this.setContainerRef },
            React.createElement("div", { className: Classes.TABLE_NO_LAYOUT, ref: this.setInternalRef }, React.Children.only(this.props.children))));
    };
    RoundSize.prototype.componentDidMount = function () {
        this.copyRoundedSize();
    };
    RoundSize.prototype.componentDidUpdate = function () {
        this.copyRoundedSize();
    };
    RoundSize.prototype.copyRoundedSize = function () {
        if (this.internalElement == null || this.containerElement == null) {
            return;
        }
        // measure the size of the internal children
        var width = Math.round(this.internalElement.clientWidth) + "px";
        var height = Math.round(this.internalElement.clientHeight) + "px";
        // set the size of the container element with rounded values
        this.containerElement.style.width = width;
        this.containerElement.style.height = height;
    };
    return RoundSize;
}(React.Component));
export { RoundSize };
