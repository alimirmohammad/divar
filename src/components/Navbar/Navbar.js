import React, {useState} from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';
import { connect } from 'react-redux';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';


const Navbar = (props) => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(prevToggle => !prevToggle);
    }
    
    let cityName = '';
    switch (props.city) {
        case 'tehran':
            cityName = 'تهران';
            break;
        case 'mashhad':
            cityName = 'مشهد';
            break;
        case 'karaj':
            cityName = 'کرج';
            break;
        case 'shiraz':
            cityName = 'شیراز';
            break;
        case 'isfahan':
            cityName = 'اصفهان';
            break;
        case 'ahvaz':
            cityName = 'اهواز';
            break;
        case 'tabriz':
            cityName = 'تبریز';
            break;
        case 'kermanshah':
            cityName = 'کرمانشاه';
            break;
        case 'qom':
            cityName = 'قم';
            break;
        case 'rasht':
            cityName = 'رشت';
            break;

        default:
            cityName = 'تهران';
            break;
    }

    return (
        <nav className={styles.Navbar}>
            <div className={styles.NavRight}>
                <a href="#" className={styles.NavLogo}>
                    <img src={logo} />
                </a>
                <button className={styles.NavCityBtn} onClick={props.onSelect}>{cityName}</button>
            </div>
            <div className={styles.NavLeft}>
                <ul className={styles.NavItemsLeft}>
                    <li className={styles.NavItem}>دیوار من</li>
                    <li className={styles.NavItem}>چت</li>
                    <li className={styles.NavItem}>درباره ما</li>
                    <li className={styles.NavItem}>بلاگ</li>
                    <li className={styles.NavItem}>پشتیبانی و قوانین</li>
                    <li className={styles.NavItem}>تماس با ما</li>
                </ul>
                <button className={styles.NavRedBtn}>ثبت رایگان آگهی</button>
                <button className={styles.NavMenuBtn} onClick={toggleHandler}><Menu className={styles.Menu} /></button>
            </div>
            {toggle && (
                <ul className={styles.NavMenu}>
                    <li className={styles.NavItem}>دیوار من</li>
                    <li className={styles.NavItem}>چت</li>
                    <li className={styles.NavItem}>درباره ما</li>
                    <li className={styles.NavItem}>بلاگ</li>
                    <li className={styles.NavItem}>پشتیبانی و قوانین</li>
                    <li className={styles.NavItem}>تماس با ما</li>
                </ul>
            )}
        </nav>

    )
}

const mapStateToProps = state => {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps)(Navbar)
