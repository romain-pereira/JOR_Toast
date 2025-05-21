import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import {ToastContext} from "../ToastProvider";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [selectedVariant, setSelectedVariant] = React.useState("notice");
    const [message, setMessage] = React.useState("");

    const {createToast} = React.useContext(ToastContext);


    function handleVariantChange(event) {
        setSelectedVariant(event.target.value);
    }

    function pushToast(event) {
        event.preventDefault();

        if (!message) {
            return;
        }

        createToast(selectedVariant, message);
        resetForm();
    }

    function resetForm() {
        setSelectedVariant('notice');
        setMessage("");
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src={"/toast.png"}/>
                <h1>Toast Playground</h1>
            </header>
            <div className={styles.controlsWrapper}>
                <form id="toast-form" onSubmit={pushToast}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{alignSelf: 'baseline'}}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                        <textarea id="message" className={styles.messageInput} value={message}
                                  onChange={(event) => setMessage(event.target.value)} form="toast-form"/>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map(variant => (
                                <label
                                    key={variant}
                                    htmlFor={`variant-${variant}`}>
                                    <input
                                        id={`variant-${variant}`}
                                        type="radio"
                                        name={variant}
                                        value={variant}
                                        checked={variant === selectedVariant}
                                        onChange={handleVariantChange}
                                    />
                                    {variant}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}/>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button onClick={pushToast}>Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
