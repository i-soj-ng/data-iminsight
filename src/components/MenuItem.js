import React, { useState } from 'react';
import { AiFillSignal, AiFillFrown, AiOutlineDatabase } from "react-icons/ai";
import styled from "styled-components";

const menuData = [
    {
        title: '사이트 통계',
        icon: <AiFillSignal style={{ marginRight: '5px', width: '17px' }}/>,
    },
    {
        title: '이탈 위험 고객',
        icon: <AiFillFrown style={{ marginRight: '5px', width: '17px' }}/>,
    },
    {
        title: '데이터 공장',
        icon: <AiOutlineDatabase style={{ marginRight: '5px', width: '17px' }}/>,
    },
];

const Menu = styled.button`
  width: 92%;
  padding: 0 0 0 35px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-align: left;
  background-color: ${(props) => (props.isActive ? '#E8F1FE' : 'transparent')};
  color: ${(props) => (props.isActive ? '#356BFF' : '#666666')};
  
  &:hover {
    background-color: #E8F1FE;
    color: #356BFF;
  }
`

export function MenuItem() {
    const [btnActive, setBtnActive] = useState(0);

    const menuClicked = (e) => {
        setBtnActive(Number(e.currentTarget.value));
    }

    return (
      <div>
          { menuData.map((item, idx) =>
              <Menu
                  key={idx}
                  value={idx}
                  onClick={menuClicked}
                  isActive={idx === btnActive}
              >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      { item.icon }
                      <p style={{ margin: '16px 0 16px 0'}}>{ item.title }</p>
                  </div>
              </Menu>
          )}
      </div>
    );
}
