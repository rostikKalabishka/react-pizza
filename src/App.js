import { Categories } from "./components/Categories/Categories";
import { Header } from "./components/Header/Header";
import { PizzaBlock } from "./components/PizzaBlock/PizzaBlock";
import { Sort } from "./components/Sort";
import "./scss/app.scss";

import pizzas from "./assets/pizzas.json";

console.log(pizzas);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
