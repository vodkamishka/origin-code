import React from 'react';
import {Button, Stack} from "@mui/material";
import {useDispatchHook} from "../hooks/useDispatchHook";

const Buttons = ({openPopover}) => {

    const {deleteAllNotes, markAllReadNotes} = useDispatchHook();

    const btns = [
        {id: 1, color: 'secondary', onClick: markAllReadNotes, text: 'Пометить все события прочитанными'},
        {id: 2, color: 'error', onClick: deleteAllNotes, text: 'Удалить все события'},
        {id: 3, color: 'warning', onClick: openPopover, text: 'Скрыть/показать попап нотификаций'},
        ]

    return (
        <Stack direction="column" spacing={1} className="main_buttons">
            {btns.map(btn =>
                <Button
                    key = {btn.id}
                    color = {btn.color}
                    variant="contained"
                    onClick={btn.onClick}
                >
                    {btn.text}
                </Button>
            )}
        </Stack>
    );
};

export default Buttons;