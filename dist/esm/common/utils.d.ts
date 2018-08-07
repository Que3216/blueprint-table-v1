/// <reference types="react" />
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import { IProps } from "@blueprintjs/core";
import * as React from "react";
/**
 * Re-declare matching types from the classnames library;
 */
export declare type ClassValue = string | number | ClassDictionary | ClassArray;
export interface ClassDictionary {
    [id: string]: boolean;
}
export interface ClassArray extends Array<ClassValue> {
}
export interface IKeyWhitelist<T> {
    include: Array<keyof T>;
}
export interface IKeyBlacklist<T> {
    exclude: Array<keyof T>;
}
export declare const Utils: {
    assignClasses<P extends IProps>(elem: React.ReactElement<P>, ...extendedClasses: ClassValue[]): React.ReactNode;
    times<T>(n: number, callback: (i: number) => T): T[];
    accumulate(numbers: number[]): number[];
    toBase26Alpha(num: number): string;
    toBase26CellName(rowIndex: number, columnIndex: number): string;
    binarySearch(value: number, high: number, lookup: (index: number) => number): number;
    arrayOfLength<T>(array: T[], length: number, fillValue: T): T[];
    assignSparseValues<T>(defaults: T[], sparseOverrides: T[]): T[];
    measureElementTextContent(element: Element): TextMetrics;
    clamp(value: number, min?: number, max?: number): number;
    guideIndexToReorderedIndex(oldIndex: number, newIndex: number, length: number): number;
    reorderedIndexToGuideIndex(oldIndex: number, newIndex: number, length: number): number;
    reorderArray<T>(array: T[], from: number, to: number, length?: number): T[];
    isLeftClick(event: MouseEvent): boolean;
    arraysEqual: (arrA: any[], arrB: any[], compare?: (a: any, b: any) => boolean) => boolean;
    deepCompareKeys: (objA: any, objB: any, keys?: string[]) => boolean;
    getDeepUnequalKeyValues<T extends object>(objA: T, objB: T, keys?: (keyof T)[]): {
        key: keyof T;
        valueA: T[keyof T];
        valueB: T[keyof T];
    }[];
    getShallowUnequalKeyValues<T extends object>(objA: T, objB: T, keys?: IKeyBlacklist<T> | IKeyWhitelist<T>): {
        key: never;
        valueA: any;
        valueB: any;
    }[];
    shallowCompareKeys<T extends object>(objA: T, objB: T, keys?: IKeyBlacklist<T> | IKeyWhitelist<T>): boolean;
    getApproxCellHeight(cellText: string, columnWidth: number, approxCharWidth: number, approxLineHeight: number, horizontalPadding: number, numBufferLines: number): number;
};
