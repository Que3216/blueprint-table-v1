"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PureRender = require("pure-render-decorator");
var React = require("react");
var cell_1 = require("./cell/cell");
var Column = (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.defaultProps = {
        renderCell: cell_1.emptyCellRenderer,
    };
    Column = tslib_1.__decorate([
        PureRender
    ], Column);
    return Column;
}(React.Component));
exports.Column = Column;
