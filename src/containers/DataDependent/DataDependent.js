import React, { useEffect, useState } from 'react';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/Spinner/Spinner';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/action';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const DataDependent = (props) => {
    useEffect(() => {
        props.fetchData(props.city, props.category, props.search);
    }, [props.city, props.category, props.search])

    useBottomScrollListener(() => {
        props.fetchMoreData(props.next, props.search);
    });

    let content = <Spinner />;
    if (props.data || props.error) {
        content = (
            <Switch>
                <Route
                    path="/s/:city/:category"
                    component={Cards} />
                <Route
                    path="/s/:city"
                    render={(props) => (
                        <>
                            <FilterButtons {...props} />
                            <Cards {...props} />
                        </>
                    )} />
            </Switch>
        );
    }

    return content;
}

const mapStateToProps = state => {
    return {
        city: state.city,
        category: state.category,
        data: state.data,
        error: state.error,
        search: state.search,
        next: state.next
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (city, category, search) => dispatch(actions.fetchData(city, category, search)),
        fetchMoreData: (next, search) => dispatch(actions.fetchMoreData(next, search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDependent)
