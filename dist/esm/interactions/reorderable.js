/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import { Utils as CoreUtils } from "@blueprintjs/core";
import * as PureRender from "pure-render-decorator";
import * as React from "react";
import { Utils } from "../common/utils";
import { RegionCardinality, Regions } from "../regions";
import { Draggable } from "./draggable";
var DragReorderable = (function (_super) {
    tslib_1.__extends(DragReorderable, _super);
    function DragReorderable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActivate = function (event) {
            if (_this.shouldIgnoreMouseDown(event)) {
                return false;
            }
            var region = _this.props.locateClick(event);
            if (!Regions.isValid(region)) {
                return false;
            }
            var cardinality = Regions.getRegionCardinality(region);
            var isColumnHeader = cardinality === RegionCardinality.FULL_COLUMNS;
            var isRowHeader = cardinality === RegionCardinality.FULL_ROWS;
            if (!isColumnHeader && !isRowHeader) {
                return false;
            }
            var selectedRegions = _this.props.selectedRegions;
            var selectedRegionIndex = Regions.findContainingRegion(selectedRegions, region);
            if (selectedRegionIndex >= 0) {
                var selectedRegion = selectedRegions[selectedRegionIndex];
                if (Regions.getRegionCardinality(selectedRegion) !== cardinality) {
                    // ignore FULL_TABLE selections
                    return false;
                }
                // cache for easy access later in the lifecycle
                var selectedInterval = isRowHeader ? selectedRegion.rows : selectedRegion.cols;
                _this.selectedRegionStartIndex = selectedInterval[0];
                // add 1 because the selected interval is inclusive, which simple subtraction doesn't
                // account for (e.g. in a FULL_COLUMNS range from 3 to 6, 6 - 3 = 3, but the selection
                // actually includes four columns: 3, 4, 5, and 6)
                _this.selectedRegionLength = selectedInterval[1] - selectedInterval[0] + 1;
            }
            else {
                // select the new region to avoid complex and unintuitive UX w/r/t the existing selection
                _this.maybeSelectRegion(region);
                var regionRange = isRowHeader ? region.rows : region.cols;
                _this.selectedRegionStartIndex = regionRange[0];
                _this.selectedRegionLength = regionRange[1] - regionRange[0] + 1;
            }
            return true;
        };
        _this.handleDragMove = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = Utils.guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordering(oldIndex, reorderedIndex, length);
        };
        _this.handleDragEnd = function (event, coords) {
            var oldIndex = _this.selectedRegionStartIndex;
            var guideIndex = _this.props.locateDrag(event, coords);
            var length = _this.selectedRegionLength;
            var reorderedIndex = Utils.guideIndexToReorderedIndex(oldIndex, guideIndex, length);
            _this.props.onReordered(oldIndex, reorderedIndex, length);
            // the newly reordered region becomes the only selection
            var newRegion = _this.props.toRegion(reorderedIndex, reorderedIndex + length - 1);
            _this.maybeSelectRegion(newRegion);
            // resetting is not strictly required, but it's cleaner
            _this.selectedRegionStartIndex = undefined;
            _this.selectedRegionLength = undefined;
        };
        return _this;
    }
    DragReorderable.prototype.render = function () {
        var draggableProps = this.getDraggableProps();
        return (React.createElement(Draggable, tslib_1.__assign({}, draggableProps, { preventDefault: false }), this.props.children));
    };
    DragReorderable.prototype.getDraggableProps = function () {
        return this.props.onReordered == null
            ? {}
            : {
                onActivate: this.handleActivate,
                onDragEnd: this.handleDragEnd,
                onDragMove: this.handleDragMove,
            };
    };
    DragReorderable.prototype.shouldIgnoreMouseDown = function (event) {
        var disabled = this.props.disabled;
        var isDisabled = CoreUtils.isFunction(disabled) ? CoreUtils.safeInvoke(disabled, event) : disabled;
        return !Utils.isLeftClick(event) || isDisabled;
    };
    DragReorderable.prototype.maybeSelectRegion = function (region) {
        var nextSelectedRegions = [region];
        if (!CoreUtils.deepCompareKeys(nextSelectedRegions, this.props.selectedRegions)) {
            this.props.onSelection(nextSelectedRegions);
            // move the focused cell into the newly selected region
            this.props.onFocus(tslib_1.__assign({}, Regions.getFocusCellCoordinatesFromRegion(region), { focusSelectionIndex: 0 }));
        }
    };
    DragReorderable.defaultProps = {
        selectedRegions: [],
    };
    DragReorderable = tslib_1.__decorate([
        PureRender
    ], DragReorderable);
    return DragReorderable;
}(React.Component));
export { DragReorderable };
