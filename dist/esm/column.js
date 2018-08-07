/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import * as PureRender from "pure-render-decorator";
import * as React from "react";
import { emptyCellRenderer } from "./cell/cell";
var Column = (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.defaultProps = {
        renderCell: emptyCellRenderer,
    };
    Column = tslib_1.__decorate([
        PureRender
    ], Column);
    return Column;
}(React.Component));
export { Column };
