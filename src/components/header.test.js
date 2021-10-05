import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";
import {renderWithRedux} from './app.test';


describe("Компонент Header", () => {

    it ("Проверка на соотвествие снимку", () => {
        const header = renderWithRedux(<Header/>);
        expect(header).toMatchSnapshot();
    })

});