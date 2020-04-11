import React, {useEffect} from 'react';
import styles from './CategoryList.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryItem2 from './CategoryItem/CategoryItem2';
import CategoryItem3 from './CategoryItem/CategoryItem3';
import { connect } from 'react-redux';
import itemsList from '../../../itemsList';
import * as actions from '../../../store/actions/action';

const CategoryList = ({ city, search, category, onSetCategoryFa }) => {
    useEffect(() => {
        if (foundInLevel1) onSetCategoryFa(foundInLevel1.text);
        else if (foundInLevel2) onSetCategoryFa(foundInLevel2.text);
        else if (foundInLevel3) onSetCategoryFa(foundInLevel3.text);
        else onSetCategoryFa(null);
    }, [category])

    let query = '';
    if (search) query = `?q=${search}`;

    const initialList = itemsList.map(item => (
        <CategoryItem key={item.link} icon={item.icon} link={`/s/${city}/${item.link}${query}`}>
            {item.text}
        </CategoryItem>
    ));

    let content = (
        <ul className={styles.CategoryList}>
            {initialList}
        </ul>
    );

    const foundInLevel1 = itemsList.find(item => item.link === category);
    let listLevel1 = null;
    if (foundInLevel1) {
        listLevel1 = foundInLevel1.children.map(item => (
            <CategoryItem2 key={item.link} link={`/s/${city}/${item.link}${query}`} level="Level2">
                {item.text}
            </CategoryItem2>
        ));
        content = (
            <ul className={styles.CategoryList}>
                <CategoryItem2 link={`/s/${city}${query}`} level="Level0">
                    همهٔ آگهی‌ها
                </CategoryItem2>
                <CategoryItem2 link={`/s/${city}/${foundInLevel1.link}${query}`} level="Level1">
                    {foundInLevel1.text}
                </CategoryItem2>
                {listLevel1}
            </ul>
        );
    }

    let foundInLevel2 = null;
    let parentLevel1of2 = null;

    for (const level1 of itemsList) {
        foundInLevel2 = level1.children.find(level2 => level2.link === category);
        if (foundInLevel2) {
            parentLevel1of2 = level1;
            break;
        }
    }

    let listLevel2 = null;
    if (foundInLevel2) {
        listLevel2 = foundInLevel2.children.map(item => (
            <CategoryItem3 key={item.link} link={`/s/${city}/${item.link}${query}`} level="Level3">
                {item.text}
            </CategoryItem3>
        ));

        content = (
            <ul className={styles.CategoryList}>
                <CategoryItem3 link={`/s/${city}${query}`} level="Level0">
                    همهٔ آگهی‌ها
                </CategoryItem3>
                <CategoryItem3 link={`/s/${city}/${parentLevel1of2.link}${query}`} level="Level1">
                    {parentLevel1of2.text}
                </CategoryItem3>
                <CategoryItem3 link={`/s/${city}/${foundInLevel2.link}${query}`} level="Level2">
                    {foundInLevel2.text}
                </CategoryItem3>
                {listLevel2}
            </ul>
        );
    }

    let foundInLevel3 = null;
    let parentLevel1of3 = null;
    let parentLevel2of3 = null;
    let breakCheck1 = false;

    for (const level1 of itemsList) {
        for (const level2 of level1.children) {
            foundInLevel3 = level2.children.find(level3 => level3.link === category);
            if (foundInLevel3) {
                parentLevel1of3 = level1;
                parentLevel2of3 = level2;
                breakCheck1 = true;
                break;
            }
        }
        if (breakCheck1) break;
    }

    let listLevel3 = null;
    if (foundInLevel3) {
        listLevel3 = parentLevel2of3.children.map(item => (
            <CategoryItem3 key={item.link} link={`/s/${city}/${item.link}${query}`} level="Level3">
                {item.text}
            </CategoryItem3>
        ));

        content = (
            <ul className={styles.CategoryList}>
                <CategoryItem3 link={`/s/${city}${query}`} level="Level0">
                    همهٔ آگهی‌ها
                </CategoryItem3>
                <CategoryItem3 link={`/s/${city}/${parentLevel1of3.link}${query}`} level="Level1">
                    {parentLevel1of3.text}
                </CategoryItem3>
                <CategoryItem3 link={`/s/${city}/${parentLevel2of3.link}${query}`} level="Level2">
                    {parentLevel2of3.text}
                </CategoryItem3>
                {listLevel3}
            </ul>
        );
    }
    return content;
}

const mapStateToProps = state => {
    return {
        city: state.city,
        search: state.search,
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCategoryFa: (categoryFa) => dispatch(actions.setCategoryFa(categoryFa))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)