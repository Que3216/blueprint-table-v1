/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as React from "react";
import { AbstractComponent } from "@blueprintjs/core";
import * as Classes from "../common/classes";
import * as Errors from "../common/errors";
import { LoadableContent } from "../common/loadableContent";
import { HeaderCell } from "./headerCell";
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
        return (React.createElement(HeaderCell, tslib_1.__assign({ isReorderable: this.props.isRowReorderable, isSelected: this.props.isRowSelected }, spreadableProps),
            React.createElement("div", { className: Classes.TABLE_ROW_NAME },
                React.createElement(LoadableContent, { loading: spreadableProps.loading },
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
}(AbstractComponent));
export { RowHeaderCell };
