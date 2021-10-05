import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    notes: [
        {id: 1, text: 'drink coffee', read: false, birth: '7-05-2010'},
        {id: 2, text: 'walking in the street', read: true, birth: '1-01-2021'},
        {id: 3, text: 'by tv set', read: false, birth: '10-1-2021'}
    ]
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action) {
            const note = {
                id: Date.now(),
                text: action.payload,
                read: false,
                birth: Date.now()
            }
            state.notes.push(note)
        },
        deleteNotes(state) {
            state.notes = []
        },
        markReadNotes(state) {
            state.notes = state.notes.map(note => ({...note, read: true}))
        },
        markReadNote(state, action) {
            const index = state.notes.findIndex(el => el.id === action.payload);
            const note = state.notes[index];
            state.notes = [
                ...state.notes.slice(0, index),
                {...note, read: true},
                ...state.notes.slice(index+1)
            ]
        }
    }
})

export const {addNote, deleteNotes, markReadNotes, markReadNote} = notesSlice.actions;

export default notesSlice.reducer
