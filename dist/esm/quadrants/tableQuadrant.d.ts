/// <reference types="react" />
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import { AbstractComponent, IProps } from "@blueprintjs/core";
import * as React from "react";
import { Grid } from "../common/grid";
export declare enum QuadrantType {
    /**
     * The main quadrant beneath any frozen rows or columns.
     */
    MAIN = 0,
    /**
     * The top quadrant, containing column headers and frozen rows.
     */
    TOP = 1,
    /**
     * The left quadrant, containing row headers and frozen columns.
     */
    LEFT = 2,
    /**
     * The top-left quadrant, containing the headers and cells common to both the frozen columns and
     * frozen rows.
     */
    TOP_LEFT = 3,
}
export interface ITableQuadrantProps extends IProps {
    /**
     * A callback that receives a `ref` to the quadrant's body-wrapping element. Will need to be
     * provided only for the MAIN quadrant, because that quadrant contains the main table body.
     */
    bodyRef?: React.Ref<HTMLElement>;
    /**
     * The grid computes sizes of cells, rows, or columns from the
     * configurable `columnWidths` and `rowHeights`.
     */
    grid: Grid;
    /**
     * If `false`, hides the row headers and settings menu.
     * @default true
     */
    isRowHeaderShown?: boolean;
    /**
     * An optional callback invoked when the quadrant is scrolled via the scrollbar OR the trackpad/mouse wheel.
     * This callback really only makes sense for the MAIN quadrant, because that's the only quadrant whose
     * scrollbar is visible. Other quadrants should simply provide an `onWheel` callback.
     */
    onScroll?: React.EventHandler<React.UIEvent<HTMLDivElement>>;
    /**
     * An optional callback invoked when the quadrant is scrolled via the trackpad/mouse wheel. This
     * callback should be provided for all quadrant types except MAIN, which should provide the more
     * generic `onScroll` callback.
     */
    onWheel?: React.EventHandler<React.WheelEvent<HTMLDivElement>>;
    /**
     * A callback that receives a `ref` to the quadrant's outermost element.
     */
    quadrantRef?: React.Ref<HTMLElement>;
    /**
     * The quadrant type. Informs the values of the parameters that will be passed to the
     * `render...` callbacks, assuming an expected stacking order of the four quadrants.
     */
    quadrantType?: QuadrantType;
    /**
     * A callback that renders the table menu (the rectangle in the top-left corner).
     */
    renderMenu?: () => JSX.Element;
    /**
     * A callback that renders either all of or just the frozen section of the column header.
     */
    renderColumnHeader?: (showFrozenColumnsOnly?: boolean) => JSX.Element;
    /**
     * A callback that renders either all of or just the frozen section of the row header.
     */
    renderRowHeader?: (showFrozenRowsOnly?: boolean) => JSX.Element;
    /**
     * A callback that renders either all of or just frozen sections of the table body.
     */
    renderBody: (quadrantType?: QuadrantType, showFrozenRowsOnly?: boolean, showFrozenColumnsOnly?: boolean) => JSX.Element;
    /**
     * A callback that receives a `ref` to the quadrant's scroll-container element.
     */
    scrollContainerRef?: React.Ref<HTMLElement>;
    /**
     * CSS styles to apply to the quadrant's outermost element.
     */
    style?: React.CSSProperties;
}
export declare class TableQuadrant extends AbstractComponent<ITableQuadrantProps, {}> {
    static defaultProps: Partial<ITableQuadrantProps> & object;
    render(): JSX.Element;
    protected validateProps(nextProps: ITableQuadrantProps): void;
    private getQuadrantCssClass();
}
