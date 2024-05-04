import React, { useEffect, useState } from "react";
import './searchbar.css'

const Search2 = ({ list1, setList1, filterField1 = item => item, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);

    if (value) {
      setList1(filterList1(value));
    } else {
      setList1([]);
    }
  };

  const filterList1 = (value) => {
    return list1.filter((item) => item.includes(value));
  };
  

  return (
    <input type="text" className="form-control" id="inputAddress2" placeholder="Où ? Localisation"
     onChange={handleChange} value={value} {...props} />
  );
};

export default Search2;
