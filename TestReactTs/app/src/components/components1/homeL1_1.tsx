import * as React from "react";
import { HomeL2 } from "./components1_level2"

export class HomeL1_1 extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h2>this is home Level1_1</h2>
                <HomeL2 />
            </div>
        );
    }
}