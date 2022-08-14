import React, { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  radioBox?: boolean;
}

const CheckSquare = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
`;
const Square = styled.input<Props>`
  width: 14px;
  position: absolute;
  height: 14px;
  top: 2px;
  left: 2px;
  border-radius: 2px;
  border: none;
  background: ${({ radioBox }) =>
    radioBox &&
    css`
   #4A67FF;
  `};
`;
const CheckText = styled.div`
  display: inline-block;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin-left: 17px;
`;
const BlockInput = styled.div`
  display: flex;
  margin: 21px 0px 40px 0px;
`;

export const RadioButton = () => {
  const [radioBox, setRadioBox] = useState<boolean>(false);

  return (
    <BlockInput>
      <CheckSquare>
        <Square
          id="input"
          type="checkbox"
          checked={radioBox}
          onChange={() => setRadioBox(!radioBox)}
        />
      </CheckSquare>
      <label htmlFor="input">
        <CheckText>Запомнить пароль</CheckText>
      </label>
    </BlockInput>
  );
};
