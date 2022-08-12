import React from 'react';
import styled from "styled-components";
import { ChurnBox } from "../components/ChurnBox";

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding-left: 260px;
`

export default function Churn() {
    return (
        <Box>
            <ChurnBox/>
        </Box>
    );
}
