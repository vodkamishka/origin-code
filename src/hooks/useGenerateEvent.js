import {useEffect} from "react";

import {useDispatchHook} from './useDispatchHook';

import faker from 'faker';

faker.locale = 'ru';

const useGenerateEvent = () => {

    const {addNewNote} = useDispatchHook();

    const generateSendSentence = () => {
        const sentence = faker.lorem.sentence();
        addNewNote(sentence);
    }

    useEffect(() => {
        const interval = setInterval(generateSendSentence, 10000)
        return () => clearInterval(interval)
    }, [])

};

export default useGenerateEvent;