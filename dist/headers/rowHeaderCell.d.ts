/// <reference types="react" />
import { AbstractComponent, IProps } from "@blueprintjs/core";
import { IHeaderCellProps } from "./headerCell";
export interface IRowHeaderCellProps extends IHeaderCellProps, IProps {
    /**
     * Specifies if the row is reorderable.
     */
    isRowReorderable?: boolean;
    /**
     * Specifies whether the full row is part of a selection.
     */
    isRowSelected?: boolean;
}
export declare class RowHeaderCell extends AbstractComponent<IRowHeaderCellProps, {}> {
    render(): JSX.Element;
    protected validateProps(nextProps: IRowHeaderCellProps): void;
}
