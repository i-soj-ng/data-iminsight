import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding-left: 260px;
`

const ItemBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px;
  margin: 25px;
  width: 40%;
  height: 100%;
`

export default function Churn() {
    return (
        <Box>
            <ItemBox>
                <h2>상위 이탈 위험 고객</h2>
            </ItemBox>
            <ItemBox>
                <h2>하위 이탈 위험 고객</h2>
            </ItemBox>
        </Box>
    );
}
