import React from 'react';
import styled from "styled-components";
import {AiFillSignal, AiOutlineTeam} from "react-icons/ai";

const churnData = [
    {
        title: '상위 이탈 위험 고객',
    },
    {
        title: '하위 이탈 위험 고객',
    },
];

const ItemBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px;
  margin: 25px;
  width: 40%;
  height: 100%;
`

export function ChurnBox() {
    return (
        churnData.map((item,idx) =>
            <ItemBox>
                <h2>{ item.title }</h2>
            </ItemBox>
        )
    );
}
