import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AnimalDetail } from "./AnimalDetail";
import animals from "../../fixtures/stripes.json";
import "../../theme/theme.css";

storiesOf("AnimalDetail", module).add("Default", () => (
    <AnimalDetail animal={animals[0]} onOpenImage={action("open image")} />
));
