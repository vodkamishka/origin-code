import React from "react";
import {initialState} from "./reducer";
import reducer, {addNote, deleteNotes, markReadNotes, markReadNote} from './reducer'

describe("Тестирование Redux", () => {

    it ("Проверка кейса addNote", () => {

        const note = {
            id: Date.now(),
            text: 'React',
            read: false,
            birth: Date.now()
        }

        expect(reducer(initialState, addNote('React'))).toEqual(
            {
                notes: [
                    ...initialState.notes,
                    {
                        ...note
                    }
                ]
            }
        )
    })

    it ("Проверка кейса deleteNotes", () => {

        expect(reducer(initialState, deleteNotes())).toEqual(
            {
                notes: []
            }
        )
    })

    it ("Проверка кейса markReadNotes", () => {

        expect(reducer(initialState, markReadNotes())).toEqual(
            {
                notes: initialState.notes.map(note => ({...note, read: true}))
            }
        )
    })

    it ("Проверка кейса markReadNote", () => {

        expect(reducer(initialState, markReadNote(1))).toEqual(
            {
                notes: [
                    {id: 1, text: 'drink coffee', read: true, birth: '7-05-2010'},
                    {id: 2, text: 'walking in the street', read: true, birth: '1-01-2021'},
                    {id: 3, text: 'by tv set', read: false, birth: '10-1-2021'}
                ]
            }
        )
    })

});

