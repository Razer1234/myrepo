

import * as React from "react";
import { HomeC2L1 } from "./components2"
import { HomeL3 } from "./components1/components1_level2/components1_level3/homel3"




export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Hello from React {this.props.compiler} {this.props.framework}</h1>
                <HomeC2L1 />

                <HomeL3/>
            </div>
        );
    }
}