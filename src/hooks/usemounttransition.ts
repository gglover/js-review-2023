import { useEffect, useState } from 'react';

function useMountTranstion(isMounted: boolean, duration: number) {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

    useEffect(() => {
        let timeoutId: number;

        if (isMounted && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        }
        else if (!isMounted && hasTransitionedIn) {
            setTimeout(() => { setHasTransitionedIn(false) }, duration);
        }

        return () => {
            clearTimeout(timeoutId);
        }
    }, [isMounted, duration, hasTransitionedIn]);
}

export default useMountTranstion;
