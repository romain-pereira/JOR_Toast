import React from 'react';
import ToastShelf from "../ToastShelf";
import useEscapeKey from "../hooks/use-escape-key";

export const ToastContext = React.createContext({});

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([]);

    useEscapeKey(() => setToasts([]));

    function dismissToast(idToRemove) {
        setToasts((prevState) => [...prevState.filter(({id}) => id !== idToRemove)]);
    }

    function createToast(variant, message) {
        setToasts((prevToasts) =>
            [...prevToasts,
                {
                    id: crypto.randomUUID(),
                    variant,
                    message,
                }
            ]);
    }

    return (
        <ToastContext.Provider value={{createToast, dismissToast}}>
            <ToastShelf toasts={toasts}/>
            {children}
        </ToastContext.Provider>);
}

export default ToastProvider;
