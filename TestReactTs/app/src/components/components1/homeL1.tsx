
import * as React from "react";
import { HomeL2 } from "./components1_level2"


export class HomeL1 extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h2>this is home Level1</h2>
                <HomeL2 />
            </div>
        );
    }
}