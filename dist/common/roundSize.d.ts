/// <reference types="react" />
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as React from "react";
/**
 * A React component that measures and rounds the size of its only child. This
 * is necessary due to a Chrome bug that prevents scrolling when the size is
 * changed to a fractional value. See this JSFiddle for a repro of the issue:
 * https://jsfiddle.net/2rmz7p1d/5/
 */
export declare class RoundSize extends React.Component<{}, {}> {
    private internalElement;
    private containerElement;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private copyRoundedSize();
    private setInternalRef;
    private setContainerRef;
}
