import React from "react";
import { render } from "@testing-library/react";
import Notes from "./notes";
import {renderWithRedux} from './app.test';


describe("Компонент Notes", () => {

    it ("Проверка на соотвествие снимку", () => {
        const notes = renderWithRedux(<Notes/>);
        expect(notes).toMatchSnapshot();
    })

});
