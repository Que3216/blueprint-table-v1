"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TABLE_BODY = "bp-table-body";
exports.TABLE_BODY_CELLS = "bp-table-body-cells";
exports.TABLE_BODY_SCROLL_CLIENT = "bp-table-body-scroll-client";
exports.TABLE_BODY_VIRTUAL_CLIENT = "bp-table-body-virtual-client";
exports.TABLE_BOTTOM_CONTAINER = "bp-table-bottom-container";
exports.TABLE_CELL = "bp-table-cell";
exports.TABLE_CELL_CLIENT = "bp-table-cell-client";
exports.TABLE_CELL_GHOST = "bp-table-cell-ghost";
exports.TABLE_CELL_INTERACTIVE = "bp-table-cell-interactive";
exports.TABLE_CELL_LEDGER_EVEN = "bp-table-cell-ledger-even";
exports.TABLE_CELL_LEDGER_ODD = "bp-table-cell-ledger-odd";
exports.TABLE_COLUMN_HEADER_TR = "bp-table-column-header-tr";
exports.TABLE_COLUMN_HEADERS = "bp-table-column-headers";
exports.TABLE_COLUMN_HEADER_CELL = "bp-table-column-header-cell";
exports.TABLE_COLUMN_NAME = "bp-table-column-name";
exports.TABLE_COLUMN_NAME_TEXT = "bp-table-column-name-text";
exports.TABLE_CONTAINER = "bp-table-container";
exports.TABLE_DRAGGING = "bp-table-dragging";
exports.TABLE_EDITABLE_NAME = "bp-table-editable-name";
exports.TABLE_EDITABLE_TEXT = "bp-table-editable-text";
exports.TABLE_FOCUS_REGION = "bp-table-focus-region";
exports.TABLE_HAS_INTERACTION_BAR = "bp-table-has-interaction-bar";
exports.TABLE_HAS_REORDER_HANDLE = "bp-table-has-reorder-handle";
exports.TABLE_HEADER = "bp-table-header";
exports.TABLE_HEADER_ACTIVE = "bp-table-header-active";
exports.TABLE_HEADER_CONTENT = "bp-table-header-content";
exports.TABLE_HEADER_REORDERABLE = "bp-table-header-reorderable";
exports.TABLE_HEADER_SELECTED = "bp-table-header-selected";
exports.TABLE_HORIZONTAL_CELL_DIVIDER = "bp-table-horizontal-cell-divider";
exports.TABLE_HORIZONTAL_GUIDE = "bp-table-horizontal-guide";
exports.TABLE_INTERACTION_BAR = "bp-table-interaction-bar";
exports.TABLE_LAST_IN_COLUMN = "bp-table-last-in-column";
exports.TABLE_LAST_IN_ROW = "bp-table-last-in-row";
exports.TABLE_MENU = "bp-table-menu";
exports.TABLE_NO_HORIZONTAL_SCROLL = "bp-table-no-horizontal-scroll";
exports.TABLE_NO_LAYOUT = "bp-table-no-layout";
exports.TABLE_NO_ROWS = "bp-table-no-rows";
exports.TABLE_NO_VERTICAL_SCROLL = "bp-table-no-vertical-scroll";
exports.TABLE_NO_WRAP_TEXT = "bp-table-no-wrap-text";
exports.TABLE_NULL = "bp-table-null";
exports.TABLE_OVERLAY = "bp-table-overlay";
exports.TABLE_OVERLAY_LAYER = "bp-table-overlay-layer";
exports.TABLE_OVERLAY_REORDERING_CURSOR = "bp-table-reordering-cursor-overlay";
exports.TABLE_POPOVER_WHITESPACE_NORMAL = "bp-table-popover-whitespace-normal";
exports.TABLE_POPOVER_WHITESPACE_PRE = "bp-table-popover-whitespace-pre";
exports.TABLE_QUADRANT = "bp-table-quadrant";
exports.TABLE_QUADRANT_BODY_CONTAINER = "bp-table-quadrant-body-container";
exports.TABLE_QUADRANT_LEFT = "bp-table-quadrant-left";
exports.TABLE_QUADRANT_MAIN = "bp-table-quadrant-main";
exports.TABLE_QUADRANT_SCROLL_CONTAINER = "bp-table-quadrant-scroll-container";
exports.TABLE_QUADRANT_STACK = "bp-table-quadrant-stack";
exports.TABLE_QUADRANT_TOP = "bp-table-quadrant-top";
exports.TABLE_QUADRANT_TOP_LEFT = "bp-table-quadrant-top-left";
exports.TABLE_REGION = "bp-table-region";
exports.TABLE_REORDER_HANDLE = "bp-table-reorder-handle";
exports.TABLE_REORDER_HANDLE_TARGET = "bp-table-reorder-handle-target";
exports.TABLE_REORDERING = "bp-table-reordering";
exports.TABLE_RESIZE_GUIDES = "bp-table-resize-guides";
exports.TABLE_RESIZE_HANDLE = "bp-table-resize-handle";
exports.TABLE_RESIZE_HANDLE_TARGET = "bp-table-resize-handle-target";
exports.TABLE_RESIZE_HORIZONTAL = "bp-table-resize-horizontal";
exports.TABLE_RESIZE_SENSOR = "bp-table-resize-sensor";
exports.TABLE_RESIZE_SENSOR_EXPAND = "bp-table-resize-sensor-expand";
exports.TABLE_RESIZE_SENSOR_SHRINK = "bp-table-resize-sensor-shrink";
exports.TABLE_RESIZE_VERTICAL = "bp-table-resize-vertical";
exports.TABLE_ROUNDED_LAYOUT = "bp-table-rounded-layout";
exports.TABLE_ROW_HEADERS = "bp-table-row-headers";
exports.TABLE_ROW_HEADERS_CELLS_CONTAINER = "bp-table-row-headers-cells-container";
exports.TABLE_ROW_NAME = "bp-table-row-name";
exports.TABLE_ROW_NAME_TEXT = "bp-table-row-name-text";
exports.TABLE_SELECTION_ENABLED = "bp-table-selection-enabled";
exports.TABLE_SELECTION_REGION = "bp-table-selection-region";
exports.TABLE_TH_MENU = "bp-table-th-menu";
exports.TABLE_TH_MENU_CONTAINER = "bp-table-th-menu-container";
exports.TABLE_TH_MENU_CONTAINER_BACKGROUND = "bp-table-th-menu-container-background";
exports.TABLE_TH_MENU_OPEN = "bp-table-th-menu-open";
exports.TABLE_THEAD = "bp-table-thead";
exports.TABLE_TOP_CONTAINER = "bp-table-top-container";
exports.TABLE_TRUNCATED_CELL = "bp-table-truncated-cell";
exports.TABLE_TRUNCATED_FORMAT = "bp-table-truncated-format";
exports.TABLE_TRUNCATED_FORMAT_TEXT = "bp-table-truncated-format-text";
exports.TABLE_TRUNCATED_POPOVER = "bp-table-truncated-popover";
exports.TABLE_TRUNCATED_POPOVER_TARGET = "bp-table-truncated-popover-target";
exports.TABLE_TRUNCATED_TEXT = "bp-table-truncated-text";
exports.TABLE_TRUNCATED_VALUE = "bp-table-truncated-value";
exports.TABLE_VERTICAL_GUIDE = "bp-table-vertical-guide";
/** Common code for row and column index class generator functions, since they're essentially the same. */
function dimensionIndexClass(classPrefix, index) {
    if (index == null) {
        return undefined;
    }
    if (typeof index === "number") {
        return "" + classPrefix + index;
    }
    return index.indexOf(classPrefix) === 0 ? index : "" + classPrefix + index;
}
/** Return CSS class for table colummn index, whether or not 'bp-table-col-' prefix is included. */
function columnIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-col-", columnIndex);
}
exports.columnIndexClass = columnIndexClass;
/** Return CSS class for table row index, whether or not 'bp-table-row-' prefix is included. */
function rowIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-row-", rowIndex);
}
exports.rowIndexClass = rowIndexClass;
/** Return CSS class for table colummn cell index, whether or not 'bp-table-cell-col-' prefix is included. */
function columnCellIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-cell-col-", columnIndex);
}
exports.columnCellIndexClass = columnCellIndexClass;
/** Return CSS class for table row cell index, whether or not 'bp-table-cell-row-' prefix is included. */
function rowCellIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-cell-row-", rowIndex);
}
exports.rowCellIndexClass = rowCellIndexClass;
