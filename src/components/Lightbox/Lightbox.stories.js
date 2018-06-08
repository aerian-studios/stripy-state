import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Lightbox } from "./Lightbox";
import animals from "../../fixtures/stripes.json";
import "../../theme/theme.css";

storiesOf("AnimalLightbox", module)
    .add("Open", () => (
        <Lightbox
            image={animals[0].image_full}
            lowRes={animals[0].image_thumb}
            onClick={action("clicked")}
            visible={true}
        />
    ))
    .add("Closed", () => (
        <Lightbox
            image={animals[0].image_full}
            lowRes={animals[0].image_thumb}
            onClick={action("clicked")}
            visible={false}
        />
    ));
