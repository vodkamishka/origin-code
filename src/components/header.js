import {IconButton, Badge} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useSelector} from 'react-redux';
import {getLengthReadNotes} from '../utils';

const Header = ({openPopover}) => {

    const {notes} = useSelector(state => state);

    const lengthReadNotes = getLengthReadNotes(notes);

    return (
        <div className="navbar">
            <div className="navbar_button">
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    onClick={openPopover}
                >
                    <Badge badgeContent={lengthReadNotes} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </div>
        </div>
    );

};

export default Header;