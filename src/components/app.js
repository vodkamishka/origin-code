import {useState} from 'react';

import Header from './header';
import PopOver from './popover';
import Main from './main';

function App() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openPopover = (event) => setAnchorEl(event.currentTarget);

    const closePopover = () => setAnchorEl(null);

    return (
        <div className="App">
            <Header openPopover={openPopover}/>
            <PopOver anchorEl={anchorEl} closePopover={closePopover}/>
            <Main openPopover={openPopover} />
        </div>
    );
}

export default App;
