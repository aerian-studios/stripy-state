import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NavList } from "./NavList";
import animals from "../../fixtures/stripes.json";
import "../../theme/theme.css";

storiesOf("AnimalList", module)
    .add("First item selected", () => (
        <NavList
            animals={animals}
            onClick={action("Clicked item")}
            selectedAnimal={animals[0]}
        />
    ))
    .add("Second item selected", () => (
        <NavList
            animals={animals}
            onClick={action("Clicked item")}
            selectedAnimal={animals[1]}
        />
    ))
    .add("Last item selected", () => (
        <NavList
            animals={animals}
            onClick={action("Clicked item")}
            selectedAnimal={animals[animals.length - 1]}
        />
    ));
