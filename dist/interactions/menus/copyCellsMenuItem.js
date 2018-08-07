"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@blueprintjs/core");
var PureRender = require("pure-render-decorator");
var React = require("react");
var clipboard_1 = require("../../common/clipboard");
var regions_1 = require("../../regions");
var CopyCellsMenuItem = (function (_super) {
    tslib_1.__extends(CopyCellsMenuItem, _super);
    function CopyCellsMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, context = _a.context, getCellData = _a.getCellData, onCopy = _a.onCopy;
            var cells = context.getUniqueCells();
            var sparse = regions_1.Regions.sparseMapCells(cells, getCellData);
            var success = clipboard_1.Clipboard.copyCells(sparse);
            if (onCopy != null) {
                onCopy(success);
            }
        };
        return _this;
    }
    CopyCellsMenuItem.prototype.render = function () {
        return React.createElement(core_1.MenuItem, tslib_1.__assign({}, this.props, { onClick: this.handleClick }));
    };
    CopyCellsMenuItem = tslib_1.__decorate([
        PureRender
    ], CopyCellsMenuItem);
    return CopyCellsMenuItem;
}(React.Component));
exports.CopyCellsMenuItem = CopyCellsMenuItem;
