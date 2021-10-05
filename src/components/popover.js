import {Popover, Typography} from '@mui/material';
import {useSelector} from 'react-redux';
import useAnchorPosLeft from '../hooks/useAnchorPosLeft';

import Notes from './notes';
import useGenerateEvent from "../hooks/useGenerateEvent";

const PopOver = ({anchorEl, closePopover}) => {

    useGenerateEvent();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const style = {fontWeight: 600, cursor: 'pointer', textDecoration: 'underline'};

    const anchorPosLeft = useAnchorPosLeft();

    const {notes} = useSelector(state => state);

    return (
        <div>
            <Popover
                anchorReference="anchorPosition"
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                onClose={closePopover}
                anchorPosition={{ top: 50, left: anchorPosLeft }}

            >
                {notes.length ?
                    <>
                        <Notes/>
                        <Typography
                            sx={{ p: 1 }}
                            style={style}
                            onClick={closePopover}
                        >
                            посмотреть все...
                        </Typography>
                    </>
                    :
                    <Typography sx={{ p: 1 }} variant="h6">События отсуствуют</Typography>}
            </Popover>
        </div>
    );
};

export default PopOver;