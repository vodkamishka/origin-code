import {useDispatch} from "react-redux";
import {addNote, deleteNotes, markReadNote, markReadNotes} from "../store/reducer";

export const useDispatchHook = () => {

    const dispatch = useDispatch();

    const deleteAllNotes = () => dispatch(deleteNotes());
    const markAllReadNotes = () => dispatch(markReadNotes());
    const addNewNote = (value, setValue) => {
        if (value) dispatch(addNote(value));
        if (setValue) setValue('');
    }
    const markNote = id => dispatch(markReadNote(id));


    return {deleteAllNotes, markAllReadNotes, addNewNote, markNote};
}