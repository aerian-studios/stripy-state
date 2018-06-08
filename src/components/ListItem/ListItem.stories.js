import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListItem } from "./ListItem";

import "../../theme/theme.css";

storiesOf("ListItem", module)
    .add("Not selected", () => (
        <ul>
            <ListItem label="A list item" onClick={action("Clicked item")} />
        </ul>
    ))
    .add("Selected", () => (
        <ul>
            <ListItem
                selected={true}
                label="A list item"
                onClick={action("Clicked item")}
            />
        </ul>
    ));
