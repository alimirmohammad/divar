import React from 'react';
import styles from './FilterButton.module.scss'

const FilterButton = (props) => {
    let classes = [styles.FilterButton];
    if (props.category) classes = [styles.FilterButton, styles.Category];
    return (
        <button className={classes.join(' ')}>
            {props.children}
        </button>
    )
}

export default FilterButton
