
import * as React from "react";
import { HomeL3 } from "./components1_level3"


export class HomeL2_1 extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h2>this is home Level2_1</h2>
                <HomeL3/>
            </div>
        );
    }
}