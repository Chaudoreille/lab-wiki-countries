import React, { useState, useEffect } from 'react';

const FilterOptions = ({ setVariable, defaultOption, children }) => {
  const [selected, select] = useState();

  const setOption = (e) => {
    const opt = e.currentTarget.innerText;

    if (selected === opt) {
      select(null);
    } else {
      select(opt);
      setVariable(opt);
    }
  };

  useEffect(() => {
    select(defaultOption);
    setVariable(defaultOption);
  }, []);

  return (
    <ul className="row list-unstyled">
      {children.map((opt) => (
        <li key={opt} className="col p-0">
          <button
            type="button"
            className={
              (opt === defaultOption ? 'active' : '') + 'btn btn-light'
            }
            onClick={setOption}
          >
            {opt}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterOptions;
