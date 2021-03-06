"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PureRender = require("pure-render-decorator");
var React = require("react");
var core_1 = require("@blueprintjs/core");
// This class expects a single, non-string child.
var LoadableContent = (function (_super) {
    tslib_1.__extends(LoadableContent, _super);
    function LoadableContent(props) {
        var _this = _super.call(this, props) || this;
        _this.style = _this.calculateStyle(props.variableLength);
        return _this;
    }
    LoadableContent.prototype.componentWillReceiveProps = function (nextProps) {
        if ((!this.props.loading && nextProps.loading) || this.props.variableLength !== nextProps.variableLength) {
            this.style = this.calculateStyle(nextProps.variableLength);
        }
    };
    LoadableContent.prototype.render = function () {
        if (this.props.loading) {
            return React.createElement("div", { className: core_1.Classes.SKELETON, style: this.style });
        }
        return React.Children.only(this.props.children);
    };
    LoadableContent.prototype.calculateStyle = function (variableLength) {
        var skeletonLength = variableLength ? 75 - Math.floor(Math.random() * 11) * 5 : 100;
        return { width: skeletonLength + "%" };
    };
    LoadableContent = tslib_1.__decorate([
        PureRender
    ], LoadableContent);
    return LoadableContent;
}(React.Component));
exports.LoadableContent = LoadableContent;
