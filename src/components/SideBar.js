import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Logo from "../assets/images/imweb_blue.png";
import { MenuItem } from "./MenuItem";
import { useResponsive } from "../hooks/useResponsive";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Box = styled.div`
  width: 260px;
  flex: none;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  background-color: #FFFFFF;
  text-align: center;
`

const LogoImg = styled.img`
  width: 100px;
  padding-top: 46px;
`

const LogoText = styled.p`
  font-weight: bold;
  font-size: 17px;
  margin: 6px 0 0 0;
  color: #666666;
`

const IconBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 28px;
  margin-top: 16px;
  margin-left: 32px;
  color: #666666;
`

function SideBarComponent() {
    return (
        <Box>
            <div style={{ marginBottom: '100px', textAlign: 'center' }}>
                <LogoImg src={Logo}/>
                <LogoText>Data Factory</LogoText>
            </div>
            <MenuItem/>
        </Box>
    );
}

export function SideBar() {
    const isHideSideBar = useResponsive();
    const [openSideBar, setOpenSideBar] = useState(false);

    const IconClicked = () => {
        setOpenSideBar(true);
        console.log(openSideBar);
    }

    // if (isHideSideBar) {
    //     return (
    //         <IconBox onClick={IconClicked}>
    //             <AiOutlineDoubleRight style={{ width: '28px', height: '28px' }}/>
    //         </IconBox>
    //     );
    // } else {
    //     SideBarComponent;
    // }

    return (
        isHideSideBar
        ?
            <IconBox onClick={IconClicked}>
                <AiOutlineDoubleRight style={{ width: '28px', height: '28px' }}/>
            </IconBox>
        :
            <Box>
                <div style={{ marginBottom: '100px', textAlign: 'center' }}>
                    <LogoImg src={Logo}/>
                    <LogoText>Data Factory</LogoText>
                </div>
                <MenuItem/>
            </Box>
    );
}
