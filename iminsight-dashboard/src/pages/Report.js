import React from 'react';
import { SelectSite } from "../components/SelectSite";
import { ChartBox } from "../components/ChartBox";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 40px 10px 30px 50px;
`

export default function Report() {
    return (
        <Box>
            <SelectSite/>
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <ChartBox/>
            </div>
        </Box>
    );
}
