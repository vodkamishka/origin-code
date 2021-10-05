import {Typography} from "@mui/material";

import {useDispatchHook} from "../hooks/useDispatchHook";
import {getFiveLastNotes} from "../utils";
import {useSelector} from "react-redux";

const Notes = () => {

    const {notes} = useSelector(state => state);

    const lastFiveNotes = getFiveLastNotes(notes);

    const {markNote} = useDispatchHook();

    return <>
        {lastFiveNotes.map(note =>
            <div key={note.id} onClick={() => note.read ? null : markNote(note.id)}>
                <Typography
                    sx={{ p: 1 }}
                    style={{fontWeight: note.read ? 400 : 600, cursor: note.read ? 'default' : 'pointer'}}
                >
                    {note.text}
                </Typography>
                <div className='duration'>{note.duration}</div>
            </div>
        )}
        </>;
};

export default Notes;