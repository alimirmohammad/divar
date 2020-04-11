import React from 'react';
import styles from './CategoryItem3.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryItem3 = (props) => {
    return (
        <div>
            <li className={`${styles.CategoryItem3} ${styles[props.level]}`}>
                <NavLink to={props.link} exact activeClassName={styles.active}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    )
}

export default CategoryItem3
