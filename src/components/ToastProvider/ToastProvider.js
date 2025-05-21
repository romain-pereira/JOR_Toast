import React from 'react';
import ToastShelf from "../ToastShelf";
import useOnEscapeKey from "../hooks/useOnEscapeKey";

export const ToastContext = React.createContext({});

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([]);

    useOnEscapeKey(() => setToasts([]));

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

    return (<ToastContext.Provider value={{createToast}}>
        <ToastShelf toasts={toasts} dismiss={dismissToast}/>
        {children}
    </ToastContext.Provider>);
}

export default ToastProvider;
