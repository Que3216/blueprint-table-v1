/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
export var TABLE_BODY = "bp-table-body";
export var TABLE_BODY_CELLS = "bp-table-body-cells";
export var TABLE_BODY_SCROLL_CLIENT = "bp-table-body-scroll-client";
export var TABLE_BODY_VIRTUAL_CLIENT = "bp-table-body-virtual-client";
export var TABLE_BOTTOM_CONTAINER = "bp-table-bottom-container";
export var TABLE_CELL = "bp-table-cell";
export var TABLE_CELL_CLIENT = "bp-table-cell-client";
export var TABLE_CELL_GHOST = "bp-table-cell-ghost";
export var TABLE_CELL_INTERACTIVE = "bp-table-cell-interactive";
export var TABLE_CELL_LEDGER_EVEN = "bp-table-cell-ledger-even";
export var TABLE_CELL_LEDGER_ODD = "bp-table-cell-ledger-odd";
export var TABLE_COLUMN_HEADER_TR = "bp-table-column-header-tr";
export var TABLE_COLUMN_HEADERS = "bp-table-column-headers";
export var TABLE_COLUMN_HEADER_CELL = "bp-table-column-header-cell";
export var TABLE_COLUMN_NAME = "bp-table-column-name";
export var TABLE_COLUMN_NAME_TEXT = "bp-table-column-name-text";
export var TABLE_CONTAINER = "bp-table-container";
export var TABLE_DRAGGING = "bp-table-dragging";
export var TABLE_EDITABLE_NAME = "bp-table-editable-name";
export var TABLE_EDITABLE_TEXT = "bp-table-editable-text";
export var TABLE_FOCUS_REGION = "bp-table-focus-region";
export var TABLE_HAS_INTERACTION_BAR = "bp-table-has-interaction-bar";
export var TABLE_HAS_REORDER_HANDLE = "bp-table-has-reorder-handle";
export var TABLE_HEADER = "bp-table-header";
export var TABLE_HEADER_ACTIVE = "bp-table-header-active";
export var TABLE_HEADER_CONTENT = "bp-table-header-content";
export var TABLE_HEADER_REORDERABLE = "bp-table-header-reorderable";
export var TABLE_HEADER_SELECTED = "bp-table-header-selected";
export var TABLE_HORIZONTAL_CELL_DIVIDER = "bp-table-horizontal-cell-divider";
export var TABLE_HORIZONTAL_GUIDE = "bp-table-horizontal-guide";
export var TABLE_INTERACTION_BAR = "bp-table-interaction-bar";
export var TABLE_LAST_IN_COLUMN = "bp-table-last-in-column";
export var TABLE_LAST_IN_ROW = "bp-table-last-in-row";
export var TABLE_MENU = "bp-table-menu";
export var TABLE_NO_HORIZONTAL_SCROLL = "bp-table-no-horizontal-scroll";
export var TABLE_NO_LAYOUT = "bp-table-no-layout";
export var TABLE_NO_ROWS = "bp-table-no-rows";
export var TABLE_NO_VERTICAL_SCROLL = "bp-table-no-vertical-scroll";
export var TABLE_NO_WRAP_TEXT = "bp-table-no-wrap-text";
export var TABLE_NULL = "bp-table-null";
export var TABLE_OVERLAY = "bp-table-overlay";
export var TABLE_OVERLAY_LAYER = "bp-table-overlay-layer";
export var TABLE_OVERLAY_REORDERING_CURSOR = "bp-table-reordering-cursor-overlay";
export var TABLE_POPOVER_WHITESPACE_NORMAL = "bp-table-popover-whitespace-normal";
export var TABLE_POPOVER_WHITESPACE_PRE = "bp-table-popover-whitespace-pre";
export var TABLE_QUADRANT = "bp-table-quadrant";
export var TABLE_QUADRANT_BODY_CONTAINER = "bp-table-quadrant-body-container";
export var TABLE_QUADRANT_LEFT = "bp-table-quadrant-left";
export var TABLE_QUADRANT_MAIN = "bp-table-quadrant-main";
export var TABLE_QUADRANT_SCROLL_CONTAINER = "bp-table-quadrant-scroll-container";
export var TABLE_QUADRANT_STACK = "bp-table-quadrant-stack";
export var TABLE_QUADRANT_TOP = "bp-table-quadrant-top";
export var TABLE_QUADRANT_TOP_LEFT = "bp-table-quadrant-top-left";
export var TABLE_REGION = "bp-table-region";
export var TABLE_REORDER_HANDLE = "bp-table-reorder-handle";
export var TABLE_REORDER_HANDLE_TARGET = "bp-table-reorder-handle-target";
export var TABLE_REORDERING = "bp-table-reordering";
export var TABLE_RESIZE_GUIDES = "bp-table-resize-guides";
export var TABLE_RESIZE_HANDLE = "bp-table-resize-handle";
export var TABLE_RESIZE_HANDLE_TARGET = "bp-table-resize-handle-target";
export var TABLE_RESIZE_HORIZONTAL = "bp-table-resize-horizontal";
export var TABLE_RESIZE_SENSOR = "bp-table-resize-sensor";
export var TABLE_RESIZE_SENSOR_EXPAND = "bp-table-resize-sensor-expand";
export var TABLE_RESIZE_SENSOR_SHRINK = "bp-table-resize-sensor-shrink";
export var TABLE_RESIZE_VERTICAL = "bp-table-resize-vertical";
export var TABLE_ROUNDED_LAYOUT = "bp-table-rounded-layout";
export var TABLE_ROW_HEADERS = "bp-table-row-headers";
export var TABLE_ROW_HEADERS_CELLS_CONTAINER = "bp-table-row-headers-cells-container";
export var TABLE_ROW_NAME = "bp-table-row-name";
export var TABLE_ROW_NAME_TEXT = "bp-table-row-name-text";
export var TABLE_SELECTION_ENABLED = "bp-table-selection-enabled";
export var TABLE_SELECTION_REGION = "bp-table-selection-region";
export var TABLE_TH_MENU = "bp-table-th-menu";
export var TABLE_TH_MENU_CONTAINER = "bp-table-th-menu-container";
export var TABLE_TH_MENU_CONTAINER_BACKGROUND = "bp-table-th-menu-container-background";
export var TABLE_TH_MENU_OPEN = "bp-table-th-menu-open";
export var TABLE_THEAD = "bp-table-thead";
export var TABLE_TOP_CONTAINER = "bp-table-top-container";
export var TABLE_TRUNCATED_CELL = "bp-table-truncated-cell";
export var TABLE_TRUNCATED_FORMAT = "bp-table-truncated-format";
export var TABLE_TRUNCATED_FORMAT_TEXT = "bp-table-truncated-format-text";
export var TABLE_TRUNCATED_POPOVER = "bp-table-truncated-popover";
export var TABLE_TRUNCATED_POPOVER_TARGET = "bp-table-truncated-popover-target";
export var TABLE_TRUNCATED_TEXT = "bp-table-truncated-text";
export var TABLE_TRUNCATED_VALUE = "bp-table-truncated-value";
export var TABLE_VERTICAL_GUIDE = "bp-table-vertical-guide";
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
export function columnIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-col-", columnIndex);
}
/** Return CSS class for table row index, whether or not 'bp-table-row-' prefix is included. */
export function rowIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-row-", rowIndex);
}
/** Return CSS class for table colummn cell index, whether or not 'bp-table-cell-col-' prefix is included. */
export function columnCellIndexClass(columnIndex) {
    return dimensionIndexClass("bp-table-cell-col-", columnIndex);
}
/** Return CSS class for table row cell index, whether or not 'bp-table-cell-row-' prefix is included. */
export function rowCellIndexClass(rowIndex) {
    return dimensionIndexClass("bp-table-cell-row-", rowIndex);
}
