import React from 'react';

function Categories() {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [activeCategory, setActiveCategory] = React.useState(0);

    const onClickActiveCategory = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => onClickActiveCategory(index)}
                        className={activeCategory === index ? 'active' : ''}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
