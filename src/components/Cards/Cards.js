import React, { useState, useEffect } from 'react';
import styles from './Cards.module.scss';
import Card from './Card/Card';
import FilterButton from '../FilterButtons/FilterButton/FilterButton';
import * as actions from '../../store/actions/action';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Cards = (props) => {

    useEffect(() => {
        props.setCity(props.match.params.city);
        props.setCategory(props.match.params.category);
    }, [props.match.params])

    if (props.error) {
        return (
            <>
                <p>متاسفانه مشکلی پیش آمده است</p>
                <p>لطفا مجددا تلاش بفرمایید</p>
            </>
        );
    }

    const productHandler = (info) => {
        props.setPoduct(info);
    }

    const content = (
        <>
        {props.categoryFa && <FilterButton category>{props.categoryFa}</FilterButton>}
        <div className={styles.Cards}>
            {props.items.map(card => (
                <Link  key={card.data.token} to={`/v/${card.data.token}`} onClick={() => productHandler(card.data)}>
                    <Card info={card.data} />
                </Link>
            ))}
        </div>
        </>
    );

    return content;
}

const mapStateToProps = state => {
    return {
        items: state.items,
        error: state.error,
        categoryFa: state.categoryFa
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCity: (city) => dispatch(actions.setCity(city)),
        setCategory: (category) => dispatch(actions.setCategory(category)),
        setPoduct: (product) => dispatch(actions.setProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
