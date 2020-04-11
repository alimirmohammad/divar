import React from 'react';
import styles from './CategoryItem.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryItem = (props) => {
    return (
        <div>
            <li className={styles.CategoryItem}>
                <img src={props.icon} />
                <NavLink to={props.link} exact activeClassName={styles.active}>
                    {props.children}
                </NavLink>
            </li>
        </div>
    )
}

export default CategoryItem
