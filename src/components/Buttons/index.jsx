import React from 'react'
import styled from "styled-components";


const CalcButtonStyled = styled.button`
  position: absolute;
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 10px;
  opacity: 0.2;
`;

const CalcButtons = (props) => {
  const buttons = []
  props.buttons.map((b) => {
    buttons.push(
      <CalcButtonStyled
        key={b.value}
        style={{
          left: b.x,
          top: b.y,
          width: b.width,
          height: b.height,
        }}
        onClick={() => props.keyCallback(b.value)}
      ></CalcButtonStyled>
    );
  })

  return <>{buttons}</>;

}

export default CalcButtons