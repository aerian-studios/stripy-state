/// <reference types="@types/jest" />
import * as React from "react";

import * as renderer from "react-test-renderer";

import { Sfc } from "./index";


describe("Sfc", () => (
    it("renders correctly", () => {
        const tree = renderer
            .create(<Sfc  />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
));

