import { useEffect, useState } from 'react';

function useMountTranstion(
    isVisible: boolean,
    duration: number,
    onTransitionedIn: () => void,
    onTransitionedOut: () => void
) {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

    useEffect(() => {
        let timeoutId: number;

        if (isVisible && !hasTransitionedIn) {
            setHasTransitionedIn(true);
            setTimeout(onTransitionedIn, duration);
        }

        else if (!isVisible && hasTransitionedIn) {
            setHasTransitionedIn(false);
            setTimeout(onTransitionedOut, duration);
        }

        return () => {
            clearTimeout(timeoutId);
        }
    }, [isVisible, duration, hasTransitionedIn]);

    return setHasTransitionedIn;
}

export default useMountTranstion;
