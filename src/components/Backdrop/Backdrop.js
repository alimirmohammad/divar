import React from 'react';
import styles from './Backdrop.module.scss';

const Backdrop = (props) => {
    return (
        <div className={styles.Backdrop} onClick={props.onClose}>
            
        </div>
    )
}

export default Backdrop
