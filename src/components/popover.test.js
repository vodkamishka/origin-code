import React from "react";
import { render } from "@testing-library/react";
import PopOver from "./popover";
import {renderWithRedux} from './app.test';


describe("Компонент PopOver", () => {

    it ("Проверка на соотвествие снимку", () => {
        const popover = renderWithRedux(<PopOver/>);
        expect(popover).toMatchSnapshot();
    })

});