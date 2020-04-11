import React from 'react';
import styles from './CityButton.module.scss';
import { NavLink } from 'react-router-dom';

const CityButton = (props) => {
    return (
        <NavLink to={props.link} activeClassName={styles.active}>
            <button className={styles.CityButton} onClick={props.closeCitySelector}>
                {props.children}
            </button>
        </NavLink>
    )
}

export default CityButton
