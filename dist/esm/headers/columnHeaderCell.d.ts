/// <reference types="react" />
import * as React from "react";
import { AbstractComponent, IconName, IProps } from "@blueprintjs/core";
import { IHeaderCellProps } from "./headerCell";
export interface IColumnNameProps {
    /**
     * The name displayed in the header of the column.
     */
    name?: string;
    /**
     * A callback to override the default name rendering behavior. The default
     * behavior is to simply use the `ColumnHeaderCell`s name prop.
     *
     * This render callback can be used, for example, to provide a
     * `EditableName` component for editing column names.
     *
     * If you define this callback, we recommend you also set
     * `useInteractionBar` to `true`, to avoid issues with menus or selection.
     *
     * The callback will also receive the column index if an `index` was originally
     * provided via props.
     */
    renderName?: (name: string, index?: number) => React.ReactElement<IProps>;
    /**
     * If `true`, adds an interaction bar on top of the column header cell and
     * moves the menu and selection interactions to it.
     *
     * This allows you to override the rendering of column name without worry of
     * clobbering the menu or other interactions.
     *
     * @default false
     * @deprecated since blueprintjs/table v1.27.0; pass this prop to `Table`
     * instead.
     */
    useInteractionBar?: boolean;
}
export interface IColumnHeaderCellProps extends IHeaderCellProps, IColumnNameProps {
    /**
     * Specifies if the column is reorderable.
     */
    isColumnReorderable?: boolean;
    /**
     * Specifies if the full column is part of a selection.
     */
    isColumnSelected?: boolean;
    /**
     * The icon name for the header's menu button.
     * @default "chevron-down"
     */
    menuIconName?: IconName;
}
export interface IColumnHeaderCellState {
    isActive?: boolean;
}
export declare function HorizontalCellDivider(): JSX.Element;
export declare class ColumnHeaderCell extends AbstractComponent<IColumnHeaderCellProps, IColumnHeaderCellState> {
    static defaultProps: IColumnHeaderCellProps;
    /**
     * This method determines if a `MouseEvent` was triggered on a target that
     * should be used as the header click/drag target. This enables users of
     * this component to render fully interactive components in their header
     * cells without worry of selection or resize operations from capturing
     * their mouse events.
     */
    static isHeaderMouseTarget(target: HTMLElement): boolean;
    state: {
        isActive: boolean;
    };
    render(): JSX.Element;
    protected validateProps(nextProps: IColumnHeaderCellProps): void;
    private renderName();
    private maybeRenderContent();
    private maybeRenderDropdownMenu();
    private handlePopoverDidOpen;
    private handlePopoverWillClose;
}
