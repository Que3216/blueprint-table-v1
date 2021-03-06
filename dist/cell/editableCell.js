"use strict";
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames = require("classnames");
var React = require("react");
var core_1 = require("@blueprintjs/core");
var Classes = require("../common/classes");
var draggable_1 = require("../interactions/draggable");
var cell_1 = require("./cell");
var EditableCell = (function (_super) {
    tslib_1.__extends(EditableCell, _super);
    function EditableCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            cell: function (ref) {
                _this.cellRef = ref;
            },
        };
        _this.handleKeyPress = function () {
            if (_this.state.isEditing || !_this.props.isFocused) {
                return;
            }
            // setting dirty value to empty string because apparently the text field will pick up the key and write it in there
            _this.setState({ isEditing: true, dirtyValue: "", savedValue: _this.state.savedValue });
        };
        _this.handleEdit = function () {
            _this.setState({ isEditing: true, dirtyValue: _this.state.savedValue });
        };
        _this.handleCancel = function (value) {
            // don't strictly need to clear the dirtyValue, but it's better hygiene
            _this.setState({ isEditing: false, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onCancel, value);
        };
        _this.handleChange = function (value) {
            _this.setState({ dirtyValue: value });
            _this.invokeCallback(_this.props.onChange, value);
        };
        _this.handleConfirm = function (value) {
            _this.setState({ isEditing: false, savedValue: value, dirtyValue: undefined });
            _this.invokeCallback(_this.props.onConfirm, value);
        };
        _this.handleCellActivate = function (_event) {
            return true;
        };
        _this.handleCellDoubleClick = function (_event) {
            _this.handleEdit();
        };
        _this.state = {
            isEditing: false,
            savedValue: props.value,
        };
        return _this;
    }
    EditableCell.prototype.componentDidMount = function () {
        this.checkShouldFocus();
    };
    EditableCell.prototype.componentDidUpdate = function () {
        this.checkShouldFocus();
    };
    EditableCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (!core_1.Utils.shallowCompareKeys(this.props, nextProps, { exclude: ["style"] }) ||
            !core_1.Utils.shallowCompareKeys(this.state, nextState) ||
            !core_1.Utils.deepCompareKeys(this.props, nextProps, ["style"]));
    };
    EditableCell.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        if (value !== this.props.value) {
            this.setState({ savedValue: value, dirtyValue: value });
        }
    };
    EditableCell.prototype.render = function () {
        var _a = this.props, onCancel = _a.onCancel, onChange = _a.onChange, onConfirm = _a.onConfirm, truncated = _a.truncated, wrapText = _a.wrapText, spreadableProps = tslib_1.__rest(_a, ["onCancel", "onChange", "onConfirm", "truncated", "wrapText"]);
        var _b = this.state, isEditing = _b.isEditing, dirtyValue = _b.dirtyValue, savedValue = _b.savedValue;
        var interactive = spreadableProps.interactive || isEditing;
        var cellContents = null;
        if (isEditing) {
            cellContents = (React.createElement(core_1.EditableText, { isEditing: true, className: classNames(Classes.TABLE_EDITABLE_TEXT, Classes.TABLE_EDITABLE_NAME), intent: spreadableProps.intent, minWidth: null, onCancel: this.handleCancel, onChange: this.handleChange, onConfirm: this.handleConfirm, onEdit: this.handleEdit, placeholder: "", selectAllOnFocus: false, value: dirtyValue }));
        }
        else {
            var textClasses = classNames(Classes.TABLE_EDITABLE_TEXT, (_c = {},
                _c[Classes.TABLE_TRUNCATED_TEXT] = truncated,
                _c[Classes.TABLE_NO_WRAP_TEXT] = !wrapText,
                _c));
            cellContents = React.createElement("div", { className: textClasses }, savedValue);
        }
        return (React.createElement(cell_1.Cell, tslib_1.__assign({}, spreadableProps, { truncated: false, interactive: interactive, cellRef: this.refHandlers.cell, onKeyPress: this.handleKeyPress }),
            React.createElement(draggable_1.Draggable, { onActivate: this.handleCellActivate, onDoubleClick: this.handleCellDoubleClick, preventDefault: false, stopPropagation: interactive }, cellContents)));
        var _c;
    };
    EditableCell.prototype.renderHotkeys = function () {
        return (React.createElement(core_1.Hotkeys, null,
            React.createElement(core_1.Hotkey, { key: "edit-cell", label: "Edit the currently focused cell", group: "Table", combo: "f2", onKeyDown: this.handleEdit })));
    };
    EditableCell.prototype.checkShouldFocus = function () {
        if (this.props.isFocused && !this.state.isEditing) {
            // don't focus if we're editing -- we'll lose the fact that we're editing
            this.cellRef.focus();
        }
    };
    EditableCell.prototype.invokeCallback = function (callback, value) {
        // pass through the row and column indices if they were provided as props by the consumer
        var _a = this.props, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex;
        core_1.Utils.safeInvoke(callback, value, rowIndex, columnIndex);
    };
    EditableCell.defaultProps = {
        truncated: true,
        wrapText: false,
    };
    EditableCell = tslib_1.__decorate([
        core_1.HotkeysTarget
    ], EditableCell);
    return EditableCell;
}(React.Component));
exports.EditableCell = EditableCell;
