"use strict";
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var regions_1 = require("../../regions");
var direction_1 = require("../direction");
var DirectionUtils = require("./directionUtils");
var FocusedCellUtils = require("./focusedCellUtils");
/**
 * Resizes the provided region by 1 row/column in the specified direction,
 * returning a new region instance. The region may either expand *or* contract
 * depending on the presence and location of the focused cell.
 *
 * If no focused cell is provided, the region will always be *expanded* in the
 * specified direction.
 *
 * If a focused cell *is* provided, the behavior will change depending on where
 * the focused cell is within the region:
 *
 *   1. If along a top/bottom boundary while resizing UP/DOWN, the resize will
 *      expand from or shrink to the focused cell (same if along a left/right
 *      boundary while moving LEFT/RIGHT).
 *   2. If *not* along a top/bottom boundary while resizing UP/DOWN (or if *not*
 *      along a left/right boundary while moving LEFT/RIGHT), the region will
 *      simply expand in the specified direction.
 *
 * Other notes:
 * - A CELLS region can be resized vertically or horizontally.
 * - A FULL_ROWS region can be resized only vertically.
 * - A FULL_COLUMNS region can be resized only horizontally.
 * - A FULL_TABLE region cannot be resized.
 *
 * This function does not clamp the indices of the returned region; that is the
 * responsibility of the caller.
 */
function resizeRegion(region, direction, focusedCell) {
    if (regions_1.Regions.getRegionCardinality(region) === regions_1.RegionCardinality.FULL_TABLE) {
        // return the same instance to maintain referential integrity and
        // possibly avoid unnecessary update lifecycles.
        return region;
    }
    var nextRegion = regions_1.Regions.copy(region);
    var affectedRowIndex = 0;
    var affectedColumnIndex = 0;
    if (focusedCell != null) {
        var isAtTop = FocusedCellUtils.isFocusedCellAtRegionTop(nextRegion, focusedCell);
        var isAtBottom = FocusedCellUtils.isFocusedCellAtRegionBottom(nextRegion, focusedCell);
        var isAtLeft = FocusedCellUtils.isFocusedCellAtRegionLeft(nextRegion, focusedCell);
        var isAtRight = FocusedCellUtils.isFocusedCellAtRegionRight(nextRegion, focusedCell);
        // the focused cell is found along the top and bottom boundary
        // simultaneously when the region is 1 row tall. check for this and
        // similar special cases.
        if (direction === direction_1.Direction.UP) {
            affectedRowIndex = isAtTop && !isAtBottom ? 1 : 0;
        }
        else if (direction === direction_1.Direction.DOWN) {
            affectedRowIndex = isAtBottom && !isAtTop ? 0 : 1;
        }
        else if (direction === direction_1.Direction.LEFT) {
            affectedColumnIndex = isAtLeft && !isAtRight ? 1 : 0;
        }
        else {
            // i.e. `Direction.RIGHT:`
            affectedColumnIndex = isAtRight && !isAtLeft ? 0 : 1;
        }
    }
    else {
        // when there is no focused cell, expand in the specified direction.
        affectedRowIndex = direction === direction_1.Direction.DOWN ? 1 : 0;
        affectedColumnIndex = direction === direction_1.Direction.RIGHT ? 1 : 0;
    }
    var delta = DirectionUtils.directionToDelta(direction);
    if (nextRegion.rows != null) {
        nextRegion.rows[affectedRowIndex] += delta.rows;
    }
    if (nextRegion.cols != null) {
        nextRegion.cols[affectedColumnIndex] += delta.cols;
    }
    // the new coordinates might be out of bounds. the caller is responsible for
    // sanitizing the result.
    return nextRegion;
}
exports.resizeRegion = resizeRegion;
