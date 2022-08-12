import React, { useState, useEffect } from 'react';
import { AiFillSignal, AiFillFrown, AiOutlineTeam } from "react-icons/ai";
import styled from "styled-components";
import {Link} from "react-router-dom";

const menuData = [
    {
        title: '이탈 위험 고객',
        path: '/',
        icon: <AiOutlineTeam style={{ marginRight: '3px', width: '19px', height: '19px' }}/>,
    },
    {
        title: '고객 사이트 분석',
        path: '/report',
        icon: <AiFillSignal style={{ marginRight: '5px', width: '17px' }}/>,
    },
];

const Menu = styled.button`
  width: 92%;
  padding: 17px 0 17px 35px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-align: left;
  background-color: ${(props) => (props.isActive ? '#E8F1FE' : 'transparent')};
  color: ${(props) => (props.isActive ? '#1a6dff' : '#666666')};
  
  &:hover {
    background-color: #E8F1FE;
    color: #356BFF;
  }
`

export function MenuItem() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const menuClicked = (e) => {
        setCurrentPath(e.currentTarget.value);
    }

    return (
        menuData.map((item, idx) =>
            <Link to={item.path}>
                <Menu
                    key={idx}
                    value={item.path}
                    onClick={menuClicked}
                    isActive={item.path === currentPath}
                >
                    { item.icon }
                    <span style={{ margin: '16px 0 16px 0'}}>{ item.title }</span>
                </Menu>
            </Link>
        )
    );
}
