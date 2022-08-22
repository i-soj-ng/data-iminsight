import React from 'react';
import styled from "styled-components";
import {AiFillSignal, AiOutlineTeam} from "react-icons/ai";

const ItemBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px;
  margin: 40px 25px 25px 25px;
  width: 84%;
  height: 80%;
`

export function ChurnBox() {
    return (
        <ItemBox>
            <h2>상위 이탈 위험 고객</h2>
        </ItemBox>
    );
}
