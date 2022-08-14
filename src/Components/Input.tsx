import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  header: string;
  register: any;
  type: string;
  errors: any;
}

const InputField = styled.input<Props>`
  width: 640px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  &:focus {
    outline: none;
  }
  border: ${(props) =>
    props.value === 0 &&
    css`
      1px solid #e26f6f;
    `};
  color: ${(props) =>
    props.value === 0 &&
    css`
        #e26f6f;
      `};
`;

const Header = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin: 20px 0px 10px 0px;
`;

export const Input: FC<Props> = (props) => {
  return (
    <>
      <Header>{props.header}</Header>
      <InputField {...props.register} />
    </>
  );
};
