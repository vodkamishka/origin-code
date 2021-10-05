import React from "react";
import { render } from "@testing-library/react";
import App from "./app";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "../store/reducer";

export const renderWithRedux = (
    component,
    { initialState, store = configureStore({
        reducer,
    }) } = {}) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Компонент App", () => {

    it ("Проверка на соотвествие снимку", () => {
        const app = renderWithRedux(<App />);
        expect(app).toMatchSnapshot();
    })

});