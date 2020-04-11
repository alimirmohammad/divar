import React from 'react';
import styles from './FilterButtons.module.scss';
import FilterButton from './FilterButton/FilterButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';

const FilterButtons = (props) => {
    if (props.error) return null;
    const filterNameList = props.data.suggestion_list.map(el => el.displayed_text);
    const filterUrlList = ['car', 'buy-apartment', 'rent-apartment', 'mobile-phones',
        'sofa-armchair', 'pets-animals', 'personal-goods', 'services', 'jobs',
        'tv-projector'];
    let filterInfo = [];
    for (let i = 0; i < filterNameList.length; i++) {
        const item = {
            displayed_text: filterNameList[i],
            url: filterUrlList[i]
        };
        filterInfo.push(item);
    }

    let search = '';
    if (props.search) search = `?q=${props.search}`;

    const buttons = filterInfo.map(btn => <Link key={btn.url} to={`/s/${props.city}/${btn.url}${search}`}><FilterButton>{btn.displayed_text}</FilterButton></Link>);

    return (
        <div className={styles.FilterButtons}>
            <Link
                to={`/s/${props.city}/${search}#category`}
                className={styles.Category}>
                <FilterButton><Menu className={styles.Menu} />دسته‌بندی</FilterButton>
            </Link>
            {buttons}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        city: state.city,
        data: state.data,
        error: state.error,
        search: state.search
    }
}

export default connect(mapStateToProps)(FilterButtons)
