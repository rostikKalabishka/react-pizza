import { Categories } from "./components/Categories/Categories";
import { Header } from "./components/Header/Header";
import { PizzaBlock } from "./components/PizzaBlock/PizzaBlock";
import { Sort } from "./components/Sort";
import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">All pizza</h2>
          <div class="content__items"></div>
          <PizzaBlock title="dsadsada" price={29.99} />
        </div>
      </div>
    </div>
  );
}

export default App;
