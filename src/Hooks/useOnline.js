// This hook return whether am i online or not
// logic for you are online or offline

import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnlie] = useState(true)

    useEffect(() => {

        const handleOnline = () => {
            setIsOnlie(true)
        }

        const handleOffline = () => {
            setIsOnlie(false)
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        // clearing the event listeners.
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    }, [])

    return isOnline; // return true or false
}

export default useOnline;