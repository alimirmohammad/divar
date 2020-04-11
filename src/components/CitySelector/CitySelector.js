import React from 'react';
import styles from './CitySelector.module.scss';
import CityButton from '../CityButton/CityButton';
import { Link } from 'react-router-dom';

const CitySelector = (props) => {
    const popularCities = [
        {
            en: 'tehran',
            fa: 'تهران'
        },
        {
            en: 'mashhad',
            fa: 'مشهد'
        },
        {
            en: 'karaj',
            fa: 'کرج'
        },
        {
            en: 'shiraz',
            fa: 'شیراز'
        },
        {
            en: 'isfahan',
            fa: 'اصفهان'
        },
        {
            en: 'ahvaz',
            fa: 'اهواز'
        },
        {
            en: 'tabriz',
            fa: 'تبریز'
        },
        {
            en: 'kermanshah',
            fa: 'کرمانشاه'
        },
        {
            en: 'qom',
            fa: 'قم'
        },
        {
            en: 'rasht',
            fa: 'رشت'
        },
    ];

    const links = popularCities.map(city => (
        <CityButton closeCitySelector={props.onClose} link={`/s/${city.en}`} key={city.en}>
                {city.fa}
        </CityButton>
    ));

    return (
        <div className={styles.CitySelector}>
            <h2>انتخاب شهر</h2>
            <div className={styles.ButtonBox}>
                {links}
            </div>
        </div>
    )
}

export default CitySelector
