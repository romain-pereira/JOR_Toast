import {useEffect} from 'react';

function useEscapeKey(callback) {
    useEffect(() => {
        function onEscapeKeyDown(event) {
            if (event.code === "Escape") {
                callback();
            }
        }

        window.addEventListener("keydown", onEscapeKeyDown);

        return () => {
            window.removeEventListener("keydown", onEscapeKeyDown)
        }
    }, [callback]);
}

export default useEscapeKey;