import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = ({history}) => {
    const backHandler = () => {
        history.goBack();
    }
    
    return (
        <div className={styles.Navigation}>
            <div className={styles.NavRight} onClick={backHandler}>
                بازگشت
            </div>
            <div className={styles.NavLeft}>
                <ul className={styles.NavList}>
                    <li>همه آگهی ها</li>
                    <li>دسته بندی</li>
                    <li>محصول</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
