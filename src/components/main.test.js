import React from "react";
import Main from "./main";
import {renderWithRedux} from './app.test';
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {TextField} from "@mui/material";

const onChange = jest.fn();

describe("Компонент Main", () => {

    it ("Проверка на соотвествие снимку", () => {
        const main = renderWithRedux(<Main />);
        expect(main).toMatchSnapshot();
    })

    it("Проверка набора текста в input и вызова функции onChange", () => {

        render(<TextField
            id="outlined-basic"
            label="Введите название события"
            variant="outlined"
            className="main_input"
            onChange={onChange}
        />);
        expect(screen.queryByDisplayValue('React')).toBeNull();
        userEvent.type(screen.getByRole('textbox'), "React");
        expect(onChange).toHaveBeenCalledTimes(5);
        expect(screen.queryByDisplayValue('React')).toBeInTheDocument();
    })

})