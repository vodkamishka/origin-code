import React from "react";
import { render } from "@testing-library/react";
import Buttons from "./buttons";
import {renderWithRedux} from './app.test';


describe("Компонент Buttons", () => {

    it ("Проверка на соотвествие снимку", () => {
        const buttons = renderWithRedux(<Buttons/>);
        expect(buttons).toMatchSnapshot();
    })

});