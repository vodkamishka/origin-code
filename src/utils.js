import moment from 'moment';
import 'moment/locale/ru'

export const getLengthReadNotes = notes => notes.filter(note => note.read === false).length;

export const getDuration = oldDate => {

    const old = moment(oldDate);
    const now = moment(new Date());

    const duration = moment.duration(-now.diff(old)).locale('ru');

    return duration.humanize(true);
};

export const getFiveLastNotes = notes => notes.slice(-5).map(note => ({...note, duration: getDuration(note.birth)}));


