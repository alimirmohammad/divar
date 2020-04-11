import React from 'react';
import styles from './CategoryItem2.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryItem2 = (props) => {
    return (
        <div>
            <li className={`${styles.CategoryItem2} ${styles[props.level]}`}>
                <NavLink to={props.link} exact activeClassName={styles.active}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    )
}

export default CategoryItem2
