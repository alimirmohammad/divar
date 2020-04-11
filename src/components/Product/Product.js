import React from 'react';
import styles from './Product.module.scss';
import {ReactComponent as ChatIcon} from '../../assets/svg/bubbles.svg';
import Image from '../../assets/png/fallback.png';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Product = ({info}) => {
    if (!info) return <Redirect to="/s/tehran" />;
    return (
        <div className={styles.Product}>
            <div className={styles.Info}>
                <h1>{info.title}</h1>
                <div className={styles.BtnContainer}>
                    <button className={`${styles.Btn} ${styles.Red}`}>دریافت اطلاعات تماس</button>
                    {info.has_chat && <button className={`${styles.Btn} ${styles.White}`}><ChatIcon className={styles.ChatIcon} /> <span>شروع چت</span></button>}
                    <button className={`${styles.Btn} ${styles.White}`}>نشان کردن</button>
                </div>
                <ul className={styles.DescList}>
                    <li>
                        <span>دسته‌بندی</span>
                        <span>{info.category}</span>
                    </li>
                    <li>
                        <span>محل</span>
                        <span className={styles.RedText}>{`${info.city}، ${info.district}`}</span>
                    </li>
                    <li>
                        <span>قیمت</span>
                        <span>{info.description}</span>
                    </li>
                </ul>
            </div>
            <div className={styles.Picture}>
                <img src={info.image || Image} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        info: state.product
    }
}

export default connect(mapStateToProps)(Product)
