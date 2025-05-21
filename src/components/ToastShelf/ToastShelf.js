import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, dismiss}) {

    return (<ol className={styles.wrapper}
                role="region"
                aria-live="polite"
                aria-label="Notification">
        {toasts.map(({id, variant, message}) =>
            <li key={id} className={styles.toastWrapper}>
                <Toast variant={variant} message={message} handleDismiss={() => dismiss(id)}/>
            </li>)}
    </ol>);
}

export default ToastShelf;
