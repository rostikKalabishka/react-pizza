import { useEffect, useState } from "react";
import { Categories } from "../components/Categories/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

function Home() {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function fetchData() {
      try {
        setIsLoading(true);
        fetch("https://640b30cc81d8a32198dcd59c.mockapi.io/items")
          .then((res) => res.json())
          .then((arr) => {
            setItems(arr);
            setIsLoading(false);
          });
      } catch (error) {
        alert("Error when requesting data");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) =>
              isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />
            )}
      </div>
    </>
  );
}
export default Home;
