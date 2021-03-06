import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { getMuiTheme } from "../lib";
import { ErrorExpansionPanelTest } from "../../stories/ErrorExpansionPanel.stories";

it("renders error expansion panel without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <ErrorExpansionPanelTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
