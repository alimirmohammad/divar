import React, {useRef, useEffect} from 'react';
import styles from './Input.module.scss';
import {setSearch} from '../../store/actions/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Input = (props) => {
    const inputRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(inputRef.current.value);
        if (inputRef.current.value) {
            props.history.push(`${props.location.pathname}?q=${inputRef.current.value}`);
        } else {
            props.history.push(`${props.location.pathname}`);
        }
        
    }
    return (
        <form className={styles.Input} onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} placeholder={`جستجو در ${props.categoryFa ? props.categoryFa : "همهٔ آگهی‌ها"}`} />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        categoryFa: state.categoryFa
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (search) => dispatch(setSearch(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Input))
