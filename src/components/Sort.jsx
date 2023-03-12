import { useState } from "react";

export function Sort({ selectedSort, onClickSort }) {
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const sortPop = [
    { name: "popularity (ASC)", sortProperty: "-rating" },
    { name: "popularity (DESC)", sortProperty: "rating" },
    { name: "price (ASC)", sortProperty: "-price" },
    { name: "price (DESC)", sortProperty: "price" },
    { name: "alphabetically (ASC)", sortProperty: "-title" },
    { name: "alphabetically (DESC)", sortProperty: "title" },
  ];

  const onSelectedSort = (obj) => {
    onClickSort(obj);
    setIsVisiblePopup(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sorted by:</b>
        <span onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
          {selectedSort.name}
        </span>
      </div>

      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortPop.map((obj, index) => (
              <li
                key={index}
                onClick={() => onSelectedSort(obj)}
                className={
                  selectedSort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
