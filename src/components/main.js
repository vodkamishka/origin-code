import {Button, Stack, TextField} from '@mui/material';
import {useState} from 'react';
import {useDispatchHook} from '../hooks/useDispatchHook';

import Buttons from './buttons';

const Main = ({openPopover}) => {

    const {addNewNote} = useDispatchHook();

    const [value, setValue] = useState('');

    const onChange = e => setValue(e.target.value);

    return (
        <main className="main">
            <Stack direction="row" spacing={1} className="main_input-button">
                <TextField
                    id="outlined-basic"
                    label="Введите название события"
                    variant="outlined"
                    className="main_input"
                    onChange={onChange}
                    value={value}
                />
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => addNewNote(value, setValue)}
                >
                    Отправить
                </Button>
            </Stack>
            <Buttons openPopover={openPopover}/>
        </main>
    );
};

export default Main;