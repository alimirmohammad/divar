import React from 'react'
import bazaar from '../../assets/png/bazaar-badge.png';
import appstore from '../../assets/png/appstore-badge.png';
import enamad from '../../assets/png/enamad.png';
import styles from './Sidebar.module.scss';
import CategoryList from './CategoryList/CategoryList';
import { ReactComponent as ChevronDownIcon } from '../../assets/svg/chevron-thin-down.svg';
import { ReactComponent as SwitchIcon } from '../../assets/svg/switch.svg';

// #bdbdbd
// rgba(0,0,0,.24)
const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.CategorySection}>
                <h3 className={styles.CategoryHeading}>دسته‌بندی‌ها</h3>
                <CategoryList />
            </div>
            <div className={`${styles.CategorySection} ${styles.FlexSection}`}>
                <h3 className={styles.CategoryHeading}>محل</h3>
                <ChevronDownIcon className={styles.ChevronDownIcon} />
            </div>
            <div className={`${styles.CategorySection} ${styles.FlexSection}`}>
                <h3 className={styles.CategoryHeading}>قیمت</h3>
                <ChevronDownIcon className={styles.ChevronDownIcon} />
            </div>
            <div className={`${styles.CategorySection} ${styles.FlexSection}`}>
                <h3 className={styles.CategoryHeading}>فقط عکس‌دار</h3>
                <SwitchIcon className={styles.SwitchIcon} />
            </div>
            <div className={styles.CategorySection}>
                <div className={styles.FlexSection}>
                    <h3 className={styles.CategoryHeading}>فقط فوری‌ها</h3>
                    <SwitchIcon className={styles.SwitchIcon} />
                </div>
                <img className={styles.CategoryLogo} src={bazaar} />
                <img className={styles.CategoryLogo} src={appstore} />
            </div>
            <div className={styles.CategorySection}>
                <img className={styles.EnamadLogo} src={enamad} />
            </div>

        </div>
    )
}

export default Sidebar
