/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import { MenuItem } from "@blueprintjs/core";
import * as PureRender from "pure-render-decorator";
import * as React from "react";
import { Clipboard } from "../../common/clipboard";
import { Regions } from "../../regions";
var CopyCellsMenuItem = (function (_super) {
    tslib_1.__extends(CopyCellsMenuItem, _super);
    function CopyCellsMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, context = _a.context, getCellData = _a.getCellData, onCopy = _a.onCopy;
            var cells = context.getUniqueCells();
            var sparse = Regions.sparseMapCells(cells, getCellData);
            var success = Clipboard.copyCells(sparse);
            if (onCopy != null) {
                onCopy(success);
            }
        };
        return _this;
    }
    CopyCellsMenuItem.prototype.render = function () {
        return React.createElement(MenuItem, tslib_1.__assign({}, this.props, { onClick: this.handleClick }));
    };
    CopyCellsMenuItem = tslib_1.__decorate([
        PureRender
    ], CopyCellsMenuItem);
    return CopyCellsMenuItem;
}(React.Component));
export { CopyCellsMenuItem };
