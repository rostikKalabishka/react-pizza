import { useEffect, useState } from "react";
import { Categories } from "../components/Categories/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

function Home() {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const [selectedSort, setSelectedSort] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  useEffect(() => {
    const order = selectedSort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = selectedSort.sortProperty.replace("-", "");
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : " ";

    function fetchData() {
      try {
        setIsLoading(true);
        fetch(
          `https://640b30cc81d8a32198dcd59c.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
          .then((res) => res.json())
          .then((arr) => {
            setItems(arr);
            setIsLoading(false);
          });
      } catch (error) {
        alert("Error when requesting data");
      }
    }
    window.scrollTo(0, 0);
    fetchData();
  }, [categoryIndex, selectedSort]);

  console.log(categoryIndex, selectedSort);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          onClickCategory={(index) => setCategoryIndex(index)}
        />
        <Sort
          selectedSort={selectedSort}
          onClickSort={(index) => setSelectedSort(index)}
        />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) =>
              isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />
            )}
      </div>
    </div>
  );
}
export default Home;
