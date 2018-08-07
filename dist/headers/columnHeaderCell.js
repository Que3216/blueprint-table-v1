"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var core_1 = require("@blueprintjs/core");
var Classes = require("../common/classes");
var Errors = require("../common/errors");
var loadableContent_1 = require("../common/loadableContent");
var headerCell_1 = require("./headerCell");
function HorizontalCellDivider() {
    return React.createElement("div", { className: Classes.TABLE_HORIZONTAL_CELL_DIVIDER });
}
exports.HorizontalCellDivider = HorizontalCellDivider;
var ColumnHeaderCell = (function (_super) {
    tslib_1.__extends(ColumnHeaderCell, _super);
    function ColumnHeaderCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.handlePopoverDidOpen = function () {
            _this.setState({ isActive: true });
        };
        _this.handlePopoverWillClose = function () {
            _this.setState({ isActive: false });
        };
        return _this;
    }
    /**
     * This method determines if a `MouseEvent` was triggered on a target that
     * should be used as the header click/drag target. This enables users of
     * this component to render fully interactive components in their header
     * cells without worry of selection or resize operations from capturing
     * their mouse events.
     */
    ColumnHeaderCell.isHeaderMouseTarget = function (target) {
        return (target.classList.contains(Classes.TABLE_HEADER) ||
            target.classList.contains(Classes.TABLE_COLUMN_NAME) ||
            target.classList.contains(Classes.TABLE_INTERACTION_BAR) ||
            target.classList.contains(Classes.TABLE_HEADER_CONTENT));
    };
    ColumnHeaderCell.prototype.render = function () {
        var _a = this.props, 
        // from IColumnHeaderCellProps
        isColumnReorderable = _a.isColumnReorderable, isColumnSelected = _a.isColumnSelected, menuIconName = _a.menuIconName, 
        // from IColumnNameProps
        name = _a.name, renderName = _a.renderName, useInteractionBar = _a.useInteractionBar, 
        // from IHeaderProps
        spreadableProps = tslib_1.__rest(_a, ["isColumnReorderable", "isColumnSelected", "menuIconName", "name", "renderName", "useInteractionBar"]);
        var classes = classNames(spreadableProps.className, Classes.TABLE_COLUMN_HEADER_CELL, (_b = {},
            _b[Classes.TABLE_HAS_INTERACTION_BAR] = useInteractionBar,
            _b[Classes.TABLE_HAS_REORDER_HANDLE] = this.props.reorderHandle != null,
            _b));
        return (React.createElement(headerCell_1.HeaderCell, tslib_1.__assign({ isReorderable: this.props.isColumnReorderable, isSelected: this.props.isColumnSelected }, spreadableProps, { className: classes }),
            this.renderName(),
            this.maybeRenderContent(),
            this.props.loading ? undefined : this.props.resizeHandle));
        var _b;
    };
    ColumnHeaderCell.prototype.validateProps = function (nextProps) {
        if (nextProps.menu != null) {
            // throw this warning from the publicly exported, higher-order *HeaderCell components
            // rather than HeaderCell, so consumers know exactly which components are receiving the
            // offending prop
            console.warn(Errors.COLUMN_HEADER_CELL_MENU_DEPRECATED);
        }
    };
    ColumnHeaderCell.prototype.renderName = function () {
        var _a = this.props, index = _a.index, loading = _a.loading, name = _a.name, renderName = _a.renderName, reorderHandle = _a.reorderHandle, useInteractionBar = _a.useInteractionBar;
        var dropdownMenu = this.maybeRenderDropdownMenu();
        var defaultName = React.createElement("div", { className: Classes.TABLE_TRUNCATED_TEXT }, name);
        var nameComponent = (React.createElement(loadableContent_1.LoadableContent, { loading: loading, variableLength: true }, renderName == null
            ? defaultName
            : React.cloneElement(renderName(name, index), { index: index })));
        if (useInteractionBar) {
            return (React.createElement("div", { className: Classes.TABLE_COLUMN_NAME, title: name },
                React.createElement("div", { className: Classes.TABLE_INTERACTION_BAR },
                    reorderHandle,
                    dropdownMenu),
                React.createElement(HorizontalCellDivider, null),
                React.createElement("div", { className: Classes.TABLE_COLUMN_NAME_TEXT }, nameComponent)));
        }
        else {
            return (React.createElement("div", { className: Classes.TABLE_COLUMN_NAME, title: name },
                reorderHandle,
                dropdownMenu,
                React.createElement("div", { className: Classes.TABLE_COLUMN_NAME_TEXT }, nameComponent)));
        }
    };
    ColumnHeaderCell.prototype.maybeRenderContent = function () {
        if (this.props.children === null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.TABLE_HEADER_CONTENT }, this.props.children);
    };
    ColumnHeaderCell.prototype.maybeRenderDropdownMenu = function () {
        var _a = this.props, index = _a.index, menu = _a.menu, menuIconName = _a.menuIconName, renderMenu = _a.renderMenu;
        if (renderMenu == null && menu == null) {
            return undefined;
        }
        var constraints = [
            {
                attachment: "together",
                pin: true,
                to: "window",
            },
        ];
        var classes = classNames(Classes.TABLE_TH_MENU_CONTAINER, (_b = {},
            _b[Classes.TABLE_TH_MENU_OPEN] = this.state.isActive,
            _b));
        // prefer renderMenu if it's defined
        var content = core_1.Utils.isFunction(renderMenu) ? renderMenu(index) : menu;
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: Classes.TABLE_TH_MENU_CONTAINER_BACKGROUND }),
            React.createElement(core_1.Popover, { tetherOptions: { constraints: constraints }, content: content, position: core_1.Position.BOTTOM, className: Classes.TABLE_TH_MENU, popoverDidOpen: this.handlePopoverDidOpen, popoverWillClose: this.handlePopoverWillClose, useSmartArrowPositioning: true },
                React.createElement(core_1.Icon, { iconName: menuIconName }))));
        var _b;
    };
    ColumnHeaderCell.defaultProps = {
        isActive: false,
        menuIconName: "chevron-down",
        useInteractionBar: false,
    };
    return ColumnHeaderCell;
}(core_1.AbstractComponent));
exports.ColumnHeaderCell = ColumnHeaderCell;
