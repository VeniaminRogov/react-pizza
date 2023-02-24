import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';

import './scss/app.scss';

function App() {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`http://localhost:8000/api/pizzas`)
            .then((resp) => resp.json())
            .then((json) => {
                setPizzas(json);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map((pizza) =>
                            isLoading ? <Skeleton /> : <PizzaBlock key={pizza.id} {...pizza} />,
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
