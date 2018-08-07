/// <reference types="react" />
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import { IProps } from "@blueprintjs/core";
import * as React from "react";
export interface IGuideLayerProps extends IProps {
    /**
     *  The left-offset location of the vertical guides
     */
    verticalGuides?: number[];
    /**
     *  The top-offset location of the horizontal guides
     */
    horizontalGuides?: number[];
}
export declare class GuideLayer extends React.Component<IGuideLayerProps, {}> {
    shouldComponentUpdate(nextProps: IGuideLayerProps): boolean;
    render(): JSX.Element;
    private renderVerticalGuide;
    private renderHorizontalGuide;
}
