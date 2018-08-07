/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
export declare const Clipboard: {
    applySelectableStyles(elem: HTMLElement): HTMLElement;
    copyCells(cells: string[][]): boolean;
    copyString(value: string): boolean;
    copyElement(elem: HTMLElement, plaintext?: string): boolean;
    isCopySupported(): boolean;
};
