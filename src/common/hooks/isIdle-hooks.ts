import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

export const IsldleHooks = () => {
    const timeout = 3000;
    const [remaining, setRemaining] = useState(timeout);
    const [elapsed, setElapsed] = useState(0);
    const [lastActive, setLastActive] = useState(+new Date())
    const [isIdle, setIsIdle] = useState(false);
    const handleOnActive = () => setIsIdle(false)
    const handleOnIdle = () => setIsIdle(true);

    const {
        getRemainingTime,
        getLastActiveTime,
        getElapsedTime
    } = useIdleTimer({
        timeout,
        onActive: handleOnActive,
        onIdle: handleOnIdle
    })

    useEffect(() => {
        setRemaining(getRemainingTime())
        setLastActive(getLastActiveTime())
        setElapsed(getElapsedTime())        
    }, [])

    return { isIdle };
}