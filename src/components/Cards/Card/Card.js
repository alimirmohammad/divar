import React from 'react';
import styles from './Card.module.scss';
import {ReactComponent as ChatIcon} from '../../../assets/svg/bubbles4.svg';
import fallbackImg from '../../../assets/png/fallback.png';

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Description}>
                <h3 className={styles.Title}>{props.info.title}</h3>
                <p className={styles.Price}>{props.info.description}</p>
                <div className={styles.Details}>
                    {props.info.red_text && <span className={styles.RedText}>{props.info.red_text}</span>}
                    <p className={styles.Location}>{props.info.normal_text}</p>
                    {props.info.has_chat && <ChatIcon className={styles.ChatIcon} />}
                </div>
            </div>
            <div className={styles.ImgBox}>
                {props.info.image ? <img src={props.info.image} /> : <img src={fallbackImg} />}
            </div>
        </div>
    )
}

export default Card
