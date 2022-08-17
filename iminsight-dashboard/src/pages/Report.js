import React from 'react';
import { ChartBox } from "../components/ChartBox";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 10px 30px 10px;
  display: flex;
  flex-flow: row wrap;
`

export default function Report() {
    return (
        <Box>
            <ChartBox/>
        </Box>
    );
}
