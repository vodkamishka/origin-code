import {useEffect, useState} from 'react';

const useAnchorPosLeft = () => {
    const [anchorPosLeft, setAnchorPosLeft] = useState(window.innerWidth);

    useEffect(() => {
        const setPosAnchor = () => setAnchorPosLeft(window.innerWidth);
        window.addEventListener('resize', setPosAnchor);

        return () => {
            window.removeEventListener('resize', setPosAnchor);
        }
    }, [])

    return anchorPosLeft;
};

export default useAnchorPosLeft;