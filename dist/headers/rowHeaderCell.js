"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var core_1 = require("@blueprintjs/core");
var Classes = require("../common/classes");
var Errors = require("../common/errors");
var loadableContent_1 = require("../common/loadableContent");
var headerCell_1 = require("./headerCell");
var RowHeaderCell = (function (_super) {
    tslib_1.__extends(RowHeaderCell, _super);
    function RowHeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowHeaderCell.prototype.render = function () {
        var _a = this.props, 
        // from IRowHeaderCellProps
        isRowReorderable = _a.isRowReorderable, isRowSelected = _a.isRowSelected, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["isRowReorderable", "isRowSelected"]);
        return (React.createElement(headerCell_1.HeaderCell, tslib_1.__assign({ isReorderable: this.props.isRowReorderable, isSelected: this.props.isRowSelected }, spreadableProps),
            React.createElement("div", { className: Classes.TABLE_ROW_NAME },
                React.createElement(loadableContent_1.LoadableContent, { loading: spreadableProps.loading },
                    React.createElement("div", { className: Classes.TABLE_ROW_NAME_TEXT }, spreadableProps.name))),
            this.props.children,
            spreadableProps.loading ? undefined : spreadableProps.resizeHandle));
    };
    RowHeaderCell.prototype.validateProps = function (nextProps) {
        if (nextProps.menu != null) {
            // throw this warning from the publicly exported, higher-order *HeaderCell components
            // rather than HeaderCell, so consumers know exactly which components are receiving the
            // offending prop
            console.warn(Errors.ROW_HEADER_CELL_MENU_DEPRECATED);
        }
    };
    return RowHeaderCell;
}(core_1.AbstractComponent));
exports.RowHeaderCell = RowHeaderCell;
