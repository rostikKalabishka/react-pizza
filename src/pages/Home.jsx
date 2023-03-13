import { useEffect, useState } from "react";

import { Categories } from "../components/Categories/Categories";
import Pagination from "../components/Pagination/Pagination";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

function Home({ searchValue }) {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSort, setSelectedSort] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  useEffect(() => {
    const order = selectedSort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = selectedSort.sortProperty.replace("-", "");
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : " ";
    const search = searchValue ? `search=${searchValue}` : " ";
    // const renderItems = () => {
    //   const filtredItems = items.filter((item) =>
    //     item.title.toLowerCase().includes(searchValue.toLowerCase())
    //   );

    function fetchData() {
      try {
        setIsLoading(true);
        fetch(
          `https://640b30cc81d8a32198dcd59c.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}search=${search}`
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
  }, [categoryIndex, selectedSort, searchValue, currentPage]);

  const pizzas = items
    .filter((obj) => {
      return obj.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    .map((obj) =>
      isLoading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />
    );

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));
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
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
export default Home;
