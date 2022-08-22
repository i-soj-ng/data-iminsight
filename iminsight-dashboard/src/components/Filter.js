import React from 'react';
import styled from "styled-components";

const filterData = [
    {
        year: 2022
    },
    {
        year: 2021
    },
    {
        year: 2020
    },
    {
        year: 2019
    },
    {
        year: 2018
    },
    {
        year: 2017
    },
]

const FilterBox = styled.select`
  width: 76px;
  height: 30px;
  padding: 4px;
  border: 1.5px solid lightgray;
  border-radius: 3px;
  color: #333333;
  font-size: 14px;
`

export function Filter() {
    return (
        <FilterBox name="select_year" id="select_year">
            {filterData.map((item, idx) =>
                <option value={ item.year }>{ item.year }</option>
            )}
        </FilterBox>
    );
}
