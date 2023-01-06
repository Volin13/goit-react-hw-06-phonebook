import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleInputChange = ({ target }) => {
    setValue(target.value);
    dispatch(updateFilter(target.value.toLowerCase()));
  };

  return (
    <input
      className={css.styledImput}
      placeholder="Find by name"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Filter;
